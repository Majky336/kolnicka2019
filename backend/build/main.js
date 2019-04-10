require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-yoga */ "graphql-yoga");
/* harmony import */ var graphql_yoga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_yoga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers.js");


const server = new graphql_yoga__WEBPACK_IMPORTED_MODULE_0__["GraphQLServer"]({
  typeDefs: './src/typeDefs.graphql',
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_1__["default"]
});
server.start(() => console.log(`Server is running on http://localhost:4000`));

/***/ }),

/***/ "./src/mockData/characterList.js":
/*!***************************************!*\
  !*** ./src/mockData/characterList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const characterList = [{
  id: 1,
  name: "Luke Skywalker",
  height: 172,
  mass: 77,
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY"
}, {
  id: 2,
  name: "C-3PO",
  height: 167,
  mass: 75,
  hair_color: "n/a",
  skin_color: "gold",
  eye_color: "yellow",
  birth_year: "112BBY"
}, {
  id: 3,
  name: "R2-D2",
  height: 96,
  mass: 32,
  hair_color: "n/a",
  skin_color: "white, blue",
  eye_color: "red",
  birth_year: "33BBY"
}, {
  id: 6,
  name: "Owen Lars",
  height: 178,
  mass: 120,
  hair_color: "brown, grey",
  skin_color: "light",
  eye_color: "blue",
  birth_year: "52BBY"
}, {
  id: 7,
  name: "Beru Whitesun lars",
  height: 165,
  mass: 75,
  hair_color: "brown",
  skin_color: "light",
  eye_color: "blue",
  birth_year: "47BBY"
}, {
  id: 10,
  name: "Obi-Wan Kenobi",
  height: 182,
  mass: 77,
  hair_color: "auburn, white",
  skin_color: "fair",
  eye_color: "blue-gray",
  birth_year: "57BBY"
}, {
  id: 11,
  name: "Anakin Skywalker",
  height: 188,
  mass: 84,
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "41.9BBY"
}, {
  id: 16,
  name: "Jabba Desilijic Tiure",
  height: 175,
  mass: 1358,
  hair_color: "n/a",
  skin_color: "green-tan, brown",
  eye_color: "orange",
  birth_year: "600BBY"
}, {
  id: 20,
  name: "Yoda",
  height: 66,
  mass: 17,
  hair_color: "white",
  skin_color: "green",
  eye_color: "brown",
  birth_year: "896BBY",
  gender: "male"
}, {
  id: 21,
  name: "Palpatine",
  height: 170,
  mass: 75,
  hair_color: "grey",
  skin_color: "pale",
  eye_color: "yellow",
  birth_year: "82BBY"
}, {
  id: 32,
  name: "Qui-Gon Jinn",
  height: 193,
  mass: 89,
  hair_color: "brown",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "92BBY"
}, {
  id: 33,
  name: "Nute Gunray",
  height: 191,
  mass: 90,
  hair_color: "none",
  skin_color: "mottled green",
  eye_color: "red",
  birth_year: "unknown"
}, {
  id: 34,
  name: "Finis Valorum",
  height: 170,
  mass: -1,
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "91BBY"
}, {
  id: 36,
  name: "Jar Jar Binks",
  height: 196,
  mass: 66,
  hair_color: "none",
  skin_color: "orange",
  eye_color: "orange",
  birth_year: "52BBY"
}, {
  id: 35,
  name: "Padmé Amidala",
  height: 165,
  mass: 45,
  hair_color: "brown",
  skin_color: "light",
  eye_color: "brown",
  birth_year: "46BBY"
}, {
  id: 37,
  name: "Roos Tarpals",
  height: 224,
  mass: 82,
  hair_color: "none",
  skin_color: "grey",
  eye_color: "orange",
  birth_year: "unknown"
}, {
  id: 38,
  name: "Rugor Nass",
  height: 206,
  mass: -1,
  hair_color: "none",
  skin_color: "green",
  eye_color: "orange",
  birth_year: "unknown"
}, {
  id: 39,
  name: "Ric Olié",
  height: 183,
  mass: -1,
  hair_color: "brown",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "unknown"
}, {
  id: 40,
  name: "Watto",
  height: 137,
  mass: -1,
  hair_color: "black",
  skin_color: "blue, grey",
  eye_color: "yellow",
  birth_year: "unknown"
}, {
  id: 41,
  name: "Sebulba",
  height: 112,
  mass: 40,
  hair_color: "none",
  skin_color: "grey, red",
  eye_color: "orange",
  birth_year: "unknown"
}, {
  id: 42,
  name: "Quarsh Panaka",
  height: 183,
  mass: -1,
  hair_color: "black",
  skin_color: "dark",
  eye_color: "brown",
  birth_year: "62BBY"
}, {
  id: 51,
  name: "Mace Windu",
  height: 188,
  mass: 84,
  hair_color: "none",
  skin_color: "dark",
  eye_color: "brown",
  birth_year: "72BBY"
}, {
  id: 52,
  name: "Ki-Adi-Mundi",
  height: 198,
  mass: 82,
  hair_color: "white",
  skin_color: "pale",
  eye_color: "yellow",
  birth_year: "92BBY"
}, {
  id: 53,
  name: "Kit Fisto",
  height: 196,
  mass: 87,
  hair_color: "none",
  skin_color: "green",
  eye_color: "black",
  birth_year: "unknown"
}, {
  id: 54,
  name: "Eeth Koth",
  height: 171,
  mass: -1,
  hair_color: "black",
  skin_color: "brown",
  eye_color: "brown",
  birth_year: "unknown"
}, {
  id: 55,
  name: "Adi Gallia",
  height: 184,
  mass: 50,
  hair_color: "none",
  skin_color: "dark",
  eye_color: "blue",
  birth_year: "unknown"
}, {
  id: 56,
  name: "Saesee Tiin",
  height: 188,
  mass: -1,
  hair_color: "none",
  skin_color: "pale",
  eye_color: "orange",
  birth_year: "unknown"
}, {
  id: 58,
  name: "Plo Koon",
  height: 188,
  mass: 80,
  hair_color: "none",
  skin_color: "orange",
  eye_color: "black",
  birth_year: "22BBY"
}, {
  id: 63,
  name: "Poggle the Lesser",
  height: 183,
  mass: 80,
  hair_color: "none",
  skin_color: "green",
  eye_color: "yellow",
  birth_year: "unknown"
}, {
  id: 75,
  name: "R4-P17",
  height: 96,
  mass: -1,
  hair_color: "none",
  skin_color: "silver, red",
  eye_color: "red, blue",
  birth_year: "unknown"
}, {
  id: 76,
  name: "Wat Tambor",
  height: 193,
  mass: 48,
  hair_color: "none",
  skin_color: "green, grey",
  eye_color: "unknown",
  birth_year: "unknown"
}, {
  id: 77,
  name: "San Hill",
  height: 191,
  mass: -1,
  hair_color: "none",
  skin_color: "grey",
  eye_color: "gold",
  birth_year: "unknown"
}, {
  id: 78,
  name: "Shaak Ti",
  height: 178,
  mass: 57,
  hair_color: "none",
  skin_color: "red, blue, white",
  eye_color: "black",
  birth_year: "unknown"
}, {
  id: 81,
  name: "Raymus Antilles",
  height: 188,
  mass: 79,
  hair_color: "brown",
  skin_color: "light",
  eye_color: "brown",
  birth_year: "unknown"
}, {
  id: 82,
  name: "Sly Moore",
  height: 178,
  mass: 48,
  hair_color: "none",
  skin_color: "pale",
  eye_color: "white",
  birth_year: "unknown"
}, {
  id: 83,
  name: "Tion Medon",
  height: 206,
  mass: 80,
  hair_color: "none",
  skin_color: "grey",
  eye_color: "black",
  birth_year: "unknown"
}];
/* harmony default export */ __webpack_exports__["default"] = (characterList);

/***/ }),

/***/ "./src/mockData/episodeList.js":
/*!*************************************!*\
  !*** ./src/mockData/episodeList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const episodeList = [{
  title: "The Phantom Menace",
  id: 1,
  opening_crawl: "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.  While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
  director: "George Lucas",
  producer: "Rick McCallum",
  release_date: "1999-05-19",
  characters: [2, 3, 10, 11, 16, 20, 21, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42]
}, {
  title: "Attack of the Clones",
  id: 2,
  opening_crawl: "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.  This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain  peace and order in the galaxy.  Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
  director: "George Lucas",
  producer: "Rick McCallum",
  release_date: "2002-05-16",
  characters: [2, 3, 6, 7, 10, 11, 20, 21, 75, 76, 77, 78, 82]
}, {
  title: "Revenge of the Sith",
  id: 3,
  opening_crawl: "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.  In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.  As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....",
  director: "George Lucas",
  producer: "Rick McCallum",
  release_date: "2005-05-19",
  characters: [1, 2, 3, 51, 52, 53, 54, 55, 56, 58, 63, 81, 82, 83, 35]
}];
/* harmony default export */ __webpack_exports__["default"] = (episodeList);

/***/ }),

/***/ "./src/resolvers.js":
/*!**************************!*\
  !*** ./src/resolvers.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mockData_episodeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mockData/episodeList */ "./src/mockData/episodeList.js");
/* harmony import */ var _mockData_characterList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mockData/characterList */ "./src/mockData/characterList.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const resolvers = {
  Query: {
    helloWorld: () => `Hello from the dark side`,
    getEpisodeList: () => _mockData_episodeList__WEBPACK_IMPORTED_MODULE_0__["default"],
    getCharacterList: () => _mockData_characterList__WEBPACK_IMPORTED_MODULE_1__["default"],
    getEpisode: (obj, {
      episodeIndex
    }) => _mockData_episodeList__WEBPACK_IMPORTED_MODULE_0__["default"][episodeIndex.value],
    getCharacter: (obj, {
      characterIndex
    }) => _mockData_characterList__WEBPACK_IMPORTED_MODULE_1__["default"][characterIndex.value]
  },
  Mutation: {
    createEpisode: (obj, {
      newEpisode
    }) => _objectSpread({
      id: `episode-${Date.now()}`
    }, newEpisode),
    createCharacter: (obj, {
      newCharacter
    }) => _objectSpread({
      id: `character-${Date.now()}`
    }, newCharacter)
  },
  Episode: {
    characters: obj => _mockData_characterList__WEBPACK_IMPORTED_MODULE_1__["default"].filter(item => obj.characters.find(characterId => characterId === item.id))
  }
};
/* harmony default export */ __webpack_exports__["default"] = (resolvers);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sojka/Documents/Projects/kolnicka2019/backend/src/index.js */"./src/index.js");


/***/ }),

/***/ "graphql-yoga":
/*!*******************************!*\
  !*** external "graphql-yoga" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-yoga");

/***/ })

/******/ });
//# sourceMappingURL=main.map