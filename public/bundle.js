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

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Card = void 0;\nclass Card {\n    constructor(name) {\n        this.name = name;\n    }\n}\nexports.Card = Card;\n\n\n//# sourceURL=webpack://unstableunicorns/./src/Card.ts?");

/***/ }),

/***/ "./src/Deck.ts":
/*!*********************!*\
  !*** ./src/Deck.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Deck = void 0;\nconst array_shuffle_1 = __importDefault(__webpack_require__(/*! array-shuffle */ \"./node_modules/array-shuffle/index.js\"));\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\nclass Deck {\n    constructor() {\n        this.cards = [];\n    }\n    shuffle() {\n        this.cards = (0, array_shuffle_1.default)(this.cards);\n    }\n    addCard(card) {\n        this.cards.push(card);\n    }\n    initializeDeck() {\n        for (let i = 1; i <= 100; i++) {\n            const card = new Card_1.Card('C' + i);\n            this.addCard(card);\n        }\n        this.shuffle();\n    }\n    draw() {\n        return this.cards.pop();\n    }\n}\nexports.Deck = Deck;\n\n\n//# sourceURL=webpack://unstableunicorns/./src/Deck.ts?");

/***/ }),

/***/ "./src/Hand.ts":
/*!*********************!*\
  !*** ./src/Hand.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Hand = void 0;\nclass Hand {\n    constructor() {\n        this.cards = [];\n    }\n    addCard(card) {\n        this.cards.push(card);\n    }\n}\nexports.Hand = Hand;\n\n\n//# sourceURL=webpack://unstableunicorns/./src/Hand.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Player = void 0;\nconst Hand_1 = __webpack_require__(/*! ./Hand */ \"./src/Hand.ts\");\nconst Stable_1 = __webpack_require__(/*! ./Stable */ \"./src/Stable.ts\");\nclass Player {\n    constructor(name) {\n        this.hand = new Hand_1.Hand();\n        this.stable = new Stable_1.Stable();\n        this.name = name;\n    }\n    giveCard(card) {\n        this.hand.addCard(card);\n    }\n}\nexports.Player = Player;\n\n\n//# sourceURL=webpack://unstableunicorns/./src/Player.ts?");

/***/ }),

/***/ "./src/Stable.ts":
/*!***********************!*\
  !*** ./src/Stable.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Stable = void 0;\nclass Stable {\n    constructor() {\n        this.cards = [];\n    }\n}\nexports.Stable = Stable;\n\n\n//# sourceURL=webpack://unstableunicorns/./src/Stable.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Deck_1 = __webpack_require__(/*! ./Deck */ \"./src/Deck.ts\");\nconst Player_1 = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\nconst player1 = new Player_1.Player(\"Player 1\");\nconst player2 = new Player_1.Player(\"Player 2\");\nconst player3 = new Player_1.Player(\"Player 3\");\nconst player4 = new Player_1.Player(\"Player 4\");\nconst players = [player1, player2, player3, player4];\nconst gameDeck = new Deck_1.Deck();\ngameDeck.initializeDeck();\nfor (let i = 0; i < 7; i++) {\n    for (var player of players) {\n        player.giveCard(gameDeck.draw());\n    }\n}\nconsole.log(players);\n\n\n//# sourceURL=webpack://unstableunicorns/./src/index.ts?");

/***/ }),

/***/ "./node_modules/array-shuffle/index.js":
/*!*********************************************!*\
  !*** ./node_modules/array-shuffle/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ arrayShuffle)\n/* harmony export */ });\nfunction arrayShuffle(array) {\n\tif (!Array.isArray(array)) {\n\t\tthrow new TypeError(`Expected an array, got ${typeof array}`);\n\t}\n\n\tarray = [...array];\n\n\tfor (let index = array.length - 1; index > 0; index--) {\n\t\tconst newIndex = Math.floor(Math.random() * (index + 1));\n\t\t[array[index], array[newIndex]] = [array[newIndex], array[index]];\n\t}\n\n\treturn array;\n}\n\n\n//# sourceURL=webpack://unstableunicorns/./node_modules/array-shuffle/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;