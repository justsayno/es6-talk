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

	"use strict";
	
	/**
	 * Block scoping and the let keyword
	 */
	
	var variable1 = 1;
	for (i = 0; i < 2; i++) {
	    console.log(variable1);
	}
	
	var variable2 = 1;
	for (i = 0; i < 2; i++) {
	    variable2 = 2;
	    console.log(variable);
	}
	
	for (i = 0; i < 2; i++) {
	    console.log(variable3);
	}
	var variable3 = 1;
	
	/**
	 * Constants
	 */
	
	var CONSTANT1 = 1;
	
	// the following is not allowed!
	// CONSTANT1 = 2
	// CONSTANT;

/***/ }
/******/ ]);
//# sourceMappingURL=new-variable-declarations.js.map