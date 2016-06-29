/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	//spread
	var oldArray = [10, 11, 12];
	
	var newArray = [].concat(_toConsumableArray(oldArray.slice(0, 1)), _toConsumableArray(oldArray.slice(2)));
	
	console.log(oldArray); // [10,11,12]
	console.log(newArray); //[10, 12]
	
	//rest
	function someFunction(productId) {
	    for (var _len = arguments.length, catagories = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        catagories[_key - 1] = arguments[_key];
	    }
	
	    console.log(catagories);
	}
	
	console.log(someFunction(1, 'cars'));
	console.log(someFunction(1, 'sports', 'rugby'));
	console.log(someFunction(1, 'politics', 'news', 'current events'));

/***/ }
/******/ ]);
//# sourceMappingURL=spread-and-rest-operators.js.map