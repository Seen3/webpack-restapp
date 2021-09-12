/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footMaker\": () => (/* binding */ footMaker)\n/* harmony export */ });\nconst footMaker=()=>{\r\n    let foot=document.createElement('footer')\r\n    let footText=document.createElement('p');\r\n    footText.innerText=\"Copyright Seen3 :)\";\r\n    foot.appendChild(footText);\r\n    foot.style.backgroundColor=\"rgba(0,0,0,0.3)\";\r\n    foot.style.color=\"white\";\r\n    foot.style.textAlign=\"center\";\r\n    foot.style.position=\"absolute\";\r\n    foot.style.width=\"100%\";\r\n    foot.style.bottom='0';\r\n    document.getElementById('body').appendChild(foot);\r\n}\r\n\n\n//# sourceURL=webpack://rest/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeHome\": () => (/* binding */ makeHome)\n/* harmony export */ });\nconst makeHome=()=>{\r\n    let bigdiv=document.createElement(\"div\");\r\n    bigdiv.style.textAlign=\"center\";\r\n    \r\n    bigdiv.style.backgroundColor=\"rgba(0,0,0,0.7)\";\r\n    bigdiv.style.width=\"45%\";\r\n    bigdiv.style.margin=\"3em auto\";\r\n\r\n    bigdiv.style.borderRadius=\"25%\";\r\n    bigdiv.style.border=\"1em groove gold\";\r\n\r\n    let para=document.createElement(\"p\");\r\n    para.innerText=\"Cum Get Sum\";\r\n    para.style.color=\"white\";\r\n\r\n\r\n    let pic=document.createElement(\"img\");\r\n    pic.src=\"https://cdn.quotesgram.com/img/42/36/1326936539-sad_pikachu_by_ishizai-d34wq87.jpg\";\r\n    pic.style.width=\"45%\";\r\n    pic.style.borderRadius=\"40%\";\r\n    let downText=document.createElement('P');\r\n    downText.innerText=\"Sad Pikachu\";\r\n\r\n    downText.style.color=\"white\";\r\n\r\n    bigdiv.appendChild(para);\r\n    bigdiv.appendChild(pic);\r\n    bigdiv.appendChild(downText);\r\n    document.getElementById('body').appendChild(bigdiv);\r\n}\r\n\n\n//# sourceURL=webpack://rest/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\r\n(0,_pageload__WEBPACK_IMPORTED_MODULE_0__.initialize)();\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nconst initialize=()=>{\r\n    const content=document.getElementById(\"content\");\r\n    content.style.backgroundColor=\"rgba(0,0,0,0.5)\";\r\n    content.style.textAlign=\"center\";\r\n    content.style.color=\"white\";\r\n    document.getElementById('body').style.backgroundImage=\"url('https://i.imgur.com/Qbjvh1L.jpeg')\";\r\n    document.getElementById('body').style.backgroundRepeat=\"no-repeat\";\r\n    document.getElementById('body').style.backgroundPosition=\"center\";\r\n    document.getElementById('body').style.backgroundSize=\"cover\";\r\n    let tit=document.createElement('h1');\r\n    tit.innerText=\"Nom-Nom-Noes\";\r\n    let nabar=document.createElement('nav');\r\n    let n1=document.createElement('p');\r\n    n1.innerText=\"Home\";\r\n    n1.style.display=\"inline\";\r\n    let n2=document.createElement('p');\r\n    n2.innerText=\"About\";\r\n    n2.style.display=\"inline\";\r\n    let n3=document.createElement('p');\r\n    n3.innerText=\"Contact\";\r\n    n3.style.display=\"inline\";\r\n    nabar.appendChild(n1);\r\n    nabar.appendChild(n2);\r\n    nabar.appendChild(n3);\r\n    content.appendChild(tit);\r\n    content.appendChild(nabar);\r\n    document.getElementById('body').style.position=\"relative\";\r\n    document.getElementById('body').style.minHeight=\"100vh\";\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.makeHome)();\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_0__.footMaker)();\r\n}\r\n\n\n//# sourceURL=webpack://rest/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;