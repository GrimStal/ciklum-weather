@extends('layouts.app')

@section('htmlheader_title')
    Weather Forecast
@endsection

@section('contentheader_title')
    {{ $contentheader_title }}
@endsection

@section('page_scripts')
    @foreach($scripts as $script)
        <script type="text/javascript" src="{{ $script }}"></script>
    @endforeach
@stop

@section('initial_javascript')
    <script type="text/javascript">

    </script>
@stop


@section('main-content')
    <div class="section" id="weather-section">
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 col-xs-offset-3 col-md-offset-3 col-lg-offset-3">
                    <form class="form-inline city-form" v-cloak>
                        <div class="form-group col-md-12">
                            <div class="col-xs-5 col-sm-4 col-md-3 col-lg-2">
                                <button class="btn btn-success">Search</button>
                            </div>
                            <div class="input-group col-xs-7 col-sm-7 col-md-8 col-lg-8">
                                <div class="input-group-addon">&#9925;</div>
                                <input type="text" name="search"
                                       :class="{'form-control' : true, 'invalid': errors.has('search')}"
                                       id="search-field"
                                       v-model="cityName"
                                       placeholder="Enter city name"
                                       v-validate.search="'required|min:2|max:32'"
                                       maxlength="32"
                                       data-vv-delay="800"
                                >
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row" v-cloak>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-xs-offset-2 col-md-offset-2 col-lg-offset-2">
                    <div class="cities-container">
                        <template v-for="city in visibleCities">
                            <div class="city-container">
                                <div class="city-row">
                                    <div class="city-info">
                                        <span class="city-name">@{{ city.name }}, </span>
                                        <span class="country-name">@{{ city.sys.country }}</span>
                                    </div>

                                    <div class="current-weather">
                                        <div class="weather-type">@{{ city.weather[0].main }}</div>
                                        <div class="weather-description">@{{ city.weather[0].description }}</div>
                                    </div>

                                    <div class="icon-holder">
                                        <img :src="'http://openweathermap.org/img/w/' + city.weather[0].icon + '.png'">
                                    </div>
                                </div>
                                <div class="city-row">
                                    <div class="weather-info">
                                        <div class="weather-temperature">
                                            <span class="title">Temperature: </span>
                                            <span class="values current-temp">@{{ city.main.temp }} C<sup>o</sup>,
                                                (@{{ city.main.temp_min + ' to ' +  city.main.temp_max}} C<sup>o</sup>)</span>
                                        </div>
                                        <div class="weather-pressure">
                                            <span class="title">Pressure: </span>
                                            <span class="values pressure">@{{ city.main.pressure }}hPa</span>
                                            <span class="title">Humidity: </span>
                                            <span class="values humidity">@{{ city.main.humidity }}%</span>
                                        </div>
                                        <div class="weather-wind">
                                            <span class="title">Wind: </span>
                                            <span class="values wind">@{{ city.wind.speed }} m/sec, @{{ city.wind.deg }}
                                                <sup>o</sup></span>
                                        </div>
                                        <div class="weather-clouds">
                                            <span class="title">Cloudiness: </span>
                                            <span class="values clouds">@{{ city.clouds.all }}%</span>
                                        </div>
                                        <div class="weather-sun">
                                            <span class="title">Sunrise: </span>
                                            <span class="values sunrise">@{{ getTime(city.sys.sunrise) }}</span>
                                            <span class="title">Sunset: </span>
                                            <span class="values sunset">@{{ getTime(city.sys.sunset) }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="row" v-cloak>
                        <ul class="pagination" v-if="totalPages > 1">
                            <template v-for="page in totalPages">
                                <li v-if="~[1, 2, currentPage, currentPage + 1, currentPage - 1, totalPages, totalPages - 1].indexOf(page)"
                                    :class="{'active' : page == currentPage}">
                                    <a v-on:click="getPage(page)">@{{ page }}</a>
                                </li>
                                <template v-else>
                                    <li v-if="(~[currentPage -2, currentPage + 2].indexOf(page)) && (!~[1,2,totalPages, totalPages - 1].indexOf(page))" class="disabled"><a>...</a></li>
                                </template>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop