/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Integration"] = factory();
	else
		root["Integration"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Integration.js":
/*!*******************************!*\
  !*** ./src/js/Integration.js ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval(" // import $ from \"jquery\"\n// import 'jquery-pjax'\n\nvar General = Integration_LocalConst.INIT.General;\nvar handsome = Integration_LocalConst.INIT.handsome; //随机颜色\n\nwindow.randomColor = function () {\n  return \"hsl(\".concat(Math.floor(Math.random() * 360), \",100%,50%,0.6)\");\n}; //判断上午或者下午\n\n\nwindow.getTimeState = function () {\n  var text = \"\";\n  var hours = new Date().getHours();\n\n  if (hours >= 0 && hours <= 10) {\n    text = \"早上好，永远年轻，永远热泪盈眶！\";\n  } else if (hours > 10 && hours <= 14) {\n    text = \"中午好，睡会儿午觉吧！\";\n  } else if (hours > 14 && hours <= 18) {\n    text = \"下午好，是时候打个盹了！\";\n  } else if (hours > 18 && hours <= 24) {\n    text = \"晚上好，注意早点休息！\";\n  }\n\n  return text;\n};\n\n$(function () {\n  new Function(General)();\n  ReturnTop();\n  ActivatePowerModes();\n  HoerMouse();\n\n  if (Integration_LocalConst.GET_THEME) {\n    setCopyright(Integration_LocalConst.COPYRIGHT_TYPE);\n    new Function(handsome)();\n  }\n}); // 你能留下我的信息, 我会很高兴的 ^_^\n\nconsole.log(\"\\n %c Integration v\".concat(\"2.0.0\", \" \").concat(\"9e3951d\", \" %c by Stars_Kim | blog.starskim.cn \\n\"), \"color: #fadfa3; background: #030307; padding:5px 0;\", \"background: #fadfa3; padding:5px 0;\");\nconsole.log(\"\\n %c \\u70AB\\u5F69\\u9F20\\u6807\\u63D2\\u4EF6 https://gitee.com/HoeXhe/HoerMouse %c www.hoehub.com \\uD83D\\uDE0A HoerMouse By Hoe\\n\", \"font-family:'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;color:white;background:#ffa099;padding:5px 0;\", \"font-family:'Microsoft YaHei','SF Pro Display',Roboto,Noto,Arial,'PingFang SC',sans-serif;color:#ffa099;background:#404040;padding:5px 0;\");\n\n//# sourceURL=webpack://%5Bname%5D/./src/js/Integration.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/js/Integration.js");
/******/ })()
;
});