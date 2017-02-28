new Vue({
  el: '#weather-section',
  data: {
    cities: [],
    cityName: '',
    currentPage: 1,
    citiesOnPage: 3,
    sorted: false,
    progress: false
  },
  computed: {
    totalPages: function () {
      return this.cities.length ? Math.ceil(this.cities.length / this.citiesOnPage) : 1;
    },
    visibleCities: function () {
      let cities = (this.sorted ? this.sortedCities : this.cities);
      if (cities.length <= this.citiesOnPage) {
        return cities;
      }
      return cities.slice((this.citiesOnPage * (this.currentPage - 1)), (this.citiesOnPage * this.currentPage));
    },
    sortedCities: function () {
      let cities = JSON.parse(JSON.stringify(this.cities));
      return cities.sort(function (first, second) {
        if (first.name.toLowerCase() < second.name.toLowerCase()) return -1;
        if (second.name.toLowerCase() < first.name.toLowerCase()) return 1;
        return 0;
      });
    }
  },
  methods: {
    getTime: function (UTC) {
      let time = new Date(UTC * 1000);
      return time.getHours() + ':' + (String(time.getMinutes()).length > 1 ? time.getMinutes() : '0' + time.getMinutes());
    },
    getPage: function (index) {
      if (parseInt(index) && (index > 0 && index <= this.totalPages) && index !== this.currentPage) {
        document.body.scrollTop = 0;
        return this.$set(this, 'currentPage', index);
      }
    },
    removeCity: function (index) {
      return this.cities.splice(index, 1);
    },
    toggleSort: function () {
      return this.sorted = !this.sorted;
    },
    removeDuplicates: function (givenCity) {
      let self = this;
      this.cities.forEach(function (city, index) {
        let exists = false;
        if (city.name === givenCity.name) {
          if ('sys' in city && 'country' in city.sys &&
              'sys' in givenCity && 'country' in givenCity.sys) {
            if (city.sys.country === givenCity.sys.country) {
              exists = true
            }
          } else {
            exists = true;
          }
        }
        if (exists) {
          self.cities.splice(index, 1);
        }
      });
    },
    addCity: function () {
      this.$validator.validateAll()
          .then(result => {
            if (result) {
              this.progress = true;
              this.$http.post('/add-city', {city: this.cityName})
                  .then(
                      response => {
                        this.progress = false;
                        if ('data' in response && response.data && 'name' in response.data) {
                          this.removeDuplicates(response.data);
                          this.cities.unshift(response.data);
                        }
                      },
                      error => {
                        this.progress = false;
                        if ('data' in error && Array.isArray(error.data)) {
                          error.data.forEach(function (err) {
                            this.errors.add(err.field, err.msg);
                          });
                        } else {
                          this.errors.add('search', 'Unknown error');
                          console.log(error);
                        }
                      });
            }
          })
          .catch(error => {
            // console.log(error);
          });
    }
  }
});