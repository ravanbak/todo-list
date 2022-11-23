/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./src/style.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./src/style.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hero.png */ "./src/assets/hero.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-content-background: hsl(60, 100%, 96%);\n    --color-todo-card-background: hsl(60, 100%, 92%);\n    --color-todo-card-hover-background: hsl(46, 100%, 82%);\n    --color-todo-card-details-background: hsl(60, 100%, 95%);\n    --color-todo-card-border: hsl(49, 18%, 77%);\n    --color-todo-card-done: hsl(100%, 30%, 30%);\n    --color-todo-card-done-background: hsl(0, 0%, 86%);\n    --color-todo-card-checkbox-background: #009900;\n    --color-input-focussed-background: rgb(255, 250, 184);\n    --color-active-project: #ffbf7b;\n    --color-priority-high: red;\n    --color-priority-normal: #55EE44;\n    --color-priority-low: #eedd00;\n    --box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n    --size-icon: 2.5ch;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: hsl(184, 9%, 75%);\n    box-sizing: border-box;\n}\n\n.site__content * {\n    box-sizing: border-box;\n}\n\n.hide {\n    display: none;\n}\n\n.site__header {\n    display: flex;    \n    justify-content: center;\n    font-size: 2em;\n    color:whitesmoke;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center -40px;\n    background-size: 1200px;\n    background-attachment: fixed;\n    height: 160px;\n}\n\n.site__content {\n    display: flex;\n    margin: auto;\n    background: var(--color-content-background);\n    min-height: 300px;\n    max-width: 1200px;\n}\n\n.site__sidebar {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 20px 5px;\n    border-right: solid 1px var(--color-todo-card-border);\n    font-weight: bold;\n    text-align: center;\n    width: max(100px, 20vw);\n}\n\n.site__sidebar .projects-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.65rem;\n    padding: 25px 5px 30px 5px;\n    margin: 20px 0;\n    background-color: var(--color-todo-card-background);\n    border: solid 1px var(--color-todo-card-border);\n    border-radius: 6px;\n    align-items: flex-end;\n}\n\n.site__sidebar .edit-project {\n    margin-right: auto;\n}\n\n.site__sidebar .delete-project {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.site__sidebar .project-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 10px 5px;\n    border-radius: 6px;\n    text-align: right;\n    justify-content: right;\n}\n\n.site__sidebar div.project-name {\n    overflow-wrap: break-word;\n    max-width: 100%;\n}\n\n.site__sidebar .project-container.active {\n    background-color: var(--color-active-project);\n}\n\n.projects-container input[type=text] {\n    size: 30;\n    text-align: right;\n    background-color: var(--color-input-focussed-background);\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n\n.site__page {\n    margin: 0;\n    padding: 20px 0;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 100%;\n    font-size: 1rem;\n    height: calc(100vh - 160px - 40px - 36px);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-list .controls {\n    display: flex;\n    margin-bottom: 10px;\n    position: sticky;\n}\n\ndiv.controls {\n    padding: 15px 0;\n    border-radius: 6px;\n}\n\n.todo-list .add-item {\n    color: rgb(42, 64, 64);\n    margin: 10px;\n}\n\n.todo-list .expand-all {\n    color: rgb(42, 64, 64);\n    margin: 10px;    \n}\n\n.todo-list .collapse-all {\n    color: rgb(42, 64, 64);\n    margin: 10px 10px 10px auto;\n}\n\n.todo-card input[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 2rem;\n    border-radius: 1rem;\n    /* font-size: 5.1rem; */\n    height: 0.25rem;\n}\n\n.todo-card input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #4bb1ff;\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n}\n\n.todo-card input.priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card input.priority-normal {\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card input.priority-low {\n    background-color: var(--color-priority-low);\n}\n\n/* .todo-card input[type=text] { */\n.todo-card textarea {\n    background-color: inherit;\n    border-radius: 3px;\n    border: none;\n    transition: 0.2s;\n    size: 10;\n    width: 100%;\n    overflow-wrap: break-word;\n}\n\n.todo-card textarea:focus {\n    background-color: var(--color-input-focussed-background);\n    outline: none;\n    size: 5;\n}\n\n.todo-card textarea:focus::placeholder {\n    color: gray;\n}\n\n.todo-card input[type=date] {\n    background-color: inherit;\n    border: none;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-todo-card-background);\n    border-radius: 6px;\n    /* border: 1px solid var(--color-todo-card-border); */\n    margin: 6px;\n    box-shadow: 0px 0px 4px #00000033;\n}\n\n.show-on-hover\n{\n    display: block;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.todo-card:hover .show-on-hover,\n.project-container:hover .show-on-hover {\n    opacity: 0.333;\n}\n\n.project-container .show-on-hover:hover,\n.todo-card .show-on-hover:hover {\n    opacity: 1;\n}\n\n.todo-card * {\n    font-size: 0.65rem;\n}\n\n.todo-card__basic {\n    display: flex;\n    /* flex-wrap: wrap; */\n    padding: 5px;\n    align-items: center;\n}\n\n/* .todo-card__basic input[type=text] { */\n.todo-card__basic textarea {\n    padding-left: 10px;\n    flex-grow: 1;\n    /* width: 60%; */\n    /* font-size: inherit; */\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.todo-card__expanded {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    margin: 10px 3px 5px 3px;\n    padding: 5px 0;\n    border-radius: 6px;\n}\n\n.todo-card__expanded {\n    background-color: var(--color-todo-card-details-background);\n}\n\n.todo-card:hover {\n    background-color: var(--color-todo-card-hover-background);\n}\n\n.todo-card.todo-done,\n.todo-card__expanded.todo-done {\n    background-color: var(--color-todo-card-done-background);\n}\n\ndiv.detail-container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 10px 0 0 0;\n}\n\ndiv.detail-container:first-child {\n    margin-top: 0;\n}\n\ndiv.detail-container > .fa-solid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    min-width: 4ch;\n    max-width: 4ch;\n    color: rgb(42, 64, 64);\n}\n\n.checkbox input {\n    width: 2ch;\n    height: 2ch;\n    accent-color: var(--color-todo-card-checkbox-background);\n    outline: none;\n}\n\n.todo-card .checkbox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 2ch;\n    min-height: 2ch;\n    border-radius: 3px;\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card .priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card .priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card .delete-item,\n.delete-project {\n    padding: 0 6px 0 6px;\n    color: red;\n}\n\n.todo-card .expander {\n    padding: 0 0 0 6px;\n}\n\n.todo-done .title {\n    text-decoration: line-through;\n}\n\n.site__footer {\n    display: flex;    \n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    background: hsl(184, 9%, 75%);\n    max-width: 1200px;\n}\n\n.footer__inner {\n    display: flex;\n    padding: 2px;\n    align-items: center;\n    justify-content: center;\n}\n\n.site__footer a {\n    text-decoration: none;\n}\n\n.site__footer i {\n    color: rgb(42, 64, 64);\n    margin-left: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-content-background: hsl(60, 100%, 96%);\n    --color-todo-card-background: hsl(60, 100%, 92%);\n    --color-todo-card-hover-background: hsl(46, 100%, 82%);\n    --color-todo-card-details-background: hsl(60, 100%, 95%);\n    --color-todo-card-border: hsl(49, 18%, 77%);\n    --color-todo-card-done: hsl(100%, 30%, 30%);\n    --color-todo-card-done-background: hsl(0, 0%, 86%);\n    --color-todo-card-checkbox-background: #009900;\n    --color-input-focussed-background: rgb(255, 250, 184);\n    --color-active-project: #ffbf7b;\n    --color-priority-high: red;\n    --color-priority-normal: #55EE44;\n    --color-priority-low: #eedd00;\n    --box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n    --size-icon: 2.5ch;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: hsl(184, 9%, 75%);\n    box-sizing: border-box;\n}\n\n.site__content * {\n    box-sizing: border-box;\n}\n\n.hide {\n    display: none;\n}\n\n.site__header {\n    display: flex;    \n    justify-content: center;\n    font-size: 2em;\n    color:whitesmoke;\n    background-image: url('./assets/hero.png');\n    background-repeat: no-repeat;\n    background-position: center -40px;\n    background-size: 1200px;\n    background-attachment: fixed;\n    height: 160px;\n}\n\n.site__content {\n    display: flex;\n    margin: auto;\n    background: var(--color-content-background);\n    min-height: 300px;\n    max-width: 1200px;\n}\n\n.site__sidebar {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 20px 5px;\n    border-right: solid 1px var(--color-todo-card-border);\n    font-weight: bold;\n    text-align: center;\n    width: max(100px, 20vw);\n}\n\n.site__sidebar .projects-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.65rem;\n    padding: 25px 5px 30px 5px;\n    margin: 20px 0;\n    background-color: var(--color-todo-card-background);\n    border: solid 1px var(--color-todo-card-border);\n    border-radius: 6px;\n    align-items: flex-end;\n}\n\n.site__sidebar .edit-project {\n    margin-right: auto;\n}\n\n.site__sidebar .delete-project {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.site__sidebar .project-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 10px 5px;\n    border-radius: 6px;\n    text-align: right;\n    justify-content: right;\n}\n\n.site__sidebar div.project-name {\n    overflow-wrap: break-word;\n    max-width: 100%;\n}\n\n.site__sidebar .project-container.active {\n    background-color: var(--color-active-project);\n}\n\n.projects-container input[type=text] {\n    size: 30;\n    text-align: right;\n    background-color: var(--color-input-focussed-background);\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n\n.site__page {\n    margin: 0;\n    padding: 20px 0;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 100%;\n    font-size: 1rem;\n    height: calc(100vh - 160px - 40px - 36px);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-list .controls {\n    display: flex;\n    margin-bottom: 10px;\n    position: sticky;\n}\n\ndiv.controls {\n    padding: 15px 0;\n    border-radius: 6px;\n}\n\n.todo-list .add-item {\n    color: rgb(42, 64, 64);\n    margin: 10px;\n}\n\n.todo-list .expand-all {\n    color: rgb(42, 64, 64);\n    margin: 10px;    \n}\n\n.todo-list .collapse-all {\n    color: rgb(42, 64, 64);\n    margin: 10px 10px 10px auto;\n}\n\n.todo-card input[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 2rem;\n    border-radius: 1rem;\n    /* font-size: 5.1rem; */\n    height: 0.25rem;\n}\n\n.todo-card input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #4bb1ff;\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n}\n\n.todo-card input.priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card input.priority-normal {\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card input.priority-low {\n    background-color: var(--color-priority-low);\n}\n\n/* .todo-card input[type=text] { */\n.todo-card textarea {\n    background-color: inherit;\n    border-radius: 3px;\n    border: none;\n    transition: 0.2s;\n    size: 10;\n    width: 100%;\n    overflow-wrap: break-word;\n}\n\n.todo-card textarea:focus {\n    background-color: var(--color-input-focussed-background);\n    outline: none;\n    size: 5;\n}\n\n.todo-card textarea:focus::placeholder {\n    color: gray;\n}\n\n.todo-card input[type=date] {\n    background-color: inherit;\n    border: none;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-todo-card-background);\n    border-radius: 6px;\n    /* border: 1px solid var(--color-todo-card-border); */\n    margin: 6px;\n    box-shadow: 0px 0px 4px #00000033;\n}\n\n.show-on-hover\n{\n    display: block;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.todo-card:hover .show-on-hover,\n.project-container:hover .show-on-hover {\n    opacity: 0.333;\n}\n\n.project-container .show-on-hover:hover,\n.todo-card .show-on-hover:hover {\n    opacity: 1;\n}\n\n.todo-card * {\n    font-size: 0.65rem;\n}\n\n.todo-card__basic {\n    display: flex;\n    /* flex-wrap: wrap; */\n    padding: 5px;\n    align-items: center;\n}\n\n/* .todo-card__basic input[type=text] { */\n.todo-card__basic textarea {\n    padding-left: 10px;\n    flex-grow: 1;\n    /* width: 60%; */\n    /* font-size: inherit; */\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.todo-card__expanded {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    margin: 10px 3px 5px 3px;\n    padding: 5px 0;\n    border-radius: 6px;\n}\n\n.todo-card__expanded {\n    background-color: var(--color-todo-card-details-background);\n}\n\n.todo-card:hover {\n    background-color: var(--color-todo-card-hover-background);\n}\n\n.todo-card.todo-done,\n.todo-card__expanded.todo-done {\n    background-color: var(--color-todo-card-done-background);\n}\n\ndiv.detail-container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 10px 0 0 0;\n}\n\ndiv.detail-container:first-child {\n    margin-top: 0;\n}\n\ndiv.detail-container > .fa-solid {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    min-width: 4ch;\n    max-width: 4ch;\n    color: rgb(42, 64, 64);\n}\n\n.checkbox input {\n    width: 2ch;\n    height: 2ch;\n    accent-color: var(--color-todo-card-checkbox-background);\n    outline: none;\n}\n\n.todo-card .checkbox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 2ch;\n    min-height: 2ch;\n    border-radius: 3px;\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card .priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card .priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card .delete-item,\n.delete-project {\n    padding: 0 6px 0 6px;\n    color: red;\n}\n\n.todo-card .expander {\n    padding: 0 0 0 6px;\n}\n\n.todo-done .title {\n    text-decoration: line-through;\n}\n\n.site__footer {\n    display: flex;    \n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    background: hsl(184, 9%, 75%);\n    max-width: 1200px;\n}\n\n.footer__inner {\n    display: flex;\n    padding: 2px;\n    align-items: center;\n    justify-content: center;\n}\n\n.site__footer a {\n    text-decoration: none;\n}\n\n.site__footer i {\n    color: rgb(42, 64, 64);\n    margin-left: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1]!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _dom_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-util */ "./src/dom-util.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");






/*
Site layout:
 Header
 ===========
 Content (Projects, Items)
 ===========
 Footer
*/

const headerDisplayModule = (function() {
    function generateHeader() {
        const header = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'div' });
        header.classList.add('site__header');

        const divTitle = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({ 
            tag: 'div', 
            parent: header, 
            classList: [ 'hero-text' ],
        });

        (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tag: 'h1',
            parent: divTitle,
            textContent:  'Todoodli',
        });
    
        return header;
    }

    return {
        generateHeader,
    };
})();

const contentDisplayModule = (function() {
    let _activeProject;

    function generateContent(projects, activeProject) {
        // Generate the sidebar and the active project's todo list content 
        // and return a div containing both.

        if (projects.length === 0) {
            _activeProject = null;
        }
        else {
            _activeProject = activeProject ? activeProject : projects[0];
        }

        const siteContent = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList: ['container', 'site__content']});
        
        // Add projects
        siteContent.appendChild(projectsDisplayModule.generateContent(projects, _activeProject));

        // Add items
        siteContent.appendChild(itemsDisplayModule.generateContent(_activeProject));

        return siteContent;
    }

    const projectsDisplayModule = (function() {
        function generateContent(projects) {
            const sidebarContainer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({ tag: 'div', classList: ['site__sidebar'] });
    
            const sidebar = _addSidebarElement();
            sidebar.appendChild(_addProjectList());
            sidebar.appendChild(_addAddProjectButton());
            
            sidebarContainer.appendChild(sidebar);

            return sidebarContainer;

            function _addSidebarElement() {
                return (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['container'],
                    textContent: 'Projects',
                });
            }

            function _addProjectList() {
                const projectsContainer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList: ['projects-container']});
                
                for (let i = 0; i < projects.length; i++) {
                    projectsContainer.appendChild(generateProjectItem(projects[i]));
                }

                return projectsContainer;
            }

            function _addAddProjectButton() {
                const addProjectButton = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList: ['add-project']});
                addProjectButton.appendChild((0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList: ['fa-solid', 'fa-xl', 'fa-plus-circle']}));
                addProjectButton.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('addProject', {projectName: 'New Project'}));
                
                return addProjectButton;
            }            
        }
            
        function generateProjectItem(project) {
            // Create an element displaying the project name and 
            // buttons for manipulating the project.

            const projectContainer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                tag: 'div', 
                classList: ['project-container'],
                id: project.id,
            });

            projectContainer.appendChild(_createDeleteButton());
            projectContainer.appendChild(_createEditButton());

            const { divProjName, inputProjName } = _createProjectNameElements();
            
            // hilight the active project
            if (project.id === _activeProject?.id) {
                projectContainer.classList.add('active')
            }
            
            projectContainer.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('selectProject', { id: project.id }));

            return projectContainer;

            function _createProjectNameElements() {
                // Create two elements for project name, a div element to display 
                // the name, and a text input element to edit the project name.
                // Only one of these elements will be active at any given time.
                
                const divProjName = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    parent: projectContainer,
                    textContent: project.projectName,
                    classList: ['project-name'],
                });

                const inputProjName = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'input',
                    type: 'text',
                    placeholder: '<project name>',
                    value: project.projectName,
                    classList: ['project-name'],
                });

                // Handle input events:
                inputProjName.addEventListener('change', e => _acceptProjectName(e));
                inputProjName.addEventListener('focusout', e => _finishEditProjectName(e));
                inputProjName.addEventListener('keydown', e => _handleInputKeyPress(e));
                
                return { divProjName, inputProjName };

                function _handleInputKeyPress(e) {
                    if (e.key === 'Escape') {
                        inputProjName.value = project.projectName;
    
                        document.activeElement?.blur();
                        window.focus();
                    }
                }
            }

            function _editProjectName(e) {
                divProjName.replaceWith(inputProjName);
                inputProjName.focus(); 
                inputProjName.select(); 
            }

            function _finishEditProjectName(e) {
                inputProjName.replaceWith(divProjName);                
            }
    
            function _acceptProjectName(e) {
                if (!e.target.value) {
                    console.log('Invalid project name!');
                    return;
                }

                _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('changeProject', { id: project.id, projectName: e.target.value })
            }

            function _createDeleteButton() {
                const deleteButton = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['delete-project', 'fa-solid', 'fa-trash-can', 'hide', 'show-on-hover'],
                });

                deleteButton.addEventListener('click', e => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('deleteProject', { id: project.id }));

                return deleteButton;
            }

            function _createEditButton() {
                const editButton = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['edit-project', 'fa-solid', 'fa-pen', 'hide', 'show-on-hover'],
                });

                editButton.addEventListener('click', e => _editProjectName(e));

                return editButton;                    
            }
        }
    
        return {
            generateContent,
            generateProjectItem,
        };
    })();
    
    const itemsDisplayModule = (function() {
        const SortOrder = Object.freeze({
            Title: 0,
            Priority: 1,
            Date: 2,
            Custom: 3
        });
        let primarySortField = SortOrder.Priority;
        
        const SortDirection = Object.freeze({
            Ascending: 1,
            Descending: -1,
        });
        let sortDirection = SortDirection.Descending;

        function _getSortedTodoItems(project) {
            if (!project) {
                return;
            }
            
            let items = project.todoItems;

            switch (primarySortField) {
                case SortOrder.Title:
                    if (sortDirection === SortDirection.Ascending) {
                        items.sort((a, b) => a.title > b.title ? 1 : -1);
                    } 
                    else {
                        items.sort((a, b) => a.title > b.title ? -1 : 1);
                    }
                    break;

                case SortOrder.Priority:
                    if (sortDirection === SortDirection.Ascending) {
                        items.sort((a, b) => a.priority - b.priority);
                    } 
                    else {
                        items.sort((a, b) => b.priority - a.priority);
                    }
                    break;

                case SortOrder.Date:
                    if (sortDirection === SortDirection.Ascending) {
                        items.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(a.dueDate, b.dueDate));
                    } 
                    else {
                        items.sort((a, b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(b.dueDate, a.dueDate));
                    }
                    break;
            }

            return items;
        }

        function generateContent(project) {
            // Return a div containing the active project's todo list.

            const content = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList: [ 'site__page' ]});
            const todoItemsContainer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag:'div', parent:content, classList:['container', 'todo-list']});

            // Container for page controls
            const controlsContainer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                tag: 'div',
                parent: todoItemsContainer,
                classList: ['controls']
            });

            if (project) {
                // Add main control buttons for todo list
                controlsContainer.appendChild(_createAddItemButton());
                controlsContainer.appendChild(_createCollapseAllButton());
                controlsContainer.appendChild(_createExpandAllButton());
                
                // If there is a pending todo item (item added through UI but not 
                // yet accepted by the user), display it at the top of the page.
                const pendingTodoItem = project.getPendingTodoItem();
                if (pendingTodoItem) {
                    todoItemsContainer.appendChild(todoCardModule.generateTodoCard(pendingTodoItem));
                }
                
                // Display all todo items in the project.
                const todoItems = _getSortedTodoItems(project);
                for (let i = 0; i < todoItems.length; i++) {
                    todoItemsContainer.appendChild(todoCardModule.generateTodoCard(todoItems[i]));
                }
            }

            return content;

            function _setAllItemsExpandedState(todoItems, expanded) {
                todoItems.forEach(el => el.expanded = expanded); 
                
                updateContent();
            }

            function _createExpandAllButton() {
                const button = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['expand-all', 'fa-solid', 'fa-xl', 'fa-angle-double-down'],
                });
                button.addEventListener('click', () => _setAllItemsExpandedState(project.todoItems, true));

                return button;
            }
            
            function _createCollapseAllButton() {
                const button = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['collapse-all', 'fa-solid', 'fa-xl', 'fa-angle-double-up'],
                });
                button.addEventListener('click', () => _setAllItemsExpandedState(project.todoItems, false));

                return button;
            }
            
            function _createAddItemButton() {
                // 'Add new todo item' button
                const addItemButton = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['add-item', 'fa-solid', 'fa-xl', 'fa-plus-circle'],
                });
                addItemButton.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('addItem', { isPending: true }));
        
                return addItemButton;
            }        
        }

        function updateContent() {
            const content = document.querySelector('.site__page');
            content?.replaceWith(generateContent(_activeProject));
        }

        const todoCardModule = (function() {
            const _getPriorityClass = (p) => {
                switch (+p) {
                    case +_todo_item__WEBPACK_IMPORTED_MODULE_2__.Priority.High:
                        return 'priority-high';
                    case +_todo_item__WEBPACK_IMPORTED_MODULE_2__.Priority.Low:
                        return 'priority-low';
                    default:
                        return 'priority-normal';
                }
            }

            function generateTodoCard(todoItem) {
                // Return a div containing a single todo item
                // showing the item's basic info. If the item has been 
                // expanded, display details.

                const divTodoCard = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div',
                                                   classList: ['todo-card'],
                                                   id: todoItem.id});
                if (todoItem.done) {
                    divTodoCard.classList.add('todo-done');
                }

                // Container for basic todo item elements
                const divTodoBasic = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    parent: divTodoCard,
                    classList: ['todo-card__basic'],
                });

                divTodoBasic.appendChild(_createCheckboxInput(todoItem));
                divTodoBasic.appendChild(_createTextboxInput(todoItem, {field:'title'}));
                divTodoBasic.appendChild(_createDeleteButton(todoItem));
                divTodoBasic.appendChild(_createExpanderButton(todoItem));
                
                if (todoItem?.expanded) {
                    // Expanded details container
                    const divTodoDetails = _generateExpandedTodoItemContent(todoItem);
                    divTodoCard.appendChild(divTodoDetails);

                    if (todoItem.done) {
                        divTodoDetails.classList.add('todo-done');
                    }
                } 

                return divTodoCard;

                function _createExpanderButton() {
                    const arrow = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                        tag: 'div',
                        classList: ['expander', 'fa-solid', 'show-on-hover'],
                    });
                    arrow.classList.add((todoItem?.expanded) ? 'fa-angle-up' : 'fa-angle-down');
                    
                    arrow.addEventListener('click', () => _expandCollapseTodoItem(todoItem));

                    return arrow;
                }

                function _createCheckboxInput(todoItem) {
                    // Create checkbox container
                    const checkboxContainer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                        tag: 'div',
                        classList: ['checkbox', _getPriorityClass(todoItem.priority)],
                    });
        
                    // Create checkbox input element
                    const checkboxInput = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                        tag: 'input',
                        type: 'checkbox',
                        parent: checkboxContainer,
                        name: todoItem.title,
                        checked: todoItem.done
                    });
        
                    // checkboxInput.checked = todoItem.done;
                    checkboxInput.addEventListener('change', () => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('toggleItemDone', {id: todoItem.id}));
        
                    return checkboxContainer;
                }

                function _createDeleteButton(todoItem) {
                    const button = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                        tag: 'div',
                        classList: ['delete-item', 'fa-solid', 'fa-trash-can', 'hide', 'show-on-hover'],
                    });
        
                    button.addEventListener('click', () => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('deleteItem', {id: todoItem.id})); 
        
                    return button;
                }            
            }

            function _generateExpandedTodoItemContent(todoItem) {
                const divTodoDetails = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'div',
                    classList: ['todo-card__expanded'],
                });

                // Priority
                const priorityContainer = divTodoDetails.appendChild(_createContainerWithIcon('exclamation-triangle'));
                priorityContainer.appendChild((0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', textContent: 'Priority:'}));
                priorityContainer.appendChild(_createPriorityInput(todoItem, {field:'priority'}));
                priorityContainer.appendChild((0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', textContent: todoItem.getPriorityString()}));
                priorityContainer.classList.add('priority');

                // Due date
                const dueDateContainer = divTodoDetails.appendChild(_createContainerWithIcon('calendar-alt'));
                dueDateContainer.appendChild(_createDateInput(todoItem, {field:'dueDate'}));

                // Description
                const infoContainer = divTodoDetails.appendChild(_createContainerWithIcon('info-circle'));
                infoContainer.appendChild(_createTextboxInput(todoItem, {field:'description'}));

                // Notes
                const notesContainer = divTodoDetails.appendChild(_createContainerWithIcon('clipboard'));
                notesContainer.appendChild(_createTextboxInput(todoItem, {field:'notes'}));

                return divTodoDetails;

                function _createPriorityInput(todoItem, args) {
                    let priorityClass = `priority-${todoItem.getPriorityString().toLowerCase()}`;

                    const rangeInput = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                        tag: 'input',
                        type: 'range',
                        min: -1,
                        max: 1,
                        value: todoItem.priority,
                        classList: [priorityClass],
                    });
                    
                    rangeInput.addEventListener('input', (e) => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('changeItem', 
                                                                                {id: todoItem.id, 
                                                                                 [args.field]: e.target.value}));

                    return rangeInput;
                }

                function _createDateInput(todoItem, args) {
                    const dateInput = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                        tag: 'input',
                        type: 'date',
                        value: todoItem.dueDate
                    });
                    
                    if (!_activeProject?.isPendingTodoItem(todoItem) && todoItem[args.field]) {
                        dateInput.value = todoItem[args.field];
                    }
        
                    dateInput.addEventListener('change', (e) => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('changeItem', 
                                                                               {id: todoItem.id, 
                                                                                [args.field]: e.target.value}));
        
                    return dateInput;
                }            
            }

            function _createContainerWithIcon(faIconName) {
                // Create a div with the specified FA character icon as its child element.

                const container = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList:['detail-container']});
                container.appendChild((0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', 
                                                     classList: ['fa-solid', 
                                                                 `fa-${faIconName}`]}));

                return container;
            }

            function _createTextboxInput(todoItem, args) {
                const input = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
                    tag: 'textarea',
                    placeholder: args.field,
                    classList: [args.field],
                });
                
                if (!_activeProject?.isPendingTodoItem(todoItem) && todoItem[args.field]) {
                    input.value = todoItem[args.field];
                }

                input.addEventListener('change', (e) => _pubsub__WEBPACK_IMPORTED_MODULE_0__.publish('changeItem', 
                                                                       {id: todoItem.id, 
                                                                        [args.field]: e.target.value}));

                return input;
            }
            // function _createTextboxInput(todoItem, args) {
            //     const input = createElement({
            //         tag: 'input',
            //         type: 'text',
            //         placeholder: args.field,
            //         classList: [args.field],
            //     });
                
            //     if (!_activeProject?.isPendingTodoItem(todoItem) && todoItem[args.field]) {
            //         input.value = todoItem[args.field];
            //     }

            //     input.addEventListener('change', (e) => pubSub.publish('changeItem', 
            //                                                            {id: todoItem.id, 
            //                                                             [args.field]: e.target.value}));

            //     return input;
            // }

            return {
                generateTodoCard
            };
        })();

        function updateTodoItem(todoItem) {
            const newTodoCard = todoCardModule.generateTodoCard(todoItem);
            document.querySelector('#' + todoItem.id)?.replaceWith(newTodoCard);
        }

        return {
            generateContent,
            updateContent,
            updateTodoItem,
        }
    })();

    function getActiveProject() {
        return _activeProject;
    }

    function setActiveProject(project) {
        if (project) {
            _activeProject = project;
        }
        else if (_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects.length > 0) {
            _activeProject = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects[0];
        }
        else {
            return;
        }

        // Highlight the active project in the sidebar:
        const projects = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects;
        for (let i = 0; i < projects.length; i++) {
            document.querySelector(`#${projects[i].id}`)?.classList.remove('active');
        }
        
        document.querySelector(`#${_activeProject.id}`)?.classList.add('active');
    }

    function updateProject(project) {
        const newProjectElement = projectsDisplayModule.generateProjectItem(project);
        document.querySelector('#' + project.id)?.replaceWith(newProjectElement);

        setActiveProject(_activeProject);
    }

    function _expandCollapseTodoItem(todoItem) {
        todoItem.expanded = !todoItem.expanded;

        itemsDisplayModule.updateTodoItem(todoItem);
    }

    return {
        generateContent,
        updateProject,
        setActiveProject,
        getActiveProject,
        updateTodoItem: itemsDisplayModule.updateTodoItem,
        updateContent: itemsDisplayModule.updateContent,
    };
})();

const footerDisplayModule = (function() {
    function generateFooter() {
        const footer = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tag: 'div', 
            classList: ['site__footer'],
        });    
        const footerContent = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tag: 'div',
            parent: footer, 
            classList: ['footer__inner'],
        });
    
        (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tag: 'span',
            parent: footerContent,
            textContent: 'Copyright © 2022 David Ravanbakhsh',
        });
    
        const a = (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tag: 'a',
            parent: footerContent,
        });
        a.href = 'https://github.com/ravanbak';
        a.target = '_blank';
    
        (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({
            tag: 'i',
            parent: a,
            classList: ['fa-brands', 'fa-github-square', 'fa-2x'],
        });
    
        return footer;
    }

    return {
        generateFooter,
    }
})();

const display = (function() {
    function renderSite(projects) {
        // Render the site (including header and footer).

        (0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.deleteAllChildren)('div#site');

        const site = document.querySelector('div#site');
        site?.appendChild(headerDisplayModule.generateHeader());
        site?.appendChild(contentDisplayModule.generateContent(projects)); //, activeProject));
        site?.appendChild(footerDisplayModule.generateFooter());
    }

    function updateContent(projects) {
        // Render site content (sidebar and todo list items).
        
        const content = document.querySelector('.site__content');
        const updatedContent = contentDisplayModule.generateContent(projects, contentDisplayModule.getActiveProject());
        content?.replaceWith(updatedContent);
    }

    return {
        renderSite,
        updateContent,
        updateTodoItem: contentDisplayModule.updateTodoItem,
        updateTodoItems: contentDisplayModule.updateContent,
        updateProject: contentDisplayModule.updateProject,
        getActiveProject: contentDisplayModule.getActiveProject,
        setActiveProject: contentDisplayModule.setActiveProject,
    };
})();



/***/ }),

/***/ "./src/dom-util.js":
/*!*************************!*\
  !*** ./src/dom-util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "deleteAllChildren": () => (/* binding */ deleteAllChildren)
/* harmony export */ });
function createElement(args) {
    if (!args.tag) return;

    const el = document.createElement(args.tag);

    for (const [key, value] of Object.entries(args)) {
        if (key === 'classList') {
            el[key].add(...value);
        }
        else if (key === 'parent') {
            args.parent?.appendChild(el);
        }
        else {
            el[key] = value;
        }
    }
    
    return el;
}

function deleteAllChildren(selector) {
    // Delete all children of the selected element 
    // and return the selected element.

    const parent = document.querySelector(selector);

    while (parent?.firstChild) {
        parent?.removeChild(parent?.lastChild);
    }

    return parent;
}

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
let subscribers = {};

function publish(event, data) {
    if (!subscribers[event]) {
        return;
    }

    subscribers[event].forEach(subscriberCallback => {
        subscriberCallback(data);
    });
}

function subscribe(event, callback) {
    if (!subscribers[event]) {
        subscribers[event] = [];
    }

    subscribers[event].push(callback);
}

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": () => (/* binding */ Priority),
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


const Priority = Object.freeze({
    High: 1,
    Normal: 0,
    Low: -1,
});

function createTodoItem(title, description, dueDate, priority = Priority.Normal, notes, done = false) {
    const id = 'item-' + (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();

    function getPriorityString() {
        switch (+this.priority) {
            case Priority.Low:
                return 'Low';
                break;
            case Priority.High:
                return 'High';
                break;
            default:
                return 'Normal';
        }
    }

    return {
        id,
        done,
        title,
        description,
        dueDate,
        priority,
        getPriorityString,
        notes,
    }
}



/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage),
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-project */ "./src/todo-project.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");



const LOCAL_STORAGE_ID = 'todolist-d9ca00ce-6574-42bd-bf2e-de22444f4ff5';

const todoList = (function() {
    let projects = [];
        
    function addProject(projectName) {
        const project = _todo_project__WEBPACK_IMPORTED_MODULE_0__.createProject(projectName);

        if (project) {
            projects.push(project);

            return project;
        }
    }

    function deleteProject(projectID) {
        const idx = projects.findIndex((p) => p.id === projectID );

        if (idx < 0) {
            console.log(`Project not found! Function: ${deleteProject.name}`);
        } 
        else {
            projects.splice(idx, 1);
        }
        
        return (idx > -1);
    }

    function changeProject(data) {
        const idx = projects.findIndex(p => p.id === data.id);

        if (idx < 0) {
            console.log(`Project not found! Function: ${changeProject.name}`);
            return;
        }

        return Object.assign(projects[idx], data);
    }

    function getProject(projectID) {
        const idx = projects.findIndex(p => p.id === projectID);

        if (idx < 0) {
            console.log(`Project not found! Function: ${getProject.name}`);
            return;
        }
        
        return projects[idx];
    }

    function addTodoItem(project, title, description, dueDate, priority, notes, isPending) {
        if (!project) {
            console.log(`Project not found!`);
            return;
        }

        const todoItem = _todo_item__WEBPACK_IMPORTED_MODULE_1__.createTodoItem(title, description, dueDate, priority, notes);

        return project.addTodoItem(todoItem, isPending);
    }

    function toggleTodoItemDone(project, id) {
        const todoItem = project.getTodoItem(id);
        todoItem.done = !todoItem.done;

        return todoItem;
    }

    function changeTodoItem(project, modifiedTodoItem) {
        if (!project || !modifiedTodoItem.id) {
            console.log('Project or todo item not found.');
            return false;
        }

        return project.changeTodoItem(modifiedTodoItem);
    }

    function deleteTodoItem(project, id) {
        if (!project || !id) {
            console.log('Project or todo item not found.');
            return false;
        }

        return project.deleteTodoItem(id);
    }

    return {
        projects,
        addProject,
        deleteProject,
        changeProject,
        getProject,
        addTodoItem,
        changeTodoItem,
        deleteTodoItem,
        toggleTodoItemDone,
    }
})();

function saveToLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_ID);
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(todoList));
}

function getFromLocalStorage() {
    let projects = getStoredProjects();
    if (!projects || projects?.length === 0) {
        return false;
    }

    // Load stored data:
    for (let i = 0; i < projects.length; i++) {
        // Load project:
        let proj = todoList.addProject(''); // create an empty project object
        proj.id = projects[i].id;
        proj.projectName = projects[i].projectName;
        
        // Load the todo items in this project:
        let items = projects[i].todoItems;
        if (!items || items?.length === 0) {
            continue;
        }

        for (let j = items.length - 1; j >= 0; j--) {
            let item = _todo_item__WEBPACK_IMPORTED_MODULE_1__.createTodoItem();
            Object.assign(item, items[j]);
            proj.addTodoItem(item, false);
        }
    }

    return true;

    function getStoredProjects() {
        const storage = localStorage.getItem(LOCAL_STORAGE_ID);

        if (!storage) {
            return null;
        }
    
        const data = JSON.parse(storage);
        if (!data) {
            return null;
        }
    
        const projects = data.projects;
        if (projects.length === 0) {
            return null;
        }

        return projects;
    }
}



/***/ }),

/***/ "./src/todo-project.js":
/*!*****************************!*\
  !*** ./src/todo-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");



function createProject(projectName) {
    const id = 'proj-' + (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
    let todoItems = [];
    let _pendingTodoItem; // todo item added through UI and not yet confirmed by user
    
    const _getTodoItemIndex = (id) => todoItems.findIndex(el => el.id === id);
    
    function addTodoItem(todoItem, isPending) {
        if (isPending) {
            // This item is to be confirmed by the user
            // before it is added to the project list.
            _pendingTodoItem = todoItem;
        } 
        else {
            todoItems.unshift(todoItem);
        }

        return todoItem;
    }

    function changeTodoItem(modifiedTodoItem) {
        let item = getTodoItem(modifiedTodoItem.id);
        if (!item) {
            console.log(`Item ${modifiedTodoItem?.id} not found in ${this.projectName}`);
            return item;
        }
        
        item = Object.assign(item, modifiedTodoItem);

        if (isPendingTodoItem(item)) {
            confirmPendingTodoItem();
        }

        return item;
    }

    function deleteTodoItem(id) {
        if (id === _pendingTodoItem?.id) {
            // Cancel the pending todo item.
            _pendingTodoItem = null;

            return true;
        }

        const idx = _getTodoItemIndex(id);
        
        if (idx < 0) {
            console.log(`Todo item not found!`);
        }
        else {
            todoItems.splice(idx, 1);
        }

        return (idx > -1);
    }

    function getTodoItem(id) {
        let item = todoItems.find(el => el.id === id);
        
        if (!item && id === _pendingTodoItem?.id) {
            item = _pendingTodoItem;
        }
        
        return item;
    }

    function isPendingTodoItem(todoItem) {
        return todoItem?.id === _pendingTodoItem?.id;
    }

    function getPendingTodoItem() {
        return _pendingTodoItem;
    }

    function confirmPendingTodoItem() {
        if (!_pendingTodoItem) {
            console.log('No pending todo item to confirm!');
            return false;
        }

        addTodoItem(_pendingTodoItem, false);
        
        _pendingTodoItem = null;

        return true;
    }

    return {
        id,
        todoItems,
        projectName,
        addTodoItem,
        changeTodoItem,
        deleteTodoItem,
        getTodoItem,
        getPendingTodoItem,
        isPendingTodoItem,
        confirmPendingTodoItem,
    }
}



/***/ }),

/***/ "./src/assets/hero.png":
/*!*****************************!*\
  !*** ./src/assets/hero.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3974c653bc83af9ae1a4.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");






const controller = (function() {
    const init = (function() {
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('addProject', data => {
            _display__WEBPACK_IMPORTED_MODULE_2__.display.setActiveProject(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addProject(data.projectName));

            _updateContent();
        });
        
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('deleteProject', data => {
            if (!_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.deleteProject(data.id)) {
                return;
            }
            
            _updateContent();
        });
        
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('selectProject', data => { 
            _display__WEBPACK_IMPORTED_MODULE_2__.display.setActiveProject(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.getProject(data.id));

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItems();
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('addItem', data => {
            const proj = _display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject();
            _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(proj, '', '', Date.now(), _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.Normal, '', data.isPending)

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItems();
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('confirmItem', () => {
            _display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject()?.confirmPendingTodoItem();

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItems();
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('deleteItem', data => {
            _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.deleteTodoItem(_display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject(), data.id);

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItems();
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('changeItem', data => {
            _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.changeTodoItem(_display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject(), data);

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItem(_display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject().getTodoItem(data.id));
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('changeProject', data => {
            _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.changeProject(data);

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateProject(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.getProject(data.id));
        });

        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('toggleItemDone', data => {
            const todoItem = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.toggleTodoItemDone(_display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject(), data.id);

            _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItem(todoItem);
        });

        // Save the entire todo list to local storage when any
        // of the below events are fired:
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('addProject', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('deleteProject', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('addItem', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('confirmItem', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('deleteItem', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('changeItem', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('changeProject', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
        _pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe('toggleItemDone', _todo_list__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage);
    })();

    function _updateContent() {
        // Update sidebar and page.
        _display__WEBPACK_IMPORTED_MODULE_2__.display.updateContent(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects, _display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject());
    }

    const createTestData = (function() {
        localStorage.clear();

        const project = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addProject('To Do');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'finish this project', 'this project is a todo list', '2022-10-09', _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.High, 'check the box when done');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'add button to expand/collapse all todo items');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'add box shadows', 'cross off', '', _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.Low);
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow editing project names', 'project', '', _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.Normal,'in-place editing?');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow editing todo item properties', 'in-place editing', '');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'move completed items to the end of the list', 'animated?', '', _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.Normal, 'should this be automatic?');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'this item date is the latest', '');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow sorting of todo items', '');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow deleting todo items', '');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow adding projects', '');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow deleting projects');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(project, 'allow custom sort of projects', '', '2022-12-16');
        
        const projectGroceries = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addProject('Groceries');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'bananas');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'nectarines', '', null, _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.Low);
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'apples');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'plantains');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'flour', 'gluten free', '', _todo_item__WEBPACK_IMPORTED_MODULE_4__.Priority.High, 'President\'s Choice');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'milk');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'cream');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'butter');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'eggs');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'bacon');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGroceries,'aged cheddar');

        const projectGarden = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addProject('Garden');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGarden, 'transplant lettuce');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGarden, 'water tomato plants');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(projectGarden, 'water cherry trees');

        const yard = _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addProject('Yard');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(yard, 'mow lawn');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(yard, 'level lawn');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(yard, 'plant grass seed');
        _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addTodoItem(yard, 'set up sprinkler');
    });

    return {
        createTestData, 
    }
})();

const useLocalStorage = true;

if (useLocalStorage) {
    const loadedFromLocalStorage = (0,_todo_list__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)();
    
    if (!loadedFromLocalStorage) {
        console.log('No todo list data found in local storage.');
    
        const _DEFAULT_PROJECT_NAME = 'To Do';
        _display__WEBPACK_IMPORTED_MODULE_2__.display.setActiveProject(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.addProject(_DEFAULT_PROJECT_NAME).id);
    }
} 
else {
    controller.createTestData();
    if (_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects.length > 0) {
        _display__WEBPACK_IMPORTED_MODULE_2__.display.setActiveProject(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects[0]);
    }
}

_display__WEBPACK_IMPORTED_MODULE_2__.display.renderSite(_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.projects);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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Qyx5REFBaUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/MTM2NyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tdXRpbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9oZXJvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1jb2xvci1jb250ZW50LWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTYlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5MiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1ob3Zlci1iYWNrZ3JvdW5kOiBoc2woNDYsIDEwMCUsIDgyJSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWRldGFpbHMtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5NSUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXI6IGhzbCg0OSwgMTglLCA3NyUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kb25lOiBoc2woMTAwJSwgMzAlLCAzMCUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kb25lLWJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODYlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtY2hlY2tib3gtYmFja2dyb3VuZDogIzAwOTkwMDtcXG4gICAgLS1jb2xvci1pbnB1dC1mb2N1c3NlZC1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTAsIDE4NCk7XFxuICAgIC0tY29sb3ItYWN0aXZlLXByb2plY3Q6ICNmZmJmN2I7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktaGlnaDogcmVkO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LW5vcm1hbDogIzU1RUU0NDtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1sb3c6ICNlZWRkMDA7XFxuICAgIC0tYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgLS1zaXplLWljb246IDIuNWNoO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA5JSwgNzUlKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNpdGVfX2NvbnRlbnQgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpdGVfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAtNDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjAwcHg7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaXRlX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jb250ZW50LWJhY2tncm91bmQpO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtYXgoMTAwcHgsIDIwdncpO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgICBwYWRkaW5nOiAyNXB4IDVweCAzMHB4IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZWRpdC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgZGl2LnByb2plY3QtbmFtZSB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgLnByb2plY3QtY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjdGl2ZS1wcm9qZWN0KTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgc2l6ZTogMzA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbnB1dC1mb2N1c3NlZC1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uc2l0ZV9fcGFnZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHggLSA0MHB4IC0gMzZweCk7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1saXN0IC5jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbmRpdi5jb250cm9scyB7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udG9kby1saXN0IC5hZGQtaXRlbSB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCAuZXhwYW5kLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDsgICAgXFxufVxcblxcbi50b2RvLWxpc3QgLmNvbGxhcHNlLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggYXV0bztcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC8qIGZvbnQtc2l6ZTogNS4xcmVtOyAqL1xcbiAgICBoZWlnaHQ6IDAuMjVyZW07XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMWZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXQucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWhpZ2gpO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LW5vcm1hbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LW5vcm1hbCk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXQucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktbG93KTtcXG59XFxuXFxuLyogLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXRleHRdIHsgKi9cXG4udG9kby1jYXJkIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIHNpemU6IDEwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRvZG8tY2FyZCB0ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LWZvY3Vzc2VkLWJhY2tncm91bmQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBzaXplOiA1O1xcbn1cXG5cXG4udG9kby1jYXJkIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7ICovXFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAjMDAwMDAwMzM7XFxufVxcblxcbi5zaG93LW9uLWhvdmVyXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciAuc2hvdy1vbi1ob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIgLnNob3ctb24taG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjMzMztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5zaG93LW9uLWhvdmVyOmhvdmVyLFxcbi50b2RvLWNhcmQgLnNob3ctb24taG92ZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kby1jYXJkICoge1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxufVxcblxcbi50b2RvLWNhcmRfX2Jhc2ljIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC50b2RvLWNhcmRfX2Jhc2ljIGlucHV0W3R5cGU9dGV4dF0geyAqL1xcbi50b2RvLWNhcmRfX2Jhc2ljIHRleHRhcmVhIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC8qIHdpZHRoOiA2MCU7ICovXFxuICAgIC8qIGZvbnQtc2l6ZTogaW5oZXJpdDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi50b2RvLWNhcmRfX2V4cGFuZGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDEwcHggM3B4IDVweCAzcHg7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50b2RvLWNhcmRfX2V4cGFuZGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWRldGFpbHMtYmFja2dyb3VuZCk7XFxufVxcblxcbi50b2RvLWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi50b2RvLWNhcmQudG9kby1kb25lLFxcbi50b2RvLWNhcmRfX2V4cGFuZGVkLnRvZG8tZG9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1kb25lLWJhY2tncm91bmQpO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyID4gLmZhLXNvbGlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWluLXdpZHRoOiA0Y2g7XFxuICAgIG1heC13aWR0aDogNGNoO1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXQge1xcbiAgICB3aWR0aDogMmNoO1xcbiAgICBoZWlnaHQ6IDJjaDtcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtY2hlY2tib3gtYmFja2dyb3VuZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQgLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMmNoO1xcbiAgICBtaW4taGVpZ2h0OiAyY2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktbm9ybWFsKTtcXG59XFxuXFxuLnRvZG8tY2FyZCAucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWhpZ2gpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5kZWxldGUtaXRlbSxcXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAwIDZweCAwIDZweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tY2FyZCAuZXhwYW5kZXIge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA2cHg7XFxufVxcblxcbi50b2RvLWRvbmUgLnRpdGxlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5zaXRlX19mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogaHNsKDE4NCwgOSUsIDc1JSk7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaXRlX19mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpdGVfX2Zvb3RlciBpIHtcXG4gICAgY29sb3I6IHJnYig0MiwgNjQsIDY0KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELHNEQUFzRDtJQUN0RCx3REFBd0Q7SUFDeEQsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQyxrREFBa0Q7SUFDbEQsOENBQThDO0lBQzlDLHFEQUFxRDtJQUNyRCwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseURBQTBDO0lBQzFDLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxREFBcUQ7SUFDckQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lB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O0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx3REFBd0Q7SUFDeEQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1jb250ZW50LWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTYlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5MiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1ob3Zlci1iYWNrZ3JvdW5kOiBoc2woNDYsIDEwMCUsIDgyJSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWRldGFpbHMtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5NSUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXI6IGhzbCg0OSwgMTglLCA3NyUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kb25lOiBoc2woMTAwJSwgMzAlLCAzMCUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kb25lLWJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODYlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtY2hlY2tib3gtYmFja2dyb3VuZDogIzAwOTkwMDtcXG4gICAgLS1jb2xvci1pbnB1dC1mb2N1c3NlZC1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTAsIDE4NCk7XFxuICAgIC0tY29sb3ItYWN0aXZlLXByb2plY3Q6ICNmZmJmN2I7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktaGlnaDogcmVkO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LW5vcm1hbDogIzU1RUU0NDtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1sb3c6ICNlZWRkMDA7XFxuICAgIC0tYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgLS1zaXplLWljb246IDIuNWNoO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA5JSwgNzUlKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNpdGVfX2NvbnRlbnQgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpdGVfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaGVyby5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIC00MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMDBweDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxuXFxuLnNpdGVfX2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCB2YXIoLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IG1heCgxMDBweCwgMjB2dyk7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxuICAgIHBhZGRpbmc6IDI1cHggNXB4IDMwcHggNXB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5lZGl0LXByb2plY3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5kZWxldGUtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciBkaXYucHJvamVjdC1uYW1lIHtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAucHJvamVjdC1jb250YWluZXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWN0aXZlLXByb2plY3QpO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBzaXplOiAzMDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LWZvY3Vzc2VkLWJhY2tncm91bmQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5zaXRlX19wYWdlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBweCAtIDQwcHggLSAzNnB4KTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWxpc3QgLmNvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG59XFxuXFxuZGl2LmNvbnRyb2xzIHtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50b2RvLWxpc3QgLmFkZC1pdGVtIHtcXG4gICAgY29sb3I6IHJnYig0MiwgNjQsIDY0KTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4udG9kby1saXN0IC5leHBhbmQtYWxsIHtcXG4gICAgY29sb3I6IHJnYig0MiwgNjQsIDY0KTtcXG4gICAgbWFyZ2luOiAxMHB4OyAgICBcXG59XFxuXFxuLnRvZG8tbGlzdCAuY29sbGFwc2UtYWxsIHtcXG4gICAgY29sb3I6IHJnYig0MiwgNjQsIDY0KTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCBhdXRvO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0W3R5cGU9cmFuZ2VdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgLyogZm9udC1zaXplOiA1LjFyZW07ICovXFxuICAgIGhlaWdodDogMC4yNXJlbTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmIxZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dC5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktaGlnaCk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXQucHJpb3JpdHktbm9ybWFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktbm9ybWFsKTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dC5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4vKiAudG9kby1jYXJkIGlucHV0W3R5cGU9dGV4dF0geyAqL1xcbi50b2RvLWNhcmQgdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgc2l6ZTogMTA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udG9kby1jYXJkIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHNpemU6IDU7XFxufVxcblxcbi50b2RvLWNhcmQgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyKTsgKi9cXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4ICMwMDAwMDAzMztcXG59XFxuXFxuLnNob3ctb24taG92ZXJcXG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4udG9kby1jYXJkOmhvdmVyIC5zaG93LW9uLWhvdmVyLFxcbi5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciAuc2hvdy1vbi1ob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuMzMzO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLnNob3ctb24taG92ZXI6aG92ZXIsXFxuLnRvZG8tY2FyZCAuc2hvdy1vbi1ob3Zlcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi50b2RvLWNhcmQgKiB7XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG59XFxuXFxuLnRvZG8tY2FyZF9fYmFzaWMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLnRvZG8tY2FyZF9fYmFzaWMgaW5wdXRbdHlwZT10ZXh0XSB7ICovXFxuLnRvZG8tY2FyZF9fYmFzaWMgdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLyogd2lkdGg6IDYwJTsgKi9cXG4gICAgLyogZm9udC1zaXplOiBpbmhlcml0OyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2LnRvZG8tY2FyZF9fZXhwYW5kZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbjogMTBweCAzcHggNXB4IDNweDtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRvZG8tY2FyZF9fZXhwYW5kZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtZGV0YWlscy1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnRvZG8tY2FyZC50b2RvLWRvbmUsXFxuLnRvZG8tY2FyZF9fZXhwYW5kZWQudG9kby1kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWRvbmUtYmFja2dyb3VuZCk7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmRldGFpbC1jb250YWluZXIgPiAuZmEtc29saWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtaW4td2lkdGg6IDRjaDtcXG4gICAgbWF4LXdpZHRoOiA0Y2g7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dCB7XFxuICAgIHdpZHRoOiAyY2g7XFxuICAgIGhlaWdodDogMmNoO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1jaGVja2JveC1iYWNrZ3JvdW5kKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCAuY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAyY2g7XFxuICAgIG1pbi1oZWlnaHQ6IDJjaDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktaGlnaCk7XFxufVxcblxcbi50b2RvLWNhcmQgLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi50b2RvLWNhcmQgLmRlbGV0ZS1pdGVtLFxcbi5kZWxldGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jYXJkIC5leHBhbmRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcXG59XFxuXFxuLnRvZG8tZG9uZSAudGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnNpdGVfX2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMTg0LCA5JSwgNzUlKTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5mb290ZXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpdGVfX2Zvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2l0ZV9fZm9vdGVyIGkge1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQgKiBhcyBwdWJTdWIgZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgZGVsZXRlQWxsQ2hpbGRyZW4gfSBmcm9tICcuL2RvbS11dGlsJztcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi90b2RvLWl0ZW0nO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgdG9kb0xpc3QgfSBmcm9tICcuL3RvZG8tbGlzdCc7XG5cbi8qXG5TaXRlIGxheW91dDpcbiBIZWFkZXJcbiA9PT09PT09PT09PVxuIENvbnRlbnQgKFByb2plY3RzLCBJdGVtcylcbiA9PT09PT09PT09PVxuIEZvb3RlclxuKi9cblxuY29uc3QgaGVhZGVyRGlzcGxheU1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicgfSk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzaXRlX19oZWFkZXInKTtcblxuICAgICAgICBjb25zdCBkaXZUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoeyBcbiAgICAgICAgICAgIHRhZzogJ2RpdicsIFxuICAgICAgICAgICAgcGFyZW50OiBoZWFkZXIsIFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbICdoZXJvLXRleHQnIF0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnaDEnLFxuICAgICAgICAgICAgcGFyZW50OiBkaXZUaXRsZSxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAgJ1RvZG9vZGxpJyxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVIZWFkZXIsXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRlbnREaXNwbGF5TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBfYWN0aXZlUHJvamVjdDtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cywgYWN0aXZlUHJvamVjdCkge1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgc2lkZWJhciBhbmQgdGhlIGFjdGl2ZSBwcm9qZWN0J3MgdG9kbyBsaXN0IGNvbnRlbnQgXG4gICAgICAgIC8vIGFuZCByZXR1cm4gYSBkaXYgY29udGFpbmluZyBib3RoLlxuXG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gYWN0aXZlUHJvamVjdCA/IGFjdGl2ZVByb2plY3QgOiBwcm9qZWN0c1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpdGVDb250ZW50ID0gY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgY2xhc3NMaXN0OiBbJ2NvbnRhaW5lcicsICdzaXRlX19jb250ZW50J119KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBwcm9qZWN0c1xuICAgICAgICBzaXRlQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpc3BsYXlNb2R1bGUuZ2VuZXJhdGVDb250ZW50KHByb2plY3RzLCBfYWN0aXZlUHJvamVjdCkpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtc1xuICAgICAgICBzaXRlQ29udGVudC5hcHBlbmRDaGlsZChpdGVtc0Rpc3BsYXlNb2R1bGUuZ2VuZXJhdGVDb250ZW50KF9hY3RpdmVQcm9qZWN0KSk7XG5cbiAgICAgICAgcmV0dXJuIHNpdGVDb250ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RzRGlzcGxheU1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7IHRhZzogJ2RpdicsIGNsYXNzTGlzdDogWydzaXRlX19zaWRlYmFyJ10gfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzaWRlYmFyID0gX2FkZFNpZGViYXJFbGVtZW50KCk7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKF9hZGRQcm9qZWN0TGlzdCgpKTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoX2FkZEFkZFByb2plY3RCdXR0b24oKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICAgICAgICAgIHJldHVybiBzaWRlYmFyQ29udGFpbmVyO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfYWRkU2lkZWJhckVsZW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnUHJvamVjdHMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfYWRkUHJvamVjdExpc3QoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6IFsncHJvamVjdHMtY29udGFpbmVyJ119KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlUHJvamVjdEl0ZW0ocHJvamVjdHNbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdHNDb250YWluZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9hZGRBZGRQcm9qZWN0QnV0dG9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6IFsnYWRkLXByb2plY3QnXX0pO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgY2xhc3NMaXN0OiBbJ2ZhLXNvbGlkJywgJ2ZhLXhsJywgJ2ZhLXBsdXMtY2lyY2xlJ119KSk7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHB1YlN1Yi5wdWJsaXNoKCdhZGRQcm9qZWN0Jywge3Byb2plY3ROYW1lOiAnTmV3IFByb2plY3QnfSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0SXRlbShwcm9qZWN0KSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYW4gZWxlbWVudCBkaXNwbGF5aW5nIHRoZSBwcm9qZWN0IG5hbWUgYW5kIFxuICAgICAgICAgICAgLy8gYnV0dG9ucyBmb3IgbWFuaXB1bGF0aW5nIHRoZSBwcm9qZWN0LlxuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JywgXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Byb2plY3QtY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgaWQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlRGVsZXRlQnV0dG9uKCkpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlRWRpdEJ1dHRvbigpKTtcblxuICAgICAgICAgICAgY29uc3QgeyBkaXZQcm9qTmFtZSwgaW5wdXRQcm9qTmFtZSB9ID0gX2NyZWF0ZVByb2plY3ROYW1lRWxlbWVudHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaGlsaWdodCB0aGUgYWN0aXZlIHByb2plY3RcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBfYWN0aXZlUHJvamVjdD8uaWQpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwdWJTdWIucHVibGlzaCgnc2VsZWN0UHJvamVjdCcsIHsgaWQ6IHByb2plY3QuaWQgfSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZVByb2plY3ROYW1lRWxlbWVudHMoKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byBlbGVtZW50cyBmb3IgcHJvamVjdCBuYW1lLCBhIGRpdiBlbGVtZW50IHRvIGRpc3BsYXkgXG4gICAgICAgICAgICAgICAgLy8gdGhlIG5hbWUsIGFuZCBhIHRleHQgaW5wdXQgZWxlbWVudCB0byBlZGl0IHRoZSBwcm9qZWN0IG5hbWUuXG4gICAgICAgICAgICAgICAgLy8gT25seSBvbmUgb2YgdGhlc2UgZWxlbWVudHMgd2lsbCBiZSBhY3RpdmUgYXQgYW55IGdpdmVuIHRpbWUuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2UHJvak5hbWUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwcm9qZWN0Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogcHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Byb2plY3QtbmFtZSddLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRQcm9qTmFtZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICc8cHJvamVjdCBuYW1lPicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsncHJvamVjdC1uYW1lJ10sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgaW5wdXQgZXZlbnRzOlxuICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBfYWNjZXB0UHJvamVjdE5hbWUoZSkpO1xuICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBlID0+IF9maW5pc2hFZGl0UHJvamVjdE5hbWUoZSkpO1xuICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gX2hhbmRsZUlucHV0S2V5UHJlc3MoZSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB7IGRpdlByb2pOYW1lLCBpbnB1dFByb2pOYW1lIH07XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfaGFuZGxlSW5wdXRLZXlQcmVzcyhlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUudmFsdWUgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudD8uYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9lZGl0UHJvamVjdE5hbWUoZSkge1xuICAgICAgICAgICAgICAgIGRpdlByb2pOYW1lLnJlcGxhY2VXaXRoKGlucHV0UHJvak5hbWUpO1xuICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUuZm9jdXMoKTsgXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS5zZWxlY3QoKTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9maW5pc2hFZGl0UHJvamVjdE5hbWUoZSkge1xuICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUucmVwbGFjZVdpdGgoZGl2UHJvak5hbWUpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9hY2NlcHRQcm9qZWN0TmFtZShlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBwcm9qZWN0IG5hbWUhJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwdWJTdWIucHVibGlzaCgnY2hhbmdlUHJvamVjdCcsIHsgaWQ6IHByb2plY3QuaWQsIHByb2plY3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dG9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZGVsZXRlLXByb2plY3QnLCAnZmEtc29saWQnLCAnZmEtdHJhc2gtY2FuJywgJ2hpZGUnLCAnc2hvdy1vbi1ob3ZlciddLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBwdWJTdWIucHVibGlzaCgnZGVsZXRlUHJvamVjdCcsIHsgaWQ6IHByb2plY3QuaWQgfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUJ1dHRvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUVkaXRCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZWRpdC1wcm9qZWN0JywgJ2ZhLXNvbGlkJywgJ2ZhLXBlbicsICdoaWRlJywgJ3Nob3ctb24taG92ZXInXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IF9lZGl0UHJvamVjdE5hbWUoZSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRCdXR0b247ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2VuZXJhdGVDb250ZW50LFxuICAgICAgICAgICAgZ2VuZXJhdGVQcm9qZWN0SXRlbSxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuICAgIFxuICAgIGNvbnN0IGl0ZW1zRGlzcGxheU1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgU29ydE9yZGVyID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBUaXRsZTogMCxcbiAgICAgICAgICAgIFByaW9yaXR5OiAxLFxuICAgICAgICAgICAgRGF0ZTogMixcbiAgICAgICAgICAgIEN1c3RvbTogM1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHByaW1hcnlTb3J0RmllbGQgPSBTb3J0T3JkZXIuUHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBTb3J0RGlyZWN0aW9uID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBBc2NlbmRpbmc6IDEsXG4gICAgICAgICAgICBEZXNjZW5kaW5nOiAtMSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzb3J0RGlyZWN0aW9uID0gU29ydERpcmVjdGlvbi5EZXNjZW5kaW5nO1xuXG4gICAgICAgIGZ1bmN0aW9uIF9nZXRTb3J0ZWRUb2RvSXRlbXMocHJvamVjdCkge1xuICAgICAgICAgICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBwcm9qZWN0LnRvZG9JdGVtcztcblxuICAgICAgICAgICAgc3dpdGNoIChwcmltYXJ5U29ydEZpZWxkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTb3J0T3JkZXIuVGl0bGU6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSBTb3J0RGlyZWN0aW9uLkFzY2VuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS50aXRsZSA+IGIudGl0bGUgPyAxIDogLTEpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEudGl0bGUgPiBiLnRpdGxlID8gLTEgOiAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU29ydE9yZGVyLlByaW9yaXR5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFNvcnRPcmRlci5EYXRlOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVBc2MoYS5kdWVEYXRlLCBiLmR1ZURhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBjb21wYXJlQXNjKGIuZHVlRGF0ZSwgYS5kdWVEYXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0KSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gYSBkaXYgY29udGFpbmluZyB0aGUgYWN0aXZlIHByb2plY3QncyB0b2RvIGxpc3QuXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6IFsgJ3NpdGVfX3BhZ2UnIF19KTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe3RhZzonZGl2JywgcGFyZW50OmNvbnRlbnQsIGNsYXNzTGlzdDpbJ2NvbnRhaW5lcicsICd0b2RvLWxpc3QnXX0pO1xuXG4gICAgICAgICAgICAvLyBDb250YWluZXIgZm9yIHBhZ2UgY29udHJvbHNcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHRvZG9JdGVtc0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnY29udHJvbHMnXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIG1haW4gY29udHJvbCBidXR0b25zIGZvciB0b2RvIGxpc3RcbiAgICAgICAgICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlQWRkSXRlbUJ1dHRvbigpKTtcbiAgICAgICAgICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlQ29sbGFwc2VBbGxCdXR0b24oKSk7XG4gICAgICAgICAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUV4cGFuZEFsbEJ1dHRvbigpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHBlbmRpbmcgdG9kbyBpdGVtIChpdGVtIGFkZGVkIHRocm91Z2ggVUkgYnV0IG5vdCBcbiAgICAgICAgICAgICAgICAvLyB5ZXQgYWNjZXB0ZWQgYnkgdGhlIHVzZXIpLCBkaXNwbGF5IGl0IGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gICAgICAgICAgICAgICAgY29uc3QgcGVuZGluZ1RvZG9JdGVtID0gcHJvamVjdC5nZXRQZW5kaW5nVG9kb0l0ZW0oKTtcbiAgICAgICAgICAgICAgICBpZiAocGVuZGluZ1RvZG9JdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9JdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2FyZE1vZHVsZS5nZW5lcmF0ZVRvZG9DYXJkKHBlbmRpbmdUb2RvSXRlbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGFsbCB0b2RvIGl0ZW1zIGluIHRoZSBwcm9qZWN0LlxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtcyA9IF9nZXRTb3J0ZWRUb2RvSXRlbXMocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DYXJkTW9kdWxlLmdlbmVyYXRlVG9kb0NhcmQodG9kb0l0ZW1zW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX3NldEFsbEl0ZW1zRXhwYW5kZWRTdGF0ZSh0b2RvSXRlbXMsIGV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgdG9kb0l0ZW1zLmZvckVhY2goZWwgPT4gZWwuZXhwYW5kZWQgPSBleHBhbmRlZCk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUV4cGFuZEFsbEJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2V4cGFuZC1hbGwnLCAnZmEtc29saWQnLCAnZmEteGwnLCAnZmEtYW5nbGUtZG91YmxlLWRvd24nXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfc2V0QWxsSXRlbXNFeHBhbmRlZFN0YXRlKHByb2plY3QudG9kb0l0ZW1zLCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlQ29sbGFwc2VBbGxCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydjb2xsYXBzZS1hbGwnLCAnZmEtc29saWQnLCAnZmEteGwnLCAnZmEtYW5nbGUtZG91YmxlLXVwJ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3NldEFsbEl0ZW1zRXhwYW5kZWRTdGF0ZShwcm9qZWN0LnRvZG9JdGVtcywgZmFsc2UpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVBZGRJdGVtQnV0dG9uKCkge1xuICAgICAgICAgICAgICAgIC8vICdBZGQgbmV3IHRvZG8gaXRlbScgYnV0dG9uXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnYWRkLWl0ZW0nLCAnZmEtc29saWQnLCAnZmEteGwnLCAnZmEtcGx1cy1jaXJjbGUnXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhZGRJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHViU3ViLnB1Ymxpc2goJ2FkZEl0ZW0nLCB7IGlzUGVuZGluZzogdHJ1ZSB9KSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBhZGRJdGVtQnV0dG9uO1xuICAgICAgICAgICAgfSAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb250ZW50KCkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlX19wYWdlJyk7XG4gICAgICAgICAgICBjb250ZW50Py5yZXBsYWNlV2l0aChnZW5lcmF0ZUNvbnRlbnQoX2FjdGl2ZVByb2plY3QpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvZG9DYXJkTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgX2dldFByaW9yaXR5Q2xhc3MgPSAocCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoK3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSArUHJpb3JpdHkuSGlnaDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktaGlnaCc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgK1ByaW9yaXR5LkxvdzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktbG93JztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAncHJpb3JpdHktbm9ybWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlVG9kb0NhcmQodG9kb0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYSBkaXYgY29udGFpbmluZyBhIHNpbmdsZSB0b2RvIGl0ZW1cbiAgICAgICAgICAgICAgICAvLyBzaG93aW5nIHRoZSBpdGVtJ3MgYmFzaWMgaW5mby4gSWYgdGhlIGl0ZW0gaGFzIGJlZW4gXG4gICAgICAgICAgICAgICAgLy8gZXhwYW5kZWQsIGRpc3BsYXkgZGV0YWlscy5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvZG9DYXJkID0gY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWyd0b2RvLWNhcmQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0b2RvSXRlbS5pZH0pO1xuICAgICAgICAgICAgICAgIGlmICh0b2RvSXRlbS5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdlRvZG9DYXJkLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZG9uZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbnRhaW5lciBmb3IgYmFzaWMgdG9kbyBpdGVtIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9kb0Jhc2ljID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogZGl2VG9kb0NhcmQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWyd0b2RvLWNhcmRfX2Jhc2ljJ10sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkaXZUb2RvQmFzaWMuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNoZWNrYm94SW5wdXQodG9kb0l0ZW0pKTtcbiAgICAgICAgICAgICAgICBkaXZUb2RvQmFzaWMuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRib3hJbnB1dCh0b2RvSXRlbSwge2ZpZWxkOid0aXRsZSd9KSk7XG4gICAgICAgICAgICAgICAgZGl2VG9kb0Jhc2ljLmFwcGVuZENoaWxkKF9jcmVhdGVEZWxldGVCdXR0b24odG9kb0l0ZW0pKTtcbiAgICAgICAgICAgICAgICBkaXZUb2RvQmFzaWMuYXBwZW5kQ2hpbGQoX2NyZWF0ZUV4cGFuZGVyQnV0dG9uKHRvZG9JdGVtKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRvZG9JdGVtPy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFeHBhbmRlZCBkZXRhaWxzIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZUb2RvRGV0YWlscyA9IF9nZW5lcmF0ZUV4cGFuZGVkVG9kb0l0ZW1Db250ZW50KHRvZG9JdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2VG9kb0NhcmQuYXBwZW5kQ2hpbGQoZGl2VG9kb0RldGFpbHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvSXRlbS5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZUb2RvRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2VG9kb0NhcmQ7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlRXhwYW5kZXJCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycm93ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2V4cGFuZGVyJywgJ2ZhLXNvbGlkJywgJ3Nob3ctb24taG92ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoKHRvZG9JdGVtPy5leHBhbmRlZCkgPyAnZmEtYW5nbGUtdXAnIDogJ2ZhLWFuZ2xlLWRvd24nKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2V4cGFuZENvbGxhcHNlVG9kb0l0ZW0odG9kb0l0ZW0pKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyb3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUNoZWNrYm94SW5wdXQodG9kb0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGNoZWNrYm94IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydjaGVja2JveCcsIF9nZXRQcmlvcml0eUNsYXNzKHRvZG9JdGVtLnByaW9yaXR5KV0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGNoZWNrYm94IGlucHV0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogY2hlY2tib3hDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0b2RvSXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHRvZG9JdGVtLmRvbmVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2JveElucHV0LmNoZWNrZWQgPSB0b2RvSXRlbS5kb25lO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHB1YlN1Yi5wdWJsaXNoKCd0b2dnbGVJdGVtRG9uZScsIHtpZDogdG9kb0l0ZW0uaWR9KSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3hDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZURlbGV0ZUJ1dHRvbih0b2RvSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZGVsZXRlLWl0ZW0nLCAnZmEtc29saWQnLCAnZmEtdHJhc2gtY2FuJywgJ2hpZGUnLCAnc2hvdy1vbi1ob3ZlciddLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHB1YlN1Yi5wdWJsaXNoKCdkZWxldGVJdGVtJywge2lkOiB0b2RvSXRlbS5pZH0pKTsgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2dlbmVyYXRlRXhwYW5kZWRUb2RvSXRlbUNvbnRlbnQodG9kb0l0ZW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb2RvRGV0YWlscyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsndG9kby1jYXJkX19leHBhbmRlZCddLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJpb3JpdHlcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRpdlRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWluZXJXaXRoSWNvbignZXhjbGFtYXRpb24tdHJpYW5nbGUnKSk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgdGV4dENvbnRlbnQ6ICdQcmlvcml0eTonfSkpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVQcmlvcml0eUlucHV0KHRvZG9JdGVtLCB7ZmllbGQ6J3ByaW9yaXR5J30pKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCB0ZXh0Q29udGVudDogdG9kb0l0ZW0uZ2V0UHJpb3JpdHlTdHJpbmcoKX0pKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuXG4gICAgICAgICAgICAgICAgLy8gRHVlIGRhdGVcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZGl2VG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbnRhaW5lcldpdGhJY29uKCdjYWxlbmRhci1hbHQnKSk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlRGF0ZUlucHV0KHRvZG9JdGVtLCB7ZmllbGQ6J2R1ZURhdGUnfSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZGl2VG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbnRhaW5lcldpdGhJY29uKCdpbmZvLWNpcmNsZScpKTtcbiAgICAgICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0Ym94SW5wdXQodG9kb0l0ZW0sIHtmaWVsZDonZGVzY3JpcHRpb24nfSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gTm90ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBub3Rlc0NvbnRhaW5lciA9IGRpdlRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWluZXJXaXRoSWNvbignY2xpcGJvYXJkJykpO1xuICAgICAgICAgICAgICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0Ym94SW5wdXQodG9kb0l0ZW0sIHtmaWVsZDonbm90ZXMnfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdlRvZG9EZXRhaWxzO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZVByaW9yaXR5SW5wdXQodG9kb0l0ZW0sIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5Q2xhc3MgPSBgcHJpb3JpdHktJHt0b2RvSXRlbS5nZXRQcmlvcml0eVN0cmluZygpLnRvTG93ZXJDYXNlKCl9YDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZUlucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b2RvSXRlbS5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW3ByaW9yaXR5Q2xhc3NdLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4gcHViU3ViLnB1Ymxpc2goJ2NoYW5nZUl0ZW0nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiB0b2RvSXRlbS5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJncy5maWVsZF06IGUudGFyZ2V0LnZhbHVlfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByYW5nZUlucHV0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVEYXRlSW5wdXQodG9kb0l0ZW0sIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdG9kb0l0ZW0uZHVlRGF0ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICghX2FjdGl2ZVByb2plY3Q/LmlzUGVuZGluZ1RvZG9JdGVtKHRvZG9JdGVtKSAmJiB0b2RvSXRlbVthcmdzLmZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdG9kb0l0ZW1bYXJncy5maWVsZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gcHViU3ViLnB1Ymxpc2goJ2NoYW5nZUl0ZW0nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IHRvZG9JdGVtLmlkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyZ3MuZmllbGRdOiBlLnRhcmdldC52YWx1ZX0pKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlQ29udGFpbmVyV2l0aEljb24oZmFJY29uTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRpdiB3aXRoIHRoZSBzcGVjaWZpZWQgRkEgY2hhcmFjdGVyIGljb24gYXMgaXRzIGNoaWxkIGVsZW1lbnQuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6WydkZXRhaWwtY29udGFpbmVyJ119KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydmYS1zb2xpZCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZmEtJHtmYUljb25OYW1lfWBdfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZVRleHRib3hJbnB1dCh0b2RvSXRlbSwgYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3RleHRhcmVhJyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGFyZ3MuZmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogW2FyZ3MuZmllbGRdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghX2FjdGl2ZVByb2plY3Q/LmlzUGVuZGluZ1RvZG9JdGVtKHRvZG9JdGVtKSAmJiB0b2RvSXRlbVthcmdzLmZpZWxkXSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRvZG9JdGVtW2FyZ3MuZmllbGRdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiBwdWJTdWIucHVibGlzaCgnY2hhbmdlSXRlbScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IHRvZG9JdGVtLmlkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcmdzLmZpZWxkXTogZS50YXJnZXQudmFsdWV9KSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBfY3JlYXRlVGV4dGJveElucHV0KHRvZG9JdGVtLCBhcmdzKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyOiBhcmdzLmZpZWxkLFxuICAgICAgICAgICAgLy8gICAgICAgICBjbGFzc0xpc3Q6IFthcmdzLmZpZWxkXSxcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICBpZiAoIV9hY3RpdmVQcm9qZWN0Py5pc1BlbmRpbmdUb2RvSXRlbSh0b2RvSXRlbSkgJiYgdG9kb0l0ZW1bYXJncy5maWVsZF0pIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5wdXQudmFsdWUgPSB0b2RvSXRlbVthcmdzLmZpZWxkXTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gcHViU3ViLnB1Ymxpc2goJ2NoYW5nZUl0ZW0nLCBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiB0b2RvSXRlbS5pZCwgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJncy5maWVsZF06IGUudGFyZ2V0LnZhbHVlfSkpO1xuXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlVG9kb0NhcmRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvZG9DYXJkID0gdG9kb0NhcmRNb2R1bGUuZ2VuZXJhdGVUb2RvQ2FyZCh0b2RvSXRlbSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRvZG9JdGVtLmlkKT8ucmVwbGFjZVdpdGgobmV3VG9kb0NhcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdlbmVyYXRlQ29udGVudCxcbiAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnQsXG4gICAgICAgICAgICB1cGRhdGVUb2RvSXRlbSxcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gX2FjdGl2ZVByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBfYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9kb0xpc3QucHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX2FjdGl2ZVByb2plY3QgPSB0b2RvTGlzdC5wcm9qZWN0c1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZ2hsaWdodCB0aGUgYWN0aXZlIHByb2plY3QgaW4gdGhlIHNpZGViYXI6XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdG9kb0xpc3QucHJvamVjdHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Byb2plY3RzW2ldLmlkfWApPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7X2FjdGl2ZVByb2plY3QuaWR9YCk/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IHByb2plY3RzRGlzcGxheU1vZHVsZS5nZW5lcmF0ZVByb2plY3RJdGVtKHByb2plY3QpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHByb2plY3QuaWQpPy5yZXBsYWNlV2l0aChuZXdQcm9qZWN0RWxlbWVudCk7XG5cbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChfYWN0aXZlUHJvamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2V4cGFuZENvbGxhcHNlVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICAgICAgdG9kb0l0ZW0uZXhwYW5kZWQgPSAhdG9kb0l0ZW0uZXhwYW5kZWQ7XG5cbiAgICAgICAgaXRlbXNEaXNwbGF5TW9kdWxlLnVwZGF0ZVRvZG9JdGVtKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZW5lcmF0ZUNvbnRlbnQsXG4gICAgICAgIHVwZGF0ZVByb2plY3QsXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QsXG4gICAgICAgIGdldEFjdGl2ZVByb2plY3QsXG4gICAgICAgIHVwZGF0ZVRvZG9JdGVtOiBpdGVtc0Rpc3BsYXlNb2R1bGUudXBkYXRlVG9kb0l0ZW0sXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQ6IGl0ZW1zRGlzcGxheU1vZHVsZS51cGRhdGVDb250ZW50LFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBmb290ZXJEaXNwbGF5TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsIFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3NpdGVfX2Zvb3RlciddLFxuICAgICAgICB9KTsgICAgXG4gICAgICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBwYXJlbnQ6IGZvb3RlciwgXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZm9vdGVyX19pbm5lciddLFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHBhcmVudDogZm9vdGVyQ29udGVudCxcbiAgICAgICAgICAgIHRleHRDb250ZW50OiAnQ29weXJpZ2h0IMKpIDIwMjIgRGF2aWQgUmF2YW5iYWtoc2gnLFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY29uc3QgYSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnYScsXG4gICAgICAgICAgICBwYXJlbnQ6IGZvb3RlckNvbnRlbnQsXG4gICAgICAgIH0pO1xuICAgICAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3JhdmFuYmFrJztcbiAgICAgICAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBcbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdpJyxcbiAgICAgICAgICAgIHBhcmVudDogYSxcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydmYS1icmFuZHMnLCAnZmEtZ2l0aHViLXNxdWFyZScsICdmYS0yeCddLFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZW5lcmF0ZUZvb3RlcixcbiAgICB9XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHJlbmRlclNpdGUocHJvamVjdHMpIHtcbiAgICAgICAgLy8gUmVuZGVyIHRoZSBzaXRlIChpbmNsdWRpbmcgaGVhZGVyIGFuZCBmb290ZXIpLlxuXG4gICAgICAgIGRlbGV0ZUFsbENoaWxkcmVuKCdkaXYjc2l0ZScpO1xuXG4gICAgICAgIGNvbnN0IHNpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjc2l0ZScpO1xuICAgICAgICBzaXRlPy5hcHBlbmRDaGlsZChoZWFkZXJEaXNwbGF5TW9kdWxlLmdlbmVyYXRlSGVhZGVyKCkpO1xuICAgICAgICBzaXRlPy5hcHBlbmRDaGlsZChjb250ZW50RGlzcGxheU1vZHVsZS5nZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpKTsgLy8sIGFjdGl2ZVByb2plY3QpKTtcbiAgICAgICAgc2l0ZT8uYXBwZW5kQ2hpbGQoZm9vdGVyRGlzcGxheU1vZHVsZS5nZW5lcmF0ZUZvb3RlcigpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250ZW50KHByb2plY3RzKSB7XG4gICAgICAgIC8vIFJlbmRlciBzaXRlIGNvbnRlbnQgKHNpZGViYXIgYW5kIHRvZG8gbGlzdCBpdGVtcykuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVfX2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZENvbnRlbnQgPSBjb250ZW50RGlzcGxheU1vZHVsZS5nZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMsIGNvbnRlbnREaXNwbGF5TW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgICAgIGNvbnRlbnQ/LnJlcGxhY2VXaXRoKHVwZGF0ZWRDb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJTaXRlLFxuICAgICAgICB1cGRhdGVDb250ZW50LFxuICAgICAgICB1cGRhdGVUb2RvSXRlbTogY29udGVudERpc3BsYXlNb2R1bGUudXBkYXRlVG9kb0l0ZW0sXG4gICAgICAgIHVwZGF0ZVRvZG9JdGVtczogY29udGVudERpc3BsYXlNb2R1bGUudXBkYXRlQ29udGVudCxcbiAgICAgICAgdXBkYXRlUHJvamVjdDogY29udGVudERpc3BsYXlNb2R1bGUudXBkYXRlUHJvamVjdCxcbiAgICAgICAgZ2V0QWN0aXZlUHJvamVjdDogY29udGVudERpc3BsYXlNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCxcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdDogY29udGVudERpc3BsYXlNb2R1bGUuc2V0QWN0aXZlUHJvamVjdCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZGlzcGxheSB9OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGFyZ3MpIHtcbiAgICBpZiAoIWFyZ3MudGFnKSByZXR1cm47XG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJncy50YWcpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXJncykpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTGlzdCcpIHtcbiAgICAgICAgICAgIGVsW2tleV0uYWRkKC4uLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICBhcmdzLnBhcmVudD8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFsbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgLy8gRGVsZXRlIGFsbCBjaGlsZHJlbiBvZiB0aGUgc2VsZWN0ZWQgZWxlbWVudCBcbiAgICAvLyBhbmQgcmV0dXJuIHRoZSBzZWxlY3RlZCBlbGVtZW50LlxuXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICB3aGlsZSAocGFyZW50Py5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudD8ucmVtb3ZlQ2hpbGQocGFyZW50Py5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQ7XG59IiwibGV0IHN1YnNjcmliZXJzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XG4gICAgaWYgKCFzdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1YnNjcmliZXJzW2V2ZW50XS5mb3JFYWNoKHN1YnNjcmliZXJDYWxsYmFjayA9PiB7XG4gICAgICAgIHN1YnNjcmliZXJDYWxsYmFjayhkYXRhKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXN1YnNjcmliZXJzW2V2ZW50XSkge1xuICAgICAgICBzdWJzY3JpYmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0LCB2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuY29uc3QgUHJpb3JpdHkgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEhpZ2g6IDEsXHJcbiAgICBOb3JtYWw6IDAsXHJcbiAgICBMb3c6IC0xLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgPSBQcmlvcml0eS5Ob3JtYWwsIG5vdGVzLCBkb25lID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGlkID0gJ2l0ZW0tJyArIHV1aWR2NCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByaW9yaXR5U3RyaW5nKCkge1xyXG4gICAgICAgIHN3aXRjaCAoK3RoaXMucHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgY2FzZSBQcmlvcml0eS5Mb3c6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0xvdyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBQcmlvcml0eS5IaWdoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdIaWdoJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdOb3JtYWwnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGRvbmUsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBnZXRQcmlvcml0eVN0cmluZyxcclxuICAgICAgICBub3RlcyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJpb3JpdHksIGNyZWF0ZVRvZG9JdGVtIH0iLCJpbXBvcnQgKiBhcyBwcm9qZWN0TW9kdWxlIGZyb20gJy4vdG9kby1wcm9qZWN0JztcclxuaW1wb3J0ICogYXMgaXRlbU1vZHVsZSBmcm9tICcuL3RvZG8taXRlbSc7XHJcblxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX0lEID0gJ3RvZG9saXN0LWQ5Y2EwMGNlLTY1NzQtNDJiZC1iZjJlLWRlMjI0NDRmNGZmNSc7XHJcblxyXG5jb25zdCB0b2RvTGlzdCA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TW9kdWxlLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElEKSB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gcHJvamVjdHMuZmluZEluZGV4KChwKSA9PiBwLmlkID09PSBwcm9qZWN0SUQgKTtcclxuXHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3Qgbm90IGZvdW5kISBGdW5jdGlvbjogJHtkZWxldGVQcm9qZWN0Lm5hbWV9YCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoaWR4ID4gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHByb2plY3RzLmZpbmRJbmRleChwID0+IHAuaWQgPT09IGRhdGEuaWQpO1xyXG5cclxuICAgICAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBub3QgZm91bmQhIEZ1bmN0aW9uOiAke2NoYW5nZVByb2plY3QubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvamVjdHNbaWR4XSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0SUQpIHtcclxuICAgICAgICBjb25zdCBpZHggPSBwcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBwcm9qZWN0SUQpO1xyXG5cclxuICAgICAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBub3QgZm91bmQhIEZ1bmN0aW9uOiAke2dldFByb2plY3QubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcHJvamVjdHNbaWR4XTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb2RvSXRlbShwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgaXNQZW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKCFwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IG5vdCBmb3VuZCFgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBpdGVtTW9kdWxlLmNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3QuYWRkVG9kb0l0ZW0odG9kb0l0ZW0sIGlzUGVuZGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVG9kb0l0ZW1Eb25lKHByb2plY3QsIGlkKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBwcm9qZWN0LmdldFRvZG9JdGVtKGlkKTtcclxuICAgICAgICB0b2RvSXRlbS5kb25lID0gIXRvZG9JdGVtLmRvbmU7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VUb2RvSXRlbShwcm9qZWN0LCBtb2RpZmllZFRvZG9JdGVtKSB7XHJcbiAgICAgICAgaWYgKCFwcm9qZWN0IHx8ICFtb2RpZmllZFRvZG9JdGVtLmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0IG9yIHRvZG8gaXRlbSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0LmNoYW5nZVRvZG9JdGVtKG1vZGlmaWVkVG9kb0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9JdGVtKHByb2plY3QsIGlkKSB7XHJcbiAgICAgICAgaWYgKCFwcm9qZWN0IHx8ICFpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBvciB0b2RvIGl0ZW0gbm90IGZvdW5kLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdC5kZWxldGVUb2RvSXRlbShpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9qZWN0cyxcclxuICAgICAgICBhZGRQcm9qZWN0LFxyXG4gICAgICAgIGRlbGV0ZVByb2plY3QsXHJcbiAgICAgICAgY2hhbmdlUHJvamVjdCxcclxuICAgICAgICBnZXRQcm9qZWN0LFxyXG4gICAgICAgIGFkZFRvZG9JdGVtLFxyXG4gICAgICAgIGNoYW5nZVRvZG9JdGVtLFxyXG4gICAgICAgIGRlbGV0ZVRvZG9JdGVtLFxyXG4gICAgICAgIHRvZ2dsZVRvZG9JdGVtRG9uZSxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKExPQ0FMX1NUT1JBR0VfSUQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9JRCwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IGdldFN0b3JlZFByb2plY3RzKCk7XHJcbiAgICBpZiAoIXByb2plY3RzIHx8IHByb2plY3RzPy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBzdG9yZWQgZGF0YTpcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBMb2FkIHByb2plY3Q6XHJcbiAgICAgICAgbGV0IHByb2ogPSB0b2RvTGlzdC5hZGRQcm9qZWN0KCcnKTsgLy8gY3JlYXRlIGFuIGVtcHR5IHByb2plY3Qgb2JqZWN0XHJcbiAgICAgICAgcHJvai5pZCA9IHByb2plY3RzW2ldLmlkO1xyXG4gICAgICAgIHByb2oucHJvamVjdE5hbWUgPSBwcm9qZWN0c1tpXS5wcm9qZWN0TmFtZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2FkIHRoZSB0b2RvIGl0ZW1zIGluIHRoaXMgcHJvamVjdDpcclxuICAgICAgICBsZXQgaXRlbXMgPSBwcm9qZWN0c1tpXS50b2RvSXRlbXM7XHJcbiAgICAgICAgaWYgKCFpdGVtcyB8fCBpdGVtcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IGl0ZW1zLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbU1vZHVsZS5jcmVhdGVUb2RvSXRlbSgpO1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIGl0ZW1zW2pdKTtcclxuICAgICAgICAgICAgcHJvai5hZGRUb2RvSXRlbShpdGVtLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JlZFByb2plY3RzKCkge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0lEKTtcclxuXHJcbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHN0b3JhZ2UpO1xyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XHJcbiAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHRvZG9MaXN0LFxyXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlLFxyXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcclxufTsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQsIHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH0gZnJvbSAnLi90b2RvLWl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgaWQgPSAncHJvai0nICsgdXVpZHY0KCk7XHJcbiAgICBcclxuICAgIGxldCB0b2RvSXRlbXMgPSBbXTtcclxuICAgIGxldCBfcGVuZGluZ1RvZG9JdGVtOyAvLyB0b2RvIGl0ZW0gYWRkZWQgdGhyb3VnaCBVSSBhbmQgbm90IHlldCBjb25maXJtZWQgYnkgdXNlclxyXG4gICAgXHJcbiAgICBjb25zdCBfZ2V0VG9kb0l0ZW1JbmRleCA9IChpZCkgPT4gdG9kb0l0ZW1zLmZpbmRJbmRleChlbCA9PiBlbC5pZCA9PT0gaWQpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBhZGRUb2RvSXRlbSh0b2RvSXRlbSwgaXNQZW5kaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzUGVuZGluZykge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGl0ZW0gaXMgdG8gYmUgY29uZmlybWVkIGJ5IHRoZSB1c2VyXHJcbiAgICAgICAgICAgIC8vIGJlZm9yZSBpdCBpcyBhZGRlZCB0byB0aGUgcHJvamVjdCBsaXN0LlxyXG4gICAgICAgICAgICBfcGVuZGluZ1RvZG9JdGVtID0gdG9kb0l0ZW07XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9kb0l0ZW1zLnVuc2hpZnQodG9kb0l0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvZG9JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVRvZG9JdGVtKG1vZGlmaWVkVG9kb0l0ZW0pIHtcclxuICAgICAgICBsZXQgaXRlbSA9IGdldFRvZG9JdGVtKG1vZGlmaWVkVG9kb0l0ZW0uaWQpO1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSXRlbSAke21vZGlmaWVkVG9kb0l0ZW0/LmlkfSBub3QgZm91bmQgaW4gJHt0aGlzLnByb2plY3ROYW1lfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbW9kaWZpZWRUb2RvSXRlbSk7XHJcblxyXG4gICAgICAgIGlmIChpc1BlbmRpbmdUb2RvSXRlbShpdGVtKSkge1xyXG4gICAgICAgICAgICBjb25maXJtUGVuZGluZ1RvZG9JdGVtKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbShpZCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gX3BlbmRpbmdUb2RvSXRlbT8uaWQpIHtcclxuICAgICAgICAgICAgLy8gQ2FuY2VsIHRoZSBwZW5kaW5nIHRvZG8gaXRlbS5cclxuICAgICAgICAgICAgX3BlbmRpbmdUb2RvSXRlbSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlkeCA9IF9nZXRUb2RvSXRlbUluZGV4KGlkKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaWR4IDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVG9kbyBpdGVtIG5vdCBmb3VuZCFgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoaWR4ID4gLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRvZG9JdGVtKGlkKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0b2RvSXRlbXMuZmluZChlbCA9PiBlbC5pZCA9PT0gaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghaXRlbSAmJiBpZCA9PT0gX3BlbmRpbmdUb2RvSXRlbT8uaWQpIHtcclxuICAgICAgICAgICAgaXRlbSA9IF9wZW5kaW5nVG9kb0l0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzUGVuZGluZ1RvZG9JdGVtKHRvZG9JdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9JdGVtPy5pZCA9PT0gX3BlbmRpbmdUb2RvSXRlbT8uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGVuZGluZ1RvZG9JdGVtKCkge1xyXG4gICAgICAgIHJldHVybiBfcGVuZGluZ1RvZG9JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbmZpcm1QZW5kaW5nVG9kb0l0ZW0oKSB7XHJcbiAgICAgICAgaWYgKCFfcGVuZGluZ1RvZG9JdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBwZW5kaW5nIHRvZG8gaXRlbSB0byBjb25maXJtIScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRUb2RvSXRlbShfcGVuZGluZ1RvZG9JdGVtLCBmYWxzZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgX3BlbmRpbmdUb2RvSXRlbSA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgdG9kb0l0ZW1zLFxyXG4gICAgICAgIHByb2plY3ROYW1lLFxyXG4gICAgICAgIGFkZFRvZG9JdGVtLFxyXG4gICAgICAgIGNoYW5nZVRvZG9JdGVtLFxyXG4gICAgICAgIGRlbGV0ZVRvZG9JdGVtLFxyXG4gICAgICAgIGdldFRvZG9JdGVtLFxyXG4gICAgICAgIGdldFBlbmRpbmdUb2RvSXRlbSxcclxuICAgICAgICBpc1BlbmRpbmdUb2RvSXRlbSxcclxuICAgICAgICBjb25maXJtUGVuZGluZ1RvZG9JdGVtLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0ICogYXMgcHViU3ViIGZyb20gJy4vcHVic3ViJztcclxuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XHJcbmltcG9ydCB7IHRvZG9MaXN0LCBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b2RvLWxpc3RcIjtcclxuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tIFwiLi90b2RvLWl0ZW1cIjtcclxuXHJcbmNvbnN0IGNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBpbml0ID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2FkZFByb2plY3QnLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheS5zZXRBY3RpdmVQcm9qZWN0KHRvZG9MaXN0LmFkZFByb2plY3QoZGF0YS5wcm9qZWN0TmFtZSkpO1xyXG5cclxuICAgICAgICAgICAgX3VwZGF0ZUNvbnRlbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVQcm9qZWN0JywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdG9kb0xpc3QuZGVsZXRlUHJvamVjdChkYXRhLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfdXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3NlbGVjdFByb2plY3QnLCBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgIGRpc3BsYXkuc2V0QWN0aXZlUHJvamVjdCh0b2RvTGlzdC5nZXRQcm9qZWN0KGRhdGEuaWQpKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW1zKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2FkZEl0ZW0nLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvaiA9IGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpO1xyXG4gICAgICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qLCAnJywgJycsIERhdGUubm93KCksIFByaW9yaXR5Lk5vcm1hbCwgJycsIGRhdGEuaXNQZW5kaW5nKVxyXG5cclxuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUb2RvSXRlbXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnY29uZmlybUl0ZW0nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpPy5jb25maXJtUGVuZGluZ1RvZG9JdGVtKCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRvZG9JdGVtcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVJdGVtJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmRlbGV0ZVRvZG9JdGVtKGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpLCBkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW1zKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2NoYW5nZUl0ZW0nLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgdG9kb0xpc3QuY2hhbmdlVG9kb0l0ZW0oZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCksIGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUb2RvSXRlbShkaXNwbGF5LmdldEFjdGl2ZVByb2plY3QoKS5nZXRUb2RvSXRlbShkYXRhLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2NoYW5nZVByb2plY3QnLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgdG9kb0xpc3QuY2hhbmdlUHJvamVjdChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlUHJvamVjdCh0b2RvTGlzdC5nZXRQcm9qZWN0KGRhdGEuaWQpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgndG9nZ2xlSXRlbURvbmUnLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSB0b2RvTGlzdC50b2dnbGVUb2RvSXRlbURvbmUoZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCksIGRhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUb2RvSXRlbSh0b2RvSXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNhdmUgdGhlIGVudGlyZSB0b2RvIGxpc3QgdG8gbG9jYWwgc3RvcmFnZSB3aGVuIGFueVxyXG4gICAgICAgIC8vIG9mIHRoZSBiZWxvdyBldmVudHMgYXJlIGZpcmVkOlxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2FkZFByb2plY3QnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2RlbGV0ZVByb2plY3QnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2FkZEl0ZW0nLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2NvbmZpcm1JdGVtJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVJdGVtJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VJdGVtJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VQcm9qZWN0Jywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCd0b2dnbGVJdGVtRG9uZScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIF91cGRhdGVDb250ZW50KCkge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBzaWRlYmFyIGFuZCBwYWdlLlxyXG4gICAgICAgIGRpc3BsYXkudXBkYXRlQ29udGVudCh0b2RvTGlzdC5wcm9qZWN0cywgZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRlc3REYXRhID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0xpc3QuYWRkUHJvamVjdCgnVG8gRG8nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnZmluaXNoIHRoaXMgcHJvamVjdCcsICd0aGlzIHByb2plY3QgaXMgYSB0b2RvIGxpc3QnLCAnMjAyMi0xMC0wOScsIFByaW9yaXR5LkhpZ2gsICdjaGVjayB0aGUgYm94IHdoZW4gZG9uZScpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhZGQgYnV0dG9uIHRvIGV4cGFuZC9jb2xsYXBzZSBhbGwgdG9kbyBpdGVtcycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhZGQgYm94IHNoYWRvd3MnLCAnY3Jvc3Mgb2ZmJywgJycsIFByaW9yaXR5Lkxvdyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGVkaXRpbmcgcHJvamVjdCBuYW1lcycsICdwcm9qZWN0JywgJycsIFByaW9yaXR5Lk5vcm1hbCwnaW4tcGxhY2UgZWRpdGluZz8nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgZWRpdGluZyB0b2RvIGl0ZW0gcHJvcGVydGllcycsICdpbi1wbGFjZSBlZGl0aW5nJywgJycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdtb3ZlIGNvbXBsZXRlZCBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBsaXN0JywgJ2FuaW1hdGVkPycsICcnLCBQcmlvcml0eS5Ob3JtYWwsICdzaG91bGQgdGhpcyBiZSBhdXRvbWF0aWM/Jyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ3RoaXMgaXRlbSBkYXRlIGlzIHRoZSBsYXRlc3QnLCAnJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IHNvcnRpbmcgb2YgdG9kbyBpdGVtcycsICcnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgZGVsZXRpbmcgdG9kbyBpdGVtcycsICcnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgYWRkaW5nIHByb2plY3RzJywgJycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhbGxvdyBkZWxldGluZyBwcm9qZWN0cycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhbGxvdyBjdXN0b20gc29ydCBvZiBwcm9qZWN0cycsICcnLCAnMjAyMi0xMi0xNicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RHcm9jZXJpZXMgPSB0b2RvTGlzdC5hZGRQcm9qZWN0KCdHcm9jZXJpZXMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdiYW5hbmFzJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnbmVjdGFyaW5lcycsICcnLCBudWxsLCBQcmlvcml0eS5Mb3cpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ2FwcGxlcycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ3BsYW50YWlucycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ2Zsb3VyJywgJ2dsdXRlbiBmcmVlJywgJycsIFByaW9yaXR5LkhpZ2gsICdQcmVzaWRlbnRcXCdzIENob2ljZScpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ21pbGsnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdjcmVhbScpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ2J1dHRlcicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ2VnZ3MnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdiYWNvbicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ2FnZWQgY2hlZGRhcicpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0R2FyZGVuID0gdG9kb0xpc3QuYWRkUHJvamVjdCgnR2FyZGVuJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdhcmRlbiwgJ3RyYW5zcGxhbnQgbGV0dHVjZScpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHYXJkZW4sICd3YXRlciB0b21hdG8gcGxhbnRzJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdhcmRlbiwgJ3dhdGVyIGNoZXJyeSB0cmVlcycpO1xyXG5cclxuICAgICAgICBjb25zdCB5YXJkID0gdG9kb0xpc3QuYWRkUHJvamVjdCgnWWFyZCcpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHlhcmQsICdtb3cgbGF3bicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHlhcmQsICdsZXZlbCBsYXduJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0oeWFyZCwgJ3BsYW50IGdyYXNzIHNlZWQnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbSh5YXJkLCAnc2V0IHVwIHNwcmlua2xlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVUZXN0RGF0YSwgXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSB0cnVlO1xyXG5cclxuaWYgKHVzZUxvY2FsU3RvcmFnZSkge1xyXG4gICAgY29uc3QgbG9hZGVkRnJvbUxvY2FsU3RvcmFnZSA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIFxyXG4gICAgaWYgKCFsb2FkZWRGcm9tTG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vIHRvZG8gbGlzdCBkYXRhIGZvdW5kIGluIGxvY2FsIHN0b3JhZ2UuJyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBfREVGQVVMVF9QUk9KRUNUX05BTUUgPSAnVG8gRG8nO1xyXG4gICAgICAgIGRpc3BsYXkuc2V0QWN0aXZlUHJvamVjdCh0b2RvTGlzdC5hZGRQcm9qZWN0KF9ERUZBVUxUX1BST0pFQ1RfTkFNRSkuaWQpO1xyXG4gICAgfVxyXG59IFxyXG5lbHNlIHtcclxuICAgIGNvbnRyb2xsZXIuY3JlYXRlVGVzdERhdGEoKTtcclxuICAgIGlmICh0b2RvTGlzdC5wcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZGlzcGxheS5zZXRBY3RpdmVQcm9qZWN0KHRvZG9MaXN0LnByb2plY3RzWzBdKTtcclxuICAgIH1cclxufVxyXG5cclxuZGlzcGxheS5yZW5kZXJTaXRlKHRvZG9MaXN0LnByb2plY3RzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=