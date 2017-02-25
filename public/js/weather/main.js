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
    cities: [{
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairns",
      cod: 200
    }, {
      coord: {
        lon: -0.13,
        lat: 51.51
      },
      weather: [{
        id: 300,
        main: "Drizzle",
        description: "light intensity drizzle",
        icon: "09d"
      }],
      base: "stations",
      main: {
        temp: 8.91,
        pressure: 1014,
        humidity: 76,
        temp_min: 8,
        temp_max: 10
      },
      visibility: 10000,
      wind: {
        speed: 7.2,
        deg: 230
      },
      clouds: {
        all: 90
      },
      dt: 1488019800,
      sys: {
        type: 1,
        id: 5091,
        message: 0.003,
        country: "GB",
        sunrise: 1488005576,
        sunset: 1488044089
      },
      id: 2643743,
      name: "London",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Decal",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Unlocal",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnsr32",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Local234",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnsus",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswesd",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }, {
      coord: {
        lon: 145.77,
        lat: -16.92
      },
      weather: [{
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: "04n"
      }],
      base: 'cmc stations',
      main: {
        temp: 293.25,
        pressure: 1019,
        humidity: 83,
        temp_min: 289.82,
        temp_max: 295.37
      },
      wind: {
        speed: 5.1,
        deg: 150
      },
      clouds: {
        all: 75
      },
      rain: {
        "3h": 3
      },
      dt: 1435658272,
      sys: {
        type: 1,
        id: 8166,
        message: 0.0166,
        country: "AU",
        sunrise: 1435610796,
        sunset: 1435650870
      },
      id: 2172797,
      name: "Cairnswe",
      cod: 200
    }],
    cityName: '',
    currentPage: 1,
    citiesOnPage: 5
  },
  computed: {
    totalPages: function totalPages() {
      return this.cities.length ? Math.ceil(this.cities.length / this.citiesOnPage) : 1;
    },
    visibleCities: function visibleCities() {
      if (this.cities.length <= this.citiesOnPage) {
        return this.cities;
      }
      return this.cities.slice(this.citiesOnPage * (this.currentPage - 1), this.citiesOnPage * this.currentPage);
    }
  },
  methods: {
    getTime: function getTime(UTC) {
      var time = new Date(UTC * 1000);
      return time.getHours() + ':' + time.getMinutes();
    },
    getPage: function getPage(index) {
      if (parseInt(index) && index > 0 && index <= this.totalPages && index !== this.currentPage) {
        document.body.scrollTop = 0;
        return this.$set(this, 'currentPage', index);
      }
    }
  }
});

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ })

/******/ });