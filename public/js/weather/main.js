/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

window.a = new Vue({
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
    totalPages: function totalPages() {
      return this.cities.length ? Math.ceil(this.cities.length / this.citiesOnPage) : 1;
    },
    visibleCities: function visibleCities() {
      var cities = this.sorted ? this.sortedCities : this.cities;
      if (cities.length <= this.citiesOnPage) {
        return cities;
      }
      return cities.slice(this.citiesOnPage * (this.currentPage - 1), this.citiesOnPage * this.currentPage);
    },
    sortedCities: function sortedCities() {
      var cities = JSON.parse(JSON.stringify(this.cities));
      return cities.sort(function (first, second) {
        if (first.name.toLowerCase() < second.name.toLowerCase()) return -1;
        if (second.name.toLowerCase() < first.name.toLowerCase()) return 1;
        return 0;
      });
    }
  },
  methods: {
    getTime: function getTime(UTC) {
      var time = new Date(UTC * 1000);
      return time.getHours() + ':' + (String(time.getMinutes()).length > 1 ? time.getMinutes() : '0' + time.getMinutes());
    },
    getPage: function getPage(index) {
      if (parseInt(index) && index > 0 && index <= this.totalPages && index !== this.currentPage) {
        document.body.scrollTop = 0;
        return this.$set(this, 'currentPage', index);
      }
    },
    removeCity: function removeCity(index) {
      return this.cities.splice(index, 1);
    },
    toggleSort: function toggleSort() {
      return this.sorted = !this.sorted;
    },
    removeDuplicates: function removeDuplicates(givenCity) {
      var self = this;
      this.cities.forEach(function (city, index) {
        var exists = false;
        if (city.name === givenCity.name) {
          if ('sys' in city && 'country' in city.sys && 'sys' in givenCity && 'country' in givenCity.sys) {
            if (city.sys.country === givenCity.sys.country) {
              exists = true;
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
    addCity: function addCity() {
      var _this = this;

      var self = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.progress = true;
          self.$http.post('/add-city', { city: _this.cityName }).then(function (response) {
            self.progress = false;
            if ('data' in response && response.data && 'name' in response.data) {
              self.removeDuplicates(response.data);
              self.cities.unshift(response.data);
            }
          }, function (error) {
            self.progress = false;
            if ('data' in error && Array.isArray(error.data)) {
              error.data.forEach(function (err) {
                self.errors.add(err.field, err.msg);
              });
            } else {
              self.errors.add('search', 'Unknown error');
              console.log(error);
            }
          });
        }
      }).catch(function (error) {
        // console.log(error);
      });
    }
  }
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })

/******/ });