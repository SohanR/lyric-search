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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//jshint esversion:6\nconst form = document.getElementById(\"form\");\nconst search = document.getElementById(\"search\");\nconst result = document.getElementById(\"result\");\nconst more = document.getElementById(\"more\");\n\nconst apiUrl = \"https://api.lyrics.ovh\";\n\nsearch.focus();\n\n//fetch song from api(search song)\nfunction searchSong(term) {\n  fetch(`${apiUrl}/suggest/${term}`)\n    .then((res) => res.json())\n    .then((data) => {\n      showData(data);\n    });\n}\n\n//showing data in DOM\nfunction showData(data) {\n  console.log(data);\n\n  result.innerHTML = `\n        <ul class=\"songs\">\n            ${data.data\n              .map(\n                (song) => `\n                    <li>\n                        <span><strong>${song.artist.name}</strong> - ${song.title}</span>\n                        <button class=\"btn btn-primary\" data-artist=\"${song.artist.name}\" data-songtitle=\"${song.title}\">Get Lyrics</button>\n                    </li>\n                `\n              )\n              .join(\"\")}\n        </ul>\n    `;\n\n  if (data.prev || data.next) {\n    more.innerHTML = `\n            ${\n              data.prev\n                ? `\n            <button class=\"btn btn-primary\" onclick=\"getMoreSongs('${data.prev}')\">Prev</button>\n            `\n                : \"\"\n            }\n\n            ${\n              data.next\n                ? `\n            <button class=\"btn btn-primary\" onclick=\"getMoreSongs('${data.next}')\">Next</button>\n            `\n                : \"\"\n            }\n        `;\n  } else {\n    more.innerHTML = \"\";\n  }\n}\n\n//pagiantion\nfunction getMoreSongs(url) {\n  fetch(url)\n    .then((res) => res.json())\n    .then((data) => {\n      showData(data);\n    });\n}\n\n//event listeners\n\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n\n  const searchTerm = search.value.trim();\n\n  if (!searchTerm) {\n    alert(\"your search term is empty!\");\n  } else {\n    searchSong(searchTerm);\n  }\n\n  search.value = \"\";\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2pzaGludCBlc3ZlcnNpb246NlxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XG5jb25zdCBtb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3JlXCIpO1xuXG5jb25zdCBhcGlVcmwgPSBcImh0dHBzOi8vYXBpLmx5cmljcy5vdmhcIjtcblxuc2VhcmNoLmZvY3VzKCk7XG5cbi8vZmV0Y2ggc29uZyBmcm9tIGFwaShzZWFyY2ggc29uZylcbmZ1bmN0aW9uIHNlYXJjaFNvbmcodGVybSkge1xuICBmZXRjaChgJHthcGlVcmx9L3N1Z2dlc3QvJHt0ZXJtfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2hvd0RhdGEoZGF0YSk7XG4gICAgfSk7XG59XG5cbi8vc2hvd2luZyBkYXRhIGluIERPTVxuZnVuY3Rpb24gc2hvd0RhdGEoZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXN1bHQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8dWwgY2xhc3M9XCJzb25nc1wiPlxuICAgICAgICAgICAgJHtkYXRhLmRhdGFcbiAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAoc29uZykgPT4gYFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPiR7c29uZy5hcnRpc3QubmFtZX08L3N0cm9uZz4gLSAke3NvbmcudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGRhdGEtYXJ0aXN0PVwiJHtzb25nLmFydGlzdC5uYW1lfVwiIGRhdGEtc29uZ3RpdGxlPVwiJHtzb25nLnRpdGxlfVwiPkdldCBMeXJpY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICAgIDwvdWw+XG4gICAgYDtcblxuICBpZiAoZGF0YS5wcmV2IHx8IGRhdGEubmV4dCkge1xuICAgIG1vcmUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZGF0YS5wcmV2XG4gICAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25jbGljaz1cImdldE1vcmVTb25ncygnJHtkYXRhLnByZXZ9JylcIj5QcmV2PC9idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRhdGEubmV4dFxuICAgICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIG9uY2xpY2s9XCJnZXRNb3JlU29uZ3MoJyR7ZGF0YS5uZXh0fScpXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuICB9IGVsc2Uge1xuICAgIG1vcmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxufVxuXG4vL3BhZ2lhbnRpb25cbmZ1bmN0aW9uIGdldE1vcmVTb25ncyh1cmwpIHtcbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNob3dEYXRhKGRhdGEpO1xuICAgIH0pO1xufVxuXG4vL2V2ZW50IGxpc3RlbmVyc1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2gudmFsdWUudHJpbSgpO1xuXG4gIGlmICghc2VhcmNoVGVybSkge1xuICAgIGFsZXJ0KFwieW91ciBzZWFyY2ggdGVybSBpcyBlbXB0eSFcIik7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoU29uZyhzZWFyY2hUZXJtKTtcbiAgfVxuXG4gIHNlYXJjaC52YWx1ZSA9IFwiXCI7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });