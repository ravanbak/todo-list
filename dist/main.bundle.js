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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-content-background: hsl(60, 100%, 96%);\n    --color-todo-card-background: hsl(60, 100%, 92%);\n    --color-todo-card-hover-background: hsl(46, 100%, 82%);\n    --color-todo-card-details-background: hsl(60, 100%, 95%);\n    --color-todo-card-border: hsl(49, 18%, 77%);\n    --color-todo-card-done: hsl(100%, 30%, 30%);\n    --color-todo-card-done-background: hsl(0, 0%, 86%);\n    --color-todo-card-checkbox-background: #009900;\n    --color-input-focussed-background: rgb(211, 237, 253);\n    --color-active-project: #ffbf7b;\n    --color-priority-high: red;\n    --color-priority-normal: #55EE44;\n    --color-priority-low: #eedd00;\n    --box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n    --size-icon: 2.5ch;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: hsl(184, 9%, 75%);\n}\n\n.site__content * {\n    box-sizing: border-box;\n}\n\n.hide {\n    display: none;\n}\n\n.site__header {\n    display: flex;    \n    justify-content: center;\n    font-size: 2em;\n    color:whitesmoke;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center -40px;\n    background-size: 1200px;\n    background-attachment: fixed;\n    height: 160px;\n}\n\n.site__content {\n    display: flex;\n    margin: auto;\n    background: var(--color-content-background);\n    min-height: 300px;\n    max-width: 1200px;\n}\n\n.site__sidebar {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-right: solid 1px var(--color-todo-card-border);\n    font-size: 2rem;\n    font-weight: bold;\n    text-align: center;\n    min-width: 250px;\n    max-width: 250px;\n}\n\n.site__sidebar .projects-container {\n    font-size: 1rem;\n    padding: 25px 5px 30px 5px;\n    margin: 20px 0;\n    background-color: var(--color-todo-card-background);\n    border: solid 1px var(--color-todo-card-border);\n    border-radius: 6px;\n    align-items: flex-end;\n\n}\n\n.site__sidebar .project-container {\n    display: flex;\n    padding: 10px 25px;\n    border-radius: 6px;\n    align-items: right;\n    justify-content: right;\n    text-align: right;\n}\n\n.site__sidebar .edit-project {\n    margin-right: 15px;\n}\n\n.site__sidebar .delete-project {\n    margin-right: 5px;\n}\n\n.projects-container input[type=text] {\n    size: 30;\n    font-size: 1rem;\n    text-align: right;\n    background-color: var(--color-input-focussed-background);\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n\n.site__sidebar .project-container.active {\n    background-color: var(--color-active-project);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-list .controls {\n    display: flex;\n    margin-bottom: 10px;\n    position: sticky;\n}\n\ndiv.controls {\n    padding: 15px 0;\n    border-radius: 6px;\n}\n\n.todo-list .add-item {\n    color: rgb(42, 64, 64);\n    margin: 10px;\n}\n\n.todo-list .expand-all {\n    color: rgb(42, 64, 64);\n    margin: 10px;    \n}\n\n.todo-list .collapse-all {\n    color: rgb(42, 64, 64);\n    margin: 10px 10px 10px auto;\n}\n\n.todo-card input[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 4rem;\n    border-radius: 2rem;\n    height: 0.5rem;\n}\n\n.todo-card input.priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card input.priority-normal {\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card input.priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card input[type=text] {\n    background-color: inherit;\n    border-radius: 3px;\n    border: none;\n    transition: 0.2s;\n    size: 10;\n}\n\n.todo-card input[type=text]:focus {\n    background-color: var(--color-input-focussed-background);\n    /* color: white; */\n    outline: none;\n    size: 5;\n}\n\n.todo-card input[type=text]:focus::placeholder {\n    color: gray;\n}\n\n.todo-card input[type=date] {\n    background-color: inherit;\n    border: none;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-todo-card-background);\n    border-radius: 6px;\n    /* border: 1px solid var(--color-todo-card-border); */\n    margin: 6px;\n    box-shadow: 0px 0px 4px #00000033;\n}\n\n.show-on-hover\n{\n    display: block;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.todo-card:hover .show-on-hover,\n.project-container:hover .show-on-hover {\n    opacity: 0.333;\n}\n\n.project-container .show-on-hover:hover,\n.todo-card .show-on-hover:hover {\n    opacity: 1;\n}\n\n.todo-card__basic {\n    display: flex;\n    padding: 5px;\n    align-items: center;\n}\n\n.todo-card__basic input[type=text] {\n    padding-left: 10px;\n    flex-grow: 1;\n    font-size: inherit;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.todo-card__expanded {\n    display: flex;\n    flex-direction: column;\n    margin: 10px 3ch 5px 3ch;\n    padding: 5px;\n    border-radius: 6px;\n}\n\n.todo-card__expanded {\n    background-color: var(--color-todo-card-details-background);\n}\n\n.todo-card:hover {\n    background-color: var(--color-todo-card-hover-background);\n}\n\n.todo-card.todo-done,\n.todo-card__expanded.todo-done {\n    background-color: var(--color-todo-card-done-background);\n}\n\ndiv.detail-container {\n    display: flex;\n    margin-top: 10px;\n    font-size: 0.8rem;\n}\n\ndiv.detail-container input[type=text] {\n    flex-grow: 1;\n}\n\ndiv.detail-container:first-child {\n    margin-top: 0;\n}\n\ndiv.detail-container > .fa-solid {\n    width: 4ch;\n    text-align: center;\n    color: rgb(42, 64, 64);\n}\n\n.checkbox input {\n    width: 2.2ch;\n    height: 2.2ch;\n    accent-color: var(--color-todo-card-checkbox-background);\n    outline: none;\n}\n\n.todo-card .checkbox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 2.5ch;\n    min-height: 2.5ch;\n    border-radius: 3px;\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card .priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card .priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card .delete-item,\n.delete-project {\n    padding: 0 6px 0 6px;\n    color: red;\n}\n\n.todo-card .expander {\n    padding: 0 0 0 6px;\n}\n\n.todo-done .title {\n    text-decoration: line-through;\n}\n\n.site__page {\n    margin: 0;\n    padding: 20px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 100%;\n    /* height: calc(100vh - 160px - 40px - 36px); */\n    height: calc(100vh - 160px - 40px - 16px);\n}\n\n.site__footer {\n    display: flex;    \n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    background: hsl(184, 9%, 75%);\n    max-width: 1200px;\n}\n\n.footer__inner {\n    display: flex;\n    padding: 2px;\n    align-items: center;\n    justify-content: center;\n}\n\n.site__footer a {\n    text-decoration: none;\n}\n\n.site__footer i {\n    color: rgb(42, 64, 64);\n    margin-left: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --color-content-background: hsl(60, 100%, 96%);\n    --color-todo-card-background: hsl(60, 100%, 92%);\n    --color-todo-card-hover-background: hsl(46, 100%, 82%);\n    --color-todo-card-details-background: hsl(60, 100%, 95%);\n    --color-todo-card-border: hsl(49, 18%, 77%);\n    --color-todo-card-done: hsl(100%, 30%, 30%);\n    --color-todo-card-done-background: hsl(0, 0%, 86%);\n    --color-todo-card-checkbox-background: #009900;\n    --color-input-focussed-background: rgb(211, 237, 253);\n    --color-active-project: #ffbf7b;\n    --color-priority-high: red;\n    --color-priority-normal: #55EE44;\n    --color-priority-low: #eedd00;\n    --box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n    --size-icon: 2.5ch;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: hsl(184, 9%, 75%);\n}\n\n.site__content * {\n    box-sizing: border-box;\n}\n\n.hide {\n    display: none;\n}\n\n.site__header {\n    display: flex;    \n    justify-content: center;\n    font-size: 2em;\n    color:whitesmoke;\n    background-image: url('./assets/hero.png');\n    background-repeat: no-repeat;\n    background-position: center -40px;\n    background-size: 1200px;\n    background-attachment: fixed;\n    height: 160px;\n}\n\n.site__content {\n    display: flex;\n    margin: auto;\n    background: var(--color-content-background);\n    min-height: 300px;\n    max-width: 1200px;\n}\n\n.site__sidebar {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-right: solid 1px var(--color-todo-card-border);\n    font-size: 2rem;\n    font-weight: bold;\n    text-align: center;\n    min-width: 250px;\n    max-width: 250px;\n}\n\n.site__sidebar .projects-container {\n    font-size: 1rem;\n    padding: 25px 5px 30px 5px;\n    margin: 20px 0;\n    background-color: var(--color-todo-card-background);\n    border: solid 1px var(--color-todo-card-border);\n    border-radius: 6px;\n    align-items: flex-end;\n\n}\n\n.site__sidebar .project-container {\n    display: flex;\n    padding: 10px 25px;\n    border-radius: 6px;\n    align-items: right;\n    justify-content: right;\n    text-align: right;\n}\n\n.site__sidebar .edit-project {\n    margin-right: 15px;\n}\n\n.site__sidebar .delete-project {\n    margin-right: 5px;\n}\n\n.projects-container input[type=text] {\n    size: 30;\n    font-size: 1rem;\n    text-align: right;\n    background-color: var(--color-input-focussed-background);\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n\n.site__sidebar .project-container.active {\n    background-color: var(--color-active-project);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-list .controls {\n    display: flex;\n    margin-bottom: 10px;\n    position: sticky;\n}\n\ndiv.controls {\n    padding: 15px 0;\n    border-radius: 6px;\n}\n\n.todo-list .add-item {\n    color: rgb(42, 64, 64);\n    margin: 10px;\n}\n\n.todo-list .expand-all {\n    color: rgb(42, 64, 64);\n    margin: 10px;    \n}\n\n.todo-list .collapse-all {\n    color: rgb(42, 64, 64);\n    margin: 10px 10px 10px auto;\n}\n\n.todo-card input[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 4rem;\n    border-radius: 2rem;\n    height: 0.5rem;\n}\n\n.todo-card input.priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card input.priority-normal {\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card input.priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card input[type=text] {\n    background-color: inherit;\n    border-radius: 3px;\n    border: none;\n    transition: 0.2s;\n    size: 10;\n}\n\n.todo-card input[type=text]:focus {\n    background-color: var(--color-input-focussed-background);\n    /* color: white; */\n    outline: none;\n    size: 5;\n}\n\n.todo-card input[type=text]:focus::placeholder {\n    color: gray;\n}\n\n.todo-card input[type=date] {\n    background-color: inherit;\n    border: none;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-todo-card-background);\n    border-radius: 6px;\n    /* border: 1px solid var(--color-todo-card-border); */\n    margin: 6px;\n    box-shadow: 0px 0px 4px #00000033;\n}\n\n.show-on-hover\n{\n    display: block;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.todo-card:hover .show-on-hover,\n.project-container:hover .show-on-hover {\n    opacity: 0.333;\n}\n\n.project-container .show-on-hover:hover,\n.todo-card .show-on-hover:hover {\n    opacity: 1;\n}\n\n.todo-card__basic {\n    display: flex;\n    padding: 5px;\n    align-items: center;\n}\n\n.todo-card__basic input[type=text] {\n    padding-left: 10px;\n    flex-grow: 1;\n    font-size: inherit;\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.todo-card__expanded {\n    display: flex;\n    flex-direction: column;\n    margin: 10px 3ch 5px 3ch;\n    padding: 5px;\n    border-radius: 6px;\n}\n\n.todo-card__expanded {\n    background-color: var(--color-todo-card-details-background);\n}\n\n.todo-card:hover {\n    background-color: var(--color-todo-card-hover-background);\n}\n\n.todo-card.todo-done,\n.todo-card__expanded.todo-done {\n    background-color: var(--color-todo-card-done-background);\n}\n\ndiv.detail-container {\n    display: flex;\n    margin-top: 10px;\n    font-size: 0.8rem;\n}\n\ndiv.detail-container input[type=text] {\n    flex-grow: 1;\n}\n\ndiv.detail-container:first-child {\n    margin-top: 0;\n}\n\ndiv.detail-container > .fa-solid {\n    width: 4ch;\n    text-align: center;\n    color: rgb(42, 64, 64);\n}\n\n.checkbox input {\n    width: 2.2ch;\n    height: 2.2ch;\n    accent-color: var(--color-todo-card-checkbox-background);\n    outline: none;\n}\n\n.todo-card .checkbox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 2.5ch;\n    min-height: 2.5ch;\n    border-radius: 3px;\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card .priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card .priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card .delete-item,\n.delete-project {\n    padding: 0 6px 0 6px;\n    color: red;\n}\n\n.todo-card .expander {\n    padding: 0 0 0 6px;\n}\n\n.todo-done .title {\n    text-decoration: line-through;\n}\n\n.site__page {\n    margin: 0;\n    padding: 20px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 100%;\n    /* height: calc(100vh - 160px - 40px - 36px); */\n    height: calc(100vh - 160px - 40px - 16px);\n}\n\n.site__footer {\n    display: flex;    \n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    background: hsl(184, 9%, 75%);\n    max-width: 1200px;\n}\n\n.footer__inner {\n    display: flex;\n    padding: 2px;\n    align-items: center;\n    justify-content: center;\n}\n\n.site__footer a {\n    text-decoration: none;\n}\n\n.site__footer i {\n    color: rgb(42, 64, 64);\n    margin-left: 20px;\n}"],"sourceRoot":""}]);
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
                addProjectButton.appendChild((0,_dom_util__WEBPACK_IMPORTED_MODULE_1__.createElement)({tag: 'div', classList: ['fa-solid', 'fa-plus-circle']}));
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
                    tag: 'input',
                    type: 'text',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkRBQW1CO0FBQ3hDLFFBQVEsNERBQW9CO0FBQzVCLFFBQVEsNERBQW9CO0FBQzVCLFFBQVEsNERBQW9CO0FBQzVCLFFBQVEsNERBQW9CO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrREFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXdCLENBQUMsMkRBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBd0I7QUFDaEMsUUFBUSw4REFBd0IsQ0FBQyw0REFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esd0RBQWtCLENBQUMseURBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzEzNjciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLXV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaGVyby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItY29udGVudC1iYWNrZ3JvdW5kOiBoc2woNjAsIDEwMCUsIDk2JSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTIlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtaG92ZXItYmFja2dyb3VuZDogaHNsKDQ2LCAxMDAlLCA4MiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kZXRhaWxzLWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTUlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyOiBoc2woNDksIDE4JSwgNzclKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtZG9uZTogaHNsKDEwMCUsIDMwJSwgMzAlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtZG9uZS1iYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDg2JSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWNoZWNrYm94LWJhY2tncm91bmQ6ICMwMDk5MDA7XFxuICAgIC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZDogcmdiKDIxMSwgMjM3LCAyNTMpO1xcbiAgICAtLWNvbG9yLWFjdGl2ZS1wcm9qZWN0OiAjZmZiZjdiO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LWhpZ2g6IHJlZDtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1ub3JtYWw6ICM1NUVFNDQ7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktbG93OiAjZWVkZDAwO1xcbiAgICAtLWJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIC0tc2l6ZS1pY29uOiAyLjVjaDtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4NCwgOSUsIDc1JSk7XFxufVxcblxcbi5zaXRlX19jb250ZW50ICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaXRlX19oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjp3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLTQwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4uc2l0ZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXIpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDI1cHggNXB4IDMwcHggNXB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZWRpdC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgc2l6ZTogMzA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LWZvY3Vzc2VkLWJhY2tncm91bmQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUtcHJvamVjdCk7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1saXN0IC5jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbmRpdi5jb250cm9scyB7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udG9kby1saXN0IC5hZGQtaXRlbSB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCAuZXhwYW5kLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDsgICAgXFxufVxcblxcbi50b2RvLWxpc3QgLmNvbGxhcHNlLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggYXV0bztcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1oaWdoKTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dC5wcmlvcml0eS1ub3JtYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBzaXplOiAxMDtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZCk7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgc2l6ZTogNTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7ICovXFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAjMDAwMDAwMzM7XFxufVxcblxcbi5zaG93LW9uLWhvdmVyXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciAuc2hvdy1vbi1ob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIgLnNob3ctb24taG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjMzMztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5zaG93LW9uLWhvdmVyOmhvdmVyLFxcbi50b2RvLWNhcmQgLnNob3ctb24taG92ZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kby1jYXJkX19iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY2FyZF9fYmFzaWMgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYudG9kby1jYXJkX19leHBhbmRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweCAzY2ggNXB4IDNjaDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50b2RvLWNhcmRfX2V4cGFuZGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWRldGFpbHMtYmFja2dyb3VuZCk7XFxufVxcblxcbi50b2RvLWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi50b2RvLWNhcmQudG9kby1kb25lLFxcbi50b2RvLWNhcmRfX2V4cGFuZGVkLnRvZG8tZG9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1kb25lLWJhY2tncm91bmQpO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyID4gLmZhLXNvbGlkIHtcXG4gICAgd2lkdGg6IDRjaDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXQge1xcbiAgICB3aWR0aDogMi4yY2g7XFxuICAgIGhlaWdodDogMi4yY2g7XFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWNoZWNrYm94LWJhY2tncm91bmQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1jYXJkIC5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDIuNWNoO1xcbiAgICBtaW4taGVpZ2h0OiAyLjVjaDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktaGlnaCk7XFxufVxcblxcbi50b2RvLWNhcmQgLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi50b2RvLWNhcmQgLmRlbGV0ZS1pdGVtLFxcbi5kZWxldGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jYXJkIC5leHBhbmRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcXG59XFxuXFxuLnRvZG8tZG9uZSAudGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnNpdGVfX3BhZ2Uge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHggLSA0MHB4IC0gMzZweCk7ICovXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4IC0gNDBweCAtIDE2cHgpO1xcbn1cXG5cXG4uc2l0ZV9fZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgICAgXFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgxODQsIDklLCA3NSUpO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmZvb3Rlcl9faW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2l0ZV9fZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaXRlX19mb290ZXIgaSB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxzREFBc0Q7SUFDdEQsd0RBQXdEO0lBQ3hELDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0Ms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eEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLHlEQUF5RDtBQUM3RDs7QUFFQTs7SUFFSSx3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHdEQUF3RDtJQUN4RCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLCtDQUErQztJQUMvQyx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWNvbG9yLWNvbnRlbnQtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5NiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1iYWNrZ3JvdW5kOiBoc2woNjAsIDEwMCUsIDkyJSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWhvdmVyLWJhY2tncm91bmQ6IGhzbCg0NiwgMTAwJSwgODIlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtZGV0YWlscy1iYWNrZ3JvdW5kOiBoc2woNjAsIDEwMCUsIDk1JSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcjogaHNsKDQ5LCAxOCUsIDc3JSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWRvbmU6IGhzbCgxMDAlLCAzMCUsIDMwJSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWRvbmUtYmFja2dyb3VuZDogaHNsKDAsIDAlLCA4NiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1jaGVja2JveC1iYWNrZ3JvdW5kOiAjMDA5OTAwO1xcbiAgICAtLWNvbG9yLWlucHV0LWZvY3Vzc2VkLWJhY2tncm91bmQ6IHJnYigyMTEsIDIzNywgMjUzKTtcXG4gICAgLS1jb2xvci1hY3RpdmUtcHJvamVjdDogI2ZmYmY3YjtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1oaWdoOiByZWQ7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktbm9ybWFsOiAjNTVFRTQ0O1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LWxvdzogI2VlZGQwMDtcXG4gICAgLS1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAtLXNpemUtaWNvbjogMi41Y2g7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDklLCA3NSUpO1xcbn1cXG5cXG4uc2l0ZV9fY29udGVudCAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2l0ZV9faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9oZXJvLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLTQwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4uc2l0ZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXIpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDI1cHggNXB4IDMwcHggNXB4O1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuXFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZWRpdC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgc2l6ZTogMzA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LWZvY3Vzc2VkLWJhY2tncm91bmQpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUtcHJvamVjdCk7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1saXN0IC5jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbmRpdi5jb250cm9scyB7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udG9kby1saXN0IC5hZGQtaXRlbSB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCAuZXhwYW5kLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDsgICAgXFxufVxcblxcbi50b2RvLWxpc3QgLmNvbGxhcHNlLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggYXV0bztcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1oaWdoKTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dC5wcmlvcml0eS1ub3JtYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBzaXplOiAxMDtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZCk7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgc2l6ZTogNTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7ICovXFxuICAgIG1hcmdpbjogNnB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAjMDAwMDAwMzM7XFxufVxcblxcbi5zaG93LW9uLWhvdmVyXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciAuc2hvdy1vbi1ob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIgLnNob3ctb24taG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjMzMztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5zaG93LW9uLWhvdmVyOmhvdmVyLFxcbi50b2RvLWNhcmQgLnNob3ctb24taG92ZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kby1jYXJkX19iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tY2FyZF9fYmFzaWMgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYudG9kby1jYXJkX19leHBhbmRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweCAzY2ggNXB4IDNjaDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi50b2RvLWNhcmRfX2V4cGFuZGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWRldGFpbHMtYmFja2dyb3VuZCk7XFxufVxcblxcbi50b2RvLWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi50b2RvLWNhcmQudG9kby1kb25lLFxcbi50b2RvLWNhcmRfX2V4cGFuZGVkLnRvZG8tZG9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1kb25lLWJhY2tncm91bmQpO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyID4gLmZhLXNvbGlkIHtcXG4gICAgd2lkdGg6IDRjaDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXQge1xcbiAgICB3aWR0aDogMi4yY2g7XFxuICAgIGhlaWdodDogMi4yY2g7XFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWNoZWNrYm94LWJhY2tncm91bmQpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby1jYXJkIC5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDIuNWNoO1xcbiAgICBtaW4taGVpZ2h0OiAyLjVjaDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktaGlnaCk7XFxufVxcblxcbi50b2RvLWNhcmQgLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi50b2RvLWNhcmQgLmRlbGV0ZS1pdGVtLFxcbi5kZWxldGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jYXJkIC5leHBhbmRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcXG59XFxuXFxuLnRvZG8tZG9uZSAudGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnNpdGVfX3BhZ2Uge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHggLSA0MHB4IC0gMzZweCk7ICovXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4IC0gNDBweCAtIDE2cHgpO1xcbn1cXG5cXG4uc2l0ZV9fZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgICAgXFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgxODQsIDklLCA3NSUpO1xcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuLmZvb3Rlcl9faW5uZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2l0ZV9fZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zaXRlX19mb290ZXIgaSB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCAqIGFzIHB1YlN1YiBmcm9tICcuL3B1YnN1Yic7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBkZWxldGVBbGxDaGlsZHJlbiB9IGZyb20gJy4vZG9tLXV0aWwnO1xuaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuL3RvZG8taXRlbSc7XG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gJy4vdG9kby1saXN0JztcblxuLypcblNpdGUgbGF5b3V0OlxuIEhlYWRlclxuID09PT09PT09PT09XG4gQ29udGVudCAoUHJvamVjdHMsIEl0ZW1zKVxuID09PT09PT09PT09XG4gRm9vdGVyXG4qL1xuXG5jb25zdCBoZWFkZXJEaXNwbGF5TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JyB9KTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpdGVfX2hlYWRlcicpO1xuXG4gICAgICAgIGNvbnN0IGRpdlRpdGxlID0gY3JlYXRlRWxlbWVudCh7IFxuICAgICAgICAgICAgdGFnOiAnZGl2JywgXG4gICAgICAgICAgICBwYXJlbnQ6IGhlYWRlciwgXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsgJ2hlcm8tdGV4dCcgXSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdoMScsXG4gICAgICAgICAgICBwYXJlbnQ6IGRpdlRpdGxlLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICAnVG9kb29kbGknLFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZW5lcmF0ZUhlYWRlcixcbiAgICB9O1xufSkoKTtcblxuY29uc3QgY29udGVudERpc3BsYXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IF9hY3RpdmVQcm9qZWN0O1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3RzLCBhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBzaWRlYmFyIGFuZCB0aGUgYWN0aXZlIHByb2plY3QncyB0b2RvIGxpc3QgY29udGVudCBcbiAgICAgICAgLy8gYW5kIHJldHVybiBhIGRpdiBjb250YWluaW5nIGJvdGguXG5cbiAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBhY3RpdmVQcm9qZWN0ID8gYWN0aXZlUHJvamVjdCA6IHByb2plY3RzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2l0ZUNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6IFsnY29udGFpbmVyJywgJ3NpdGVfX2NvbnRlbnQnXX0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIHByb2plY3RzXG4gICAgICAgIHNpdGVDb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGlzcGxheU1vZHVsZS5nZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMsIF9hY3RpdmVQcm9qZWN0KSk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW1zXG4gICAgICAgIHNpdGVDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1zRGlzcGxheU1vZHVsZS5nZW5lcmF0ZUNvbnRlbnQoX2FjdGl2ZVByb2plY3QpKTtcblxuICAgICAgICByZXR1cm4gc2l0ZUNvbnRlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdHNEaXNwbGF5TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NMaXN0OiBbJ3NpdGVfX3NpZGViYXInXSB9KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNpZGViYXIgPSBfYWRkU2lkZWJhckVsZW1lbnQoKTtcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoX2FkZFByb2plY3RMaXN0KCkpO1xuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChfYWRkQWRkUHJvamVjdEJ1dHRvbigpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNpZGViYXJDb250YWluZXI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9hZGRTaWRlYmFyRWxlbWVudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydjb250YWluZXInXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdQcm9qZWN0cycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9hZGRQcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIGNsYXNzTGlzdDogWydwcm9qZWN0cy1jb250YWluZXInXX0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVQcm9qZWN0SXRlbShwcm9qZWN0c1tpXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2FkZEFkZFByb2plY3RCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIGNsYXNzTGlzdDogWydhZGQtcHJvamVjdCddfSk7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6IFsnZmEtc29saWQnLCAnZmEtcGx1cy1jaXJjbGUnXX0pKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHViU3ViLnB1Ymxpc2goJ2FkZFByb2plY3QnLCB7cHJvamVjdE5hbWU6ICdOZXcgUHJvamVjdCd9KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZFByb2plY3RCdXR0b247XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RJdGVtKHByb2plY3QpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbiBlbGVtZW50IGRpc3BsYXlpbmcgdGhlIHByb2plY3QgbmFtZSBhbmQgXG4gICAgICAgICAgICAvLyBidXR0b25zIGZvciBtYW5pcHVsYXRpbmcgdGhlIHByb2plY3QuXG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLCBcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsncHJvamVjdC1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVEZWxldGVCdXR0b24oKSk7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVFZGl0QnV0dG9uKCkpO1xuXG4gICAgICAgICAgICBjb25zdCB7IGRpdlByb2pOYW1lLCBpbnB1dFByb2pOYW1lIH0gPSBfY3JlYXRlUHJvamVjdE5hbWVFbGVtZW50cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBoaWxpZ2h0IHRoZSBhY3RpdmUgcHJvamVjdFxuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IF9hY3RpdmVQcm9qZWN0Py5pZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHB1YlN1Yi5wdWJsaXNoKCdzZWxlY3RQcm9qZWN0JywgeyBpZDogcHJvamVjdC5pZCB9KSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlUHJvamVjdE5hbWVFbGVtZW50cygpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdHdvIGVsZW1lbnRzIGZvciBwcm9qZWN0IG5hbWUsIGEgZGl2IGVsZW1lbnQgdG8gZGlzcGxheSBcbiAgICAgICAgICAgICAgICAvLyB0aGUgbmFtZSwgYW5kIGEgdGV4dCBpbnB1dCBlbGVtZW50IHRvIGVkaXQgdGhlIHByb2plY3QgbmFtZS5cbiAgICAgICAgICAgICAgICAvLyBPbmx5IG9uZSBvZiB0aGVzZSBlbGVtZW50cyB3aWxsIGJlIGFjdGl2ZSBhdCBhbnkgZ2l2ZW4gdGltZS5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZQcm9qTmFtZSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHByb2plY3RDb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBwcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsncHJvamVjdC1uYW1lJ10sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFByb2pOYW1lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJzxwcm9qZWN0IG5hbWU+JyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydwcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBpbnB1dCBldmVudHM6XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IF9hY2NlcHRQcm9qZWN0TmFtZShlKSk7XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGUgPT4gX2ZpbmlzaEVkaXRQcm9qZWN0TmFtZShlKSk7XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBfaGFuZGxlSW5wdXRLZXlQcmVzcyhlKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZGl2UHJvak5hbWUsIGlucHV0UHJvak5hbWUgfTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEtleVByZXNzKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS52YWx1ZSA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50Py5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2VkaXRQcm9qZWN0TmFtZShlKSB7XG4gICAgICAgICAgICAgICAgZGl2UHJvak5hbWUucmVwbGFjZVdpdGgoaW5wdXRQcm9qTmFtZSk7XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS5mb2N1cygpOyBcbiAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLnNlbGVjdCgpOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2ZpbmlzaEVkaXRQcm9qZWN0TmFtZShlKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRQcm9qTmFtZS5yZXBsYWNlV2l0aChkaXZQcm9qTmFtZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gX2FjY2VwdFByb2plY3ROYW1lKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIHByb2plY3QgbmFtZSEnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKCdjaGFuZ2VQcm9qZWN0JywgeyBpZDogcHJvamVjdC5pZCwgcHJvamVjdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWxldGVCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydkZWxldGUtcHJvamVjdCcsICdmYS1zb2xpZCcsICdmYS10cmFzaC1jYW4nLCAnaGlkZScsICdzaG93LW9uLWhvdmVyJ10sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHB1YlN1Yi5wdWJsaXNoKCdkZWxldGVQcm9qZWN0JywgeyBpZDogcHJvamVjdC5pZCB9KSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlQnV0dG9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlRWRpdEJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydlZGl0LXByb2plY3QnLCAnZmEtc29saWQnLCAnZmEtcGVuJywgJ2hpZGUnLCAnc2hvdy1vbi1ob3ZlciddLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gX2VkaXRQcm9qZWN0TmFtZShlKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdEJ1dHRvbjsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQsXG4gICAgICAgICAgICBnZW5lcmF0ZVByb2plY3RJdGVtLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgaXRlbXNEaXNwbGF5TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBTb3J0T3JkZXIgPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFRpdGxlOiAwLFxuICAgICAgICAgICAgUHJpb3JpdHk6IDEsXG4gICAgICAgICAgICBEYXRlOiAyLFxuICAgICAgICAgICAgQ3VzdG9tOiAzXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcHJpbWFyeVNvcnRGaWVsZCA9IFNvcnRPcmRlci5Qcmlvcml0eTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFNvcnREaXJlY3Rpb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIEFzY2VuZGluZzogMSxcbiAgICAgICAgICAgIERlc2NlbmRpbmc6IC0xLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHNvcnREaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLkRlc2NlbmRpbmc7XG5cbiAgICAgICAgZnVuY3Rpb24gX2dldFNvcnRlZFRvZG9JdGVtcyhwcm9qZWN0KSB7XG4gICAgICAgICAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHByb2plY3QudG9kb0l0ZW1zO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHByaW1hcnlTb3J0RmllbGQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFNvcnRPcmRlci5UaXRsZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09IFNvcnREaXJlY3Rpb24uQXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLnRpdGxlID4gYi50aXRsZSA/IDEgOiAtMSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS50aXRsZSA+IGIudGl0bGUgPyAtMSA6IDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTb3J0T3JkZXIuUHJpb3JpdHk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSBTb3J0RGlyZWN0aW9uLkFzY2VuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgU29ydE9yZGVyLkRhdGU6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSBTb3J0RGlyZWN0aW9uLkFzY2VuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gY29tcGFyZUFzYyhhLmR1ZURhdGUsIGIuZHVlRGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGNvbXBhcmVBc2MoYi5kdWVEYXRlLCBhLmR1ZURhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KHByb2plY3QpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBhIGRpdiBjb250YWluaW5nIHRoZSBhY3RpdmUgcHJvamVjdCdzIHRvZG8gbGlzdC5cblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIGNsYXNzTGlzdDogWyAnc2l0ZV9fcGFnZScgXX0pO1xuICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7dGFnOidkaXYnLCBwYXJlbnQ6Y29udGVudCwgY2xhc3NMaXN0OlsnY29udGFpbmVyJywgJ3RvZG8tbGlzdCddfSk7XG5cbiAgICAgICAgICAgIC8vIENvbnRhaW5lciBmb3IgcGFnZSBjb250cm9sc1xuICAgICAgICAgICAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgIHBhcmVudDogdG9kb0l0ZW1zQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydjb250cm9scyddXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbWFpbiBjb250cm9sIGJ1dHRvbnMgZm9yIHRvZG8gbGlzdFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVBZGRJdGVtQnV0dG9uKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVDb2xsYXBzZUFsbEJ1dHRvbigpKTtcbiAgICAgICAgICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlRXhwYW5kQWxsQnV0dG9uKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGEgcGVuZGluZyB0b2RvIGl0ZW0gKGl0ZW0gYWRkZWQgdGhyb3VnaCBVSSBidXQgbm90IFxuICAgICAgICAgICAgICAgIC8vIHlldCBhY2NlcHRlZCBieSB0aGUgdXNlciksIGRpc3BsYXkgaXQgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nVG9kb0l0ZW0gPSBwcm9qZWN0LmdldFBlbmRpbmdUb2RvSXRlbSgpO1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nVG9kb0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9DYXJkTW9kdWxlLmdlbmVyYXRlVG9kb0NhcmQocGVuZGluZ1RvZG9JdGVtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgYWxsIHRvZG8gaXRlbXMgaW4gdGhlIHByb2plY3QuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb0l0ZW1zID0gX2dldFNvcnRlZFRvZG9JdGVtcyhwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvSXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NhcmRNb2R1bGUuZ2VuZXJhdGVUb2RvQ2FyZCh0b2RvSXRlbXNbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfc2V0QWxsSXRlbXNFeHBhbmRlZFN0YXRlKHRvZG9JdGVtcywgZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICB0b2RvSXRlbXMuZm9yRWFjaChlbCA9PiBlbC5leHBhbmRlZCA9IGV4cGFuZGVkKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdXBkYXRlQ29udGVudCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlRXhwYW5kQWxsQnV0dG9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZXhwYW5kLWFsbCcsICdmYS1zb2xpZCcsICdmYS14bCcsICdmYS1hbmdsZS1kb3VibGUtZG93biddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9zZXRBbGxJdGVtc0V4cGFuZGVkU3RhdGUocHJvamVjdC50b2RvSXRlbXMsIHRydWUpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVDb2xsYXBzZUFsbEJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2NvbGxhcHNlLWFsbCcsICdmYS1zb2xpZCcsICdmYS14bCcsICdmYS1hbmdsZS1kb3VibGUtdXAnXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfc2V0QWxsSXRlbXNFeHBhbmRlZFN0YXRlKHByb2plY3QudG9kb0l0ZW1zLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUFkZEl0ZW1CdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgLy8gJ0FkZCBuZXcgdG9kbyBpdGVtJyBidXR0b25cbiAgICAgICAgICAgICAgICBjb25zdCBhZGRJdGVtQnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydhZGQtaXRlbScsICdmYS1zb2xpZCcsICdmYS14bCcsICdmYS1wbHVzLWNpcmNsZSddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwdWJTdWIucHVibGlzaCgnYWRkSXRlbScsIHsgaXNQZW5kaW5nOiB0cnVlIH0pKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZEl0ZW1CdXR0b247XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbnRlbnQoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGVfX3BhZ2UnKTtcbiAgICAgICAgICAgIGNvbnRlbnQ/LnJlcGxhY2VXaXRoKGdlbmVyYXRlQ29udGVudChfYWN0aXZlUHJvamVjdCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9kb0NhcmRNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBfZ2V0UHJpb3JpdHlDbGFzcyA9IChwKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICgrcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICtQcmlvcml0eS5IaWdoOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1oaWdoJztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSArUHJpb3JpdHkuTG93OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1sb3cnO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdwcmlvcml0eS1ub3JtYWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVUb2RvQ2FyZCh0b2RvSXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBhIGRpdiBjb250YWluaW5nIGEgc2luZ2xlIHRvZG8gaXRlbVxuICAgICAgICAgICAgICAgIC8vIHNob3dpbmcgdGhlIGl0ZW0ncyBiYXNpYyBpbmZvLiBJZiB0aGUgaXRlbSBoYXMgYmVlbiBcbiAgICAgICAgICAgICAgICAvLyBleHBhbmRlZCwgZGlzcGxheSBkZXRhaWxzLlxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9kb0NhcmQgPSBjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3RvZG8tY2FyZCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRvZG9JdGVtLmlkfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG9JdGVtLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2VG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgndG9kby1kb25lJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGFpbmVyIGZvciBiYXNpYyB0b2RvIGl0ZW0gZWxlbWVudHNcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb2RvQmFzaWMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBkaXZUb2RvQ2FyZCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3RvZG8tY2FyZF9fYmFzaWMnXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRpdlRvZG9CYXNpYy5hcHBlbmRDaGlsZChfY3JlYXRlQ2hlY2tib3hJbnB1dCh0b2RvSXRlbSkpO1xuICAgICAgICAgICAgICAgIGRpdlRvZG9CYXNpYy5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dGJveElucHV0KHRvZG9JdGVtLCB7ZmllbGQ6J3RpdGxlJ30pKTtcbiAgICAgICAgICAgICAgICBkaXZUb2RvQmFzaWMuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlbGV0ZUJ1dHRvbih0b2RvSXRlbSkpO1xuICAgICAgICAgICAgICAgIGRpdlRvZG9CYXNpYy5hcHBlbmRDaGlsZChfY3JlYXRlRXhwYW5kZXJCdXR0b24odG9kb0l0ZW0pKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodG9kb0l0ZW0/LmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4cGFuZGVkIGRldGFpbHMgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvZG9EZXRhaWxzID0gX2dlbmVyYXRlRXhwYW5kZWRUb2RvSXRlbUNvbnRlbnQodG9kb0l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBkaXZUb2RvQ2FyZC5hcHBlbmRDaGlsZChkaXZUb2RvRGV0YWlscyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9JdGVtLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdlRvZG9EZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZG9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgIHJldHVybiBkaXZUb2RvQ2FyZDtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVFeHBhbmRlckJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZXhwYW5kZXInLCAnZmEtc29saWQnLCAnc2hvdy1vbi1ob3ZlciddLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgodG9kb0l0ZW0/LmV4cGFuZGVkKSA/ICdmYS1hbmdsZS11cCcgOiAnZmEtYW5nbGUtZG93bicpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfZXhwYW5kQ29sbGFwc2VUb2RvSXRlbSh0b2RvSXRlbSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlQ2hlY2tib3hJbnB1dCh0b2RvSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgY2hlY2tib3ggY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2NoZWNrYm94JywgX2dldFByaW9yaXR5Q2xhc3ModG9kb0l0ZW0ucHJpb3JpdHkpXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgY2hlY2tib3ggaW5wdXQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveElucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBjaGVja2JveENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRvZG9JdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogdG9kb0l0ZW0uZG9uZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrYm94SW5wdXQuY2hlY2tlZCA9IHRvZG9JdGVtLmRvbmU7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gcHViU3ViLnB1Ymxpc2goJ3RvZ2dsZUl0ZW1Eb25lJywge2lkOiB0b2RvSXRlbS5pZH0pKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlRGVsZXRlQnV0dG9uKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydkZWxldGUtaXRlbScsICdmYS1zb2xpZCcsICdmYS10cmFzaC1jYW4nLCAnaGlkZScsICdzaG93LW9uLWhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHViU3ViLnB1Ymxpc2goJ2RlbGV0ZUl0ZW0nLCB7aWQ6IHRvZG9JdGVtLmlkfSkpOyBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidXR0b247XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfZ2VuZXJhdGVFeHBhbmRlZFRvZG9JdGVtQ29udGVudCh0b2RvSXRlbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvZG9EZXRhaWxzID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWyd0b2RvLWNhcmRfX2V4cGFuZGVkJ10sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcmlvcml0eVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gZGl2VG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbnRhaW5lcldpdGhJY29uKCdleGNsYW1hdGlvbi10cmlhbmdsZScpKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCB0ZXh0Q29udGVudDogJ1ByaW9yaXR5Oid9KSk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByaW9yaXR5SW5wdXQodG9kb0l0ZW0sIHtmaWVsZDoncHJpb3JpdHknfSkpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIHRleHRDb250ZW50OiB0b2RvSXRlbS5nZXRQcmlvcml0eVN0cmluZygpfSkpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBEdWUgZGF0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkaXZUb2RvRGV0YWlscy5hcHBlbmRDaGlsZChfY3JlYXRlQ29udGFpbmVyV2l0aEljb24oJ2NhbGVuZGFyLWFsdCcpKTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVEYXRlSW5wdXQodG9kb0l0ZW0sIHtmaWVsZDonZHVlRGF0ZSd9KSk7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkaXZUb2RvRGV0YWlscy5hcHBlbmRDaGlsZChfY3JlYXRlQ29udGFpbmVyV2l0aEljb24oJ2luZm8tY2lyY2xlJykpO1xuICAgICAgICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRib3hJbnB1dCh0b2RvSXRlbSwge2ZpZWxkOidkZXNjcmlwdGlvbid9KSk7XG5cbiAgICAgICAgICAgICAgICAvLyBOb3Rlc1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGVzQ29udGFpbmVyID0gZGl2VG9kb0RldGFpbHMuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbnRhaW5lcldpdGhJY29uKCdjbGlwYm9hcmQnKSk7XG4gICAgICAgICAgICAgICAgbm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRib3hJbnB1dCh0b2RvSXRlbSwge2ZpZWxkOidub3Rlcyd9KSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGl2VG9kb0RldGFpbHM7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlUHJpb3JpdHlJbnB1dCh0b2RvSXRlbSwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlDbGFzcyA9IGBwcmlvcml0eS0ke3RvZG9JdGVtLmdldFByaW9yaXR5U3RyaW5nKCkudG9Mb3dlckNhc2UoKX1gO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlSW5wdXQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvZG9JdGVtLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbcHJpb3JpdHlDbGFzc10sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiBwdWJTdWIucHVibGlzaCgnY2hhbmdlSXRlbScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWQ6IHRvZG9JdGVtLmlkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcmdzLmZpZWxkXTogZS50YXJnZXQudmFsdWV9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlSW5wdXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZURhdGVJbnB1dCh0b2RvSXRlbSwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0b2RvSXRlbS5kdWVEYXRlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aXZlUHJvamVjdD8uaXNQZW5kaW5nVG9kb0l0ZW0odG9kb0l0ZW0pICYmIHRvZG9JdGVtW2FyZ3MuZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0b2RvSXRlbVthcmdzLmZpZWxkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiBwdWJTdWIucHVibGlzaCgnY2hhbmdlSXRlbScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogdG9kb0l0ZW0uaWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJncy5maWVsZF06IGUudGFyZ2V0LnZhbHVlfSkpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGVJbnB1dDtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVDb250YWluZXJXaXRoSWNvbihmYUljb25OYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IHdpdGggdGhlIHNwZWNpZmllZCBGQSBjaGFyYWN0ZXIgaWNvbiBhcyBpdHMgY2hpbGQgZWxlbWVudC5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIGNsYXNzTGlzdDpbJ2RldGFpbC1jb250YWluZXInXX0pO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KHt0YWc6ICdkaXYnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZmEtc29saWQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZmEtJHtmYUljb25OYW1lfWBdfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZVRleHRib3hJbnB1dCh0b2RvSXRlbSwgYXJncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogYXJncy5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbYXJncy5maWVsZF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCFfYWN0aXZlUHJvamVjdD8uaXNQZW5kaW5nVG9kb0l0ZW0odG9kb0l0ZW0pICYmIHRvZG9JdGVtW2FyZ3MuZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdG9kb0l0ZW1bYXJncy5maWVsZF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHB1YlN1Yi5wdWJsaXNoKCdjaGFuZ2VJdGVtJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogdG9kb0l0ZW0uaWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyZ3MuZmllbGRdOiBlLnRhcmdldC52YWx1ZX0pKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVRvZG9DYXJkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvQ2FyZCA9IHRvZG9DYXJkTW9kdWxlLmdlbmVyYXRlVG9kb0NhcmQodG9kb0l0ZW0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0b2RvSXRlbS5pZCk/LnJlcGxhY2VXaXRoKG5ld1RvZG9DYXJkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQsXG4gICAgICAgICAgICB1cGRhdGVDb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlVG9kb0l0ZW0sXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9hY3RpdmVQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG9MaXN0LnByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gdG9kb0xpc3QucHJvamVjdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWdobGlnaHQgdGhlIGFjdGl2ZSBwcm9qZWN0IGluIHRoZSBzaWRlYmFyOlxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRvZG9MaXN0LnByb2plY3RzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0c1tpXS5pZH1gKT8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke19hY3RpdmVQcm9qZWN0LmlkfWApPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0c0Rpc3BsYXlNb2R1bGUuZ2VuZXJhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0LmlkKT8ucmVwbGFjZVdpdGgobmV3UHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QoX2FjdGl2ZVByb2plY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9leHBhbmRDb2xsYXBzZVRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgICAgIHRvZG9JdGVtLmV4cGFuZGVkID0gIXRvZG9JdGVtLmV4cGFuZGVkO1xuXG4gICAgICAgIGl0ZW1zRGlzcGxheU1vZHVsZS51cGRhdGVUb2RvSXRlbSh0b2RvSXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVDb250ZW50LFxuICAgICAgICB1cGRhdGVQcm9qZWN0LFxuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICB1cGRhdGVUb2RvSXRlbTogaXRlbXNEaXNwbGF5TW9kdWxlLnVwZGF0ZVRvZG9JdGVtLFxuICAgICAgICB1cGRhdGVDb250ZW50OiBpdGVtc0Rpc3BsYXlNb2R1bGUudXBkYXRlQ29udGVudCxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgZm9vdGVyRGlzcGxheU1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLCBcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydzaXRlX19mb290ZXInXSxcbiAgICAgICAgfSk7ICAgIFxuICAgICAgICBjb25zdCBmb290ZXJDb250ZW50ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgcGFyZW50OiBmb290ZXIsIFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2Zvb3Rlcl9faW5uZXInXSxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBwYXJlbnQ6IGZvb3RlckNvbnRlbnQsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0NvcHlyaWdodCDCqSAyMDIyIERhdmlkIFJhdmFuYmFraHNoJyxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGEgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2EnLFxuICAgICAgICAgICAgcGFyZW50OiBmb290ZXJDb250ZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYXZhbmJhayc7XG4gICAgICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnaScsXG4gICAgICAgICAgICBwYXJlbnQ6IGEsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZmEtYnJhbmRzJywgJ2ZhLWdpdGh1Yi1zcXVhcmUnLCAnZmEtMngnXSxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVGb290ZXIsXG4gICAgfVxufSkoKTtcblxuY29uc3QgZGlzcGxheSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZW5kZXJTaXRlKHByb2plY3RzKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgc2l0ZSAoaW5jbHVkaW5nIGhlYWRlciBhbmQgZm9vdGVyKS5cblxuICAgICAgICBkZWxldGVBbGxDaGlsZHJlbignZGl2I3NpdGUnKTtcblxuICAgICAgICBjb25zdCBzaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3NpdGUnKTtcbiAgICAgICAgc2l0ZT8uYXBwZW5kQ2hpbGQoaGVhZGVyRGlzcGxheU1vZHVsZS5nZW5lcmF0ZUhlYWRlcigpKTtcbiAgICAgICAgc2l0ZT8uYXBwZW5kQ2hpbGQoY29udGVudERpc3BsYXlNb2R1bGUuZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7IC8vLCBhY3RpdmVQcm9qZWN0KSk7XG4gICAgICAgIHNpdGU/LmFwcGVuZENoaWxkKGZvb3RlckRpc3BsYXlNb2R1bGUuZ2VuZXJhdGVGb290ZXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudChwcm9qZWN0cykge1xuICAgICAgICAvLyBSZW5kZXIgc2l0ZSBjb250ZW50IChzaWRlYmFyIGFuZCB0b2RvIGxpc3QgaXRlbXMpLlxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlX19jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZW50ID0gY29udGVudERpc3BsYXlNb2R1bGUuZ2VuZXJhdGVDb250ZW50KHByb2plY3RzLCBjb250ZW50RGlzcGxheU1vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICBjb250ZW50Py5yZXBsYWNlV2l0aCh1cGRhdGVkQ29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyU2l0ZSxcbiAgICAgICAgdXBkYXRlQ29udGVudCxcbiAgICAgICAgdXBkYXRlVG9kb0l0ZW06IGNvbnRlbnREaXNwbGF5TW9kdWxlLnVwZGF0ZVRvZG9JdGVtLFxuICAgICAgICB1cGRhdGVUb2RvSXRlbXM6IGNvbnRlbnREaXNwbGF5TW9kdWxlLnVwZGF0ZUNvbnRlbnQsXG4gICAgICAgIHVwZGF0ZVByb2plY3Q6IGNvbnRlbnREaXNwbGF5TW9kdWxlLnVwZGF0ZVByb2plY3QsXG4gICAgICAgIGdldEFjdGl2ZVByb2plY3Q6IGNvbnRlbnREaXNwbGF5TW9kdWxlLmdldEFjdGl2ZVByb2plY3QsXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3Q6IGNvbnRlbnREaXNwbGF5TW9kdWxlLnNldEFjdGl2ZVByb2plY3QsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChhcmdzKSB7XG4gICAgaWYgKCFhcmdzLnRhZykgcmV0dXJuO1xuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZ3MudGFnKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFyZ3MpKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICAgICAgICBlbFtrZXldLmFkZCguLi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgYXJncy5wYXJlbnQ/LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBbGxDaGlsZHJlbihzZWxlY3Rvcikge1xuICAgIC8vIERlbGV0ZSBhbGwgY2hpbGRyZW4gb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQgXG4gICAgLy8gYW5kIHJldHVybiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cblxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgd2hpbGUgKHBhcmVudD8uZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQ/LnJlbW92ZUNoaWxkKHBhcmVudD8ubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xufSIsImxldCBzdWJzY3JpYmVycyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSkge1xuICAgIGlmICghc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVyc1tldmVudF0uZm9yRWFjaChzdWJzY3JpYmVyQ2FsbGJhY2sgPT4ge1xuICAgICAgICBzdWJzY3JpYmVyQ2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFzdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCwgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IFByaW9yaXR5ID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBIaWdoOiAxLFxyXG4gICAgTm9ybWFsOiAwLFxyXG4gICAgTG93OiAtMSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gUHJpb3JpdHkuTm9ybWFsLCBub3RlcywgZG9uZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBpZCA9ICdpdGVtLScgKyB1dWlkdjQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eVN0cmluZygpIHtcclxuICAgICAgICBzd2l0Y2ggKCt0aGlzLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHkuTG93OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdMb3cnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHkuSGlnaDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTm9ybWFsJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBkb25lLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZ2V0UHJpb3JpdHlTdHJpbmcsXHJcbiAgICAgICAgbm90ZXMsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByaW9yaXR5LCBjcmVhdGVUb2RvSXRlbSB9IiwiaW1wb3J0ICogYXMgcHJvamVjdE1vZHVsZSBmcm9tICcuL3RvZG8tcHJvamVjdCc7XHJcbmltcG9ydCAqIGFzIGl0ZW1Nb2R1bGUgZnJvbSAnLi90b2RvLWl0ZW0nO1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9JRCA9ICd0b2RvbGlzdC1kOWNhMDBjZS02NTc0LTQyYmQtYmYyZS1kZTIyNDQ0ZjRmZjUnO1xyXG5cclxuY29uc3QgdG9kb0xpc3QgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuICAgICAgICBcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJRCkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHByb2plY3RzLmZpbmRJbmRleCgocCkgPT4gcC5pZCA9PT0gcHJvamVjdElEICk7XHJcblxyXG4gICAgICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IG5vdCBmb3VuZCEgRnVuY3Rpb246ICR7ZGVsZXRlUHJvamVjdC5uYW1lfWApO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKGlkeCA+IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0KGRhdGEpIHtcclxuICAgICAgICBjb25zdCBpZHggPSBwcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3Qgbm90IGZvdW5kISBGdW5jdGlvbjogJHtjaGFuZ2VQcm9qZWN0Lm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb2plY3RzW2lkeF0sIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdElEKSB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gcHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElEKTtcclxuXHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3Qgbm90IGZvdW5kISBGdW5jdGlvbjogJHtnZXRQcm9qZWN0Lm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2lkeF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9kb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlzUGVuZGluZykge1xyXG4gICAgICAgIGlmICghcHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBub3QgZm91bmQhYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gaXRlbU1vZHVsZS5jcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG9JdGVtLCBpc1BlbmRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRvZG9JdGVtRG9uZShwcm9qZWN0LCBpZCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gcHJvamVjdC5nZXRUb2RvSXRlbShpZCk7XHJcbiAgICAgICAgdG9kb0l0ZW0uZG9uZSA9ICF0b2RvSXRlbS5kb25lO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVG9kb0l0ZW0ocHJvamVjdCwgbW9kaWZpZWRUb2RvSXRlbSkge1xyXG4gICAgICAgIGlmICghcHJvamVjdCB8fCAhbW9kaWZpZWRUb2RvSXRlbS5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBvciB0b2RvIGl0ZW0gbm90IGZvdW5kLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdC5jaGFuZ2VUb2RvSXRlbShtb2RpZmllZFRvZG9JdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbShwcm9qZWN0LCBpZCkge1xyXG4gICAgICAgIGlmICghcHJvamVjdCB8fCAhaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3Qgb3IgdG9kbyBpdGVtIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3QuZGVsZXRlVG9kb0l0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvamVjdHMsXHJcbiAgICAgICAgYWRkUHJvamVjdCxcclxuICAgICAgICBkZWxldGVQcm9qZWN0LFxyXG4gICAgICAgIGNoYW5nZVByb2plY3QsXHJcbiAgICAgICAgZ2V0UHJvamVjdCxcclxuICAgICAgICBhZGRUb2RvSXRlbSxcclxuICAgICAgICBjaGFuZ2VUb2RvSXRlbSxcclxuICAgICAgICBkZWxldGVUb2RvSXRlbSxcclxuICAgICAgICB0b2dnbGVUb2RvSXRlbURvbmUsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShMT0NBTF9TVE9SQUdFX0lEKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfSUQsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBnZXRTdG9yZWRQcm9qZWN0cygpO1xyXG4gICAgaWYgKCFwcm9qZWN0cyB8fCBwcm9qZWN0cz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgc3RvcmVkIGRhdGE6XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gTG9hZCBwcm9qZWN0OlxyXG4gICAgICAgIGxldCBwcm9qID0gdG9kb0xpc3QuYWRkUHJvamVjdCgnJyk7IC8vIGNyZWF0ZSBhbiBlbXB0eSBwcm9qZWN0IG9iamVjdFxyXG4gICAgICAgIHByb2ouaWQgPSBwcm9qZWN0c1tpXS5pZDtcclxuICAgICAgICBwcm9qLnByb2plY3ROYW1lID0gcHJvamVjdHNbaV0ucHJvamVjdE5hbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTG9hZCB0aGUgdG9kbyBpdGVtcyBpbiB0aGlzIHByb2plY3Q6XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gcHJvamVjdHNbaV0udG9kb0l0ZW1zO1xyXG4gICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSBpdGVtcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1Nb2R1bGUuY3JlYXRlVG9kb0l0ZW0oKTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCBpdGVtc1tqXSk7XHJcbiAgICAgICAgICAgIHByb2ouYWRkVG9kb0l0ZW0oaXRlbSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yZWRQcm9qZWN0cygpIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9JRCk7XHJcblxyXG4gICAgICAgIGlmICghc3RvcmFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlKTtcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xyXG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICB0b2RvTGlzdCxcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSxcclxuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2UsXHJcbn07IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0LCB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvSXRlbSB9IGZyb20gJy4vdG9kby1pdGVtJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IGlkID0gJ3Byb2otJyArIHV1aWR2NCgpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9kb0l0ZW1zID0gW107XHJcbiAgICBsZXQgX3BlbmRpbmdUb2RvSXRlbTsgLy8gdG9kbyBpdGVtIGFkZGVkIHRocm91Z2ggVUkgYW5kIG5vdCB5ZXQgY29uZmlybWVkIGJ5IHVzZXJcclxuICAgIFxyXG4gICAgY29uc3QgX2dldFRvZG9JdGVtSW5kZXggPSAoaWQpID0+IHRvZG9JdGVtcy5maW5kSW5kZXgoZWwgPT4gZWwuaWQgPT09IGlkKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gYWRkVG9kb0l0ZW0odG9kb0l0ZW0sIGlzUGVuZGluZykge1xyXG4gICAgICAgIGlmIChpc1BlbmRpbmcpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBpdGVtIGlzIHRvIGJlIGNvbmZpcm1lZCBieSB0aGUgdXNlclxyXG4gICAgICAgICAgICAvLyBiZWZvcmUgaXQgaXMgYWRkZWQgdG8gdGhlIHByb2plY3QgbGlzdC5cclxuICAgICAgICAgICAgX3BlbmRpbmdUb2RvSXRlbSA9IHRvZG9JdGVtO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtcy51bnNoaWZ0KHRvZG9JdGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VUb2RvSXRlbShtb2RpZmllZFRvZG9JdGVtKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBnZXRUb2RvSXRlbShtb2RpZmllZFRvZG9JdGVtLmlkKTtcclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEl0ZW0gJHttb2RpZmllZFRvZG9JdGVtPy5pZH0gbm90IGZvdW5kIGluICR7dGhpcy5wcm9qZWN0TmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0sIG1vZGlmaWVkVG9kb0l0ZW0pO1xyXG5cclxuICAgICAgICBpZiAoaXNQZW5kaW5nVG9kb0l0ZW0oaXRlbSkpIHtcclxuICAgICAgICAgICAgY29uZmlybVBlbmRpbmdUb2RvSXRlbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oaWQpIHtcclxuICAgICAgICBpZiAoaWQgPT09IF9wZW5kaW5nVG9kb0l0ZW0/LmlkKSB7XHJcbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgcGVuZGluZyB0b2RvIGl0ZW0uXHJcbiAgICAgICAgICAgIF9wZW5kaW5nVG9kb0l0ZW0gPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpZHggPSBfZ2V0VG9kb0l0ZW1JbmRleChpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFRvZG8gaXRlbSBub3QgZm91bmQhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2RvSXRlbXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKGlkeCA+IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUb2RvSXRlbShpZCkge1xyXG4gICAgICAgIGxldCBpdGVtID0gdG9kb0l0ZW1zLmZpbmQoZWwgPT4gZWwuaWQgPT09IGlkKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWl0ZW0gJiYgaWQgPT09IF9wZW5kaW5nVG9kb0l0ZW0/LmlkKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBfcGVuZGluZ1RvZG9JdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc1BlbmRpbmdUb2RvSXRlbSh0b2RvSXRlbSkge1xyXG4gICAgICAgIHJldHVybiB0b2RvSXRlbT8uaWQgPT09IF9wZW5kaW5nVG9kb0l0ZW0/LmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBlbmRpbmdUb2RvSXRlbSgpIHtcclxuICAgICAgICByZXR1cm4gX3BlbmRpbmdUb2RvSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25maXJtUGVuZGluZ1RvZG9JdGVtKCkge1xyXG4gICAgICAgIGlmICghX3BlbmRpbmdUb2RvSXRlbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcGVuZGluZyB0b2RvIGl0ZW0gdG8gY29uZmlybSEnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVG9kb0l0ZW0oX3BlbmRpbmdUb2RvSXRlbSwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIF9wZW5kaW5nVG9kb0l0ZW0gPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHRvZG9JdGVtcyxcclxuICAgICAgICBwcm9qZWN0TmFtZSxcclxuICAgICAgICBhZGRUb2RvSXRlbSxcclxuICAgICAgICBjaGFuZ2VUb2RvSXRlbSxcclxuICAgICAgICBkZWxldGVUb2RvSXRlbSxcclxuICAgICAgICBnZXRUb2RvSXRlbSxcclxuICAgICAgICBnZXRQZW5kaW5nVG9kb0l0ZW0sXHJcbiAgICAgICAgaXNQZW5kaW5nVG9kb0l0ZW0sXHJcbiAgICAgICAgY29uZmlybVBlbmRpbmdUb2RvSXRlbSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAqIGFzIHB1YlN1YiBmcm9tICcuL3B1YnN1Yic7XHJcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgeyB0b2RvTGlzdCwgc2F2ZVRvTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vdG9kby1saXN0XCI7XHJcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSBcIi4vdG9kby1pdGVtXCI7XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgaW5pdCA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdhZGRQcm9qZWN0JywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXkuc2V0QWN0aXZlUHJvamVjdCh0b2RvTGlzdC5hZGRQcm9qZWN0KGRhdGEucHJvamVjdE5hbWUpKTtcclxuXHJcbiAgICAgICAgICAgIF91cGRhdGVDb250ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnZGVsZXRlUHJvamVjdCcsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRvZG9MaXN0LmRlbGV0ZVByb2plY3QoZGF0YS5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgX3VwZGF0ZUNvbnRlbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdzZWxlY3RQcm9qZWN0JywgZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICBkaXNwbGF5LnNldEFjdGl2ZVByb2plY3QodG9kb0xpc3QuZ2V0UHJvamVjdChkYXRhLmlkKSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRvZG9JdGVtcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdhZGRJdGVtJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2ogPSBkaXNwbGF5LmdldEFjdGl2ZVByb2plY3QoKTtcclxuICAgICAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvaiwgJycsICcnLCBEYXRlLm5vdygpLCBQcmlvcml0eS5Ob3JtYWwsICcnLCBkYXRhLmlzUGVuZGluZylcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW1zKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2NvbmZpcm1JdGVtJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5LmdldEFjdGl2ZVByb2plY3QoKT8uY29uZmlybVBlbmRpbmdUb2RvSXRlbSgpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUb2RvSXRlbXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnZGVsZXRlSXRlbScsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICB0b2RvTGlzdC5kZWxldGVUb2RvSXRlbShkaXNwbGF5LmdldEFjdGl2ZVByb2plY3QoKSwgZGF0YS5pZCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRvZG9JdGVtcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VJdGVtJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmNoYW5nZVRvZG9JdGVtKGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW0oZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0VG9kb0l0ZW0oZGF0YS5pZCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VQcm9qZWN0JywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmNoYW5nZVByb2plY3QoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVByb2plY3QodG9kb0xpc3QuZ2V0UHJvamVjdChkYXRhLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZ2dsZUl0ZW1Eb25lJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gdG9kb0xpc3QudG9nZ2xlVG9kb0l0ZW1Eb25lKGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpLCBkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW0odG9kb0l0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTYXZlIHRoZSBlbnRpcmUgdG9kbyBsaXN0IHRvIGxvY2FsIHN0b3JhZ2Ugd2hlbiBhbnlcclxuICAgICAgICAvLyBvZiB0aGUgYmVsb3cgZXZlbnRzIGFyZSBmaXJlZDpcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdhZGRQcm9qZWN0Jywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVQcm9qZWN0Jywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdhZGRJdGVtJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjb25maXJtSXRlbScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnZGVsZXRlSXRlbScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnY2hhbmdlSXRlbScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnY2hhbmdlUHJvamVjdCcsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgndG9nZ2xlSXRlbURvbmUnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfdXBkYXRlQ29udGVudCgpIHtcclxuICAgICAgICAvLyBVcGRhdGUgc2lkZWJhciBhbmQgcGFnZS5cclxuICAgICAgICBkaXNwbGF5LnVwZGF0ZUNvbnRlbnQodG9kb0xpc3QucHJvamVjdHMsIGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUZXN0RGF0YSA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmFkZFByb2plY3QoJ1RvIERvJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2ZpbmlzaCB0aGlzIHByb2plY3QnLCAndGhpcyBwcm9qZWN0IGlzIGEgdG9kbyBsaXN0JywgJzIwMjItMTAtMDknLCBQcmlvcml0eS5IaWdoLCAnY2hlY2sgdGhlIGJveCB3aGVuIGRvbmUnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWRkIGJ1dHRvbiB0byBleHBhbmQvY29sbGFwc2UgYWxsIHRvZG8gaXRlbXMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWRkIGJveCBzaGFkb3dzJywgJ2Nyb3NzIG9mZicsICcnLCBQcmlvcml0eS5Mb3cpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhbGxvdyBlZGl0aW5nIHByb2plY3QgbmFtZXMnLCAncHJvamVjdCcsICcnLCBQcmlvcml0eS5Ob3JtYWwsJ2luLXBsYWNlIGVkaXRpbmc/Jyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGVkaXRpbmcgdG9kbyBpdGVtIHByb3BlcnRpZXMnLCAnaW4tcGxhY2UgZWRpdGluZycsICcnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnbW92ZSBjb21wbGV0ZWQgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCcsICdhbmltYXRlZD8nLCAnJywgUHJpb3JpdHkuTm9ybWFsLCAnc2hvdWxkIHRoaXMgYmUgYXV0b21hdGljPycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICd0aGlzIGl0ZW0gZGF0ZSBpcyB0aGUgbGF0ZXN0JywgJycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhbGxvdyBzb3J0aW5nIG9mIHRvZG8gaXRlbXMnLCAnJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGRlbGV0aW5nIHRvZG8gaXRlbXMnLCAnJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGFkZGluZyBwcm9qZWN0cycsICcnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgZGVsZXRpbmcgcHJvamVjdHMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgY3VzdG9tIHNvcnQgb2YgcHJvamVjdHMnLCAnJywgJzIwMjItMTItMTYnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0R3JvY2VyaWVzID0gdG9kb0xpc3QuYWRkUHJvamVjdCgnR3JvY2VyaWVzJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnYmFuYW5hcycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ25lY3RhcmluZXMnLCAnJywgbnVsbCwgUHJpb3JpdHkuTG93KTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdhcHBsZXMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdwbGFudGFpbnMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdmbG91cicsICdnbHV0ZW4gZnJlZScsICcnLCBQcmlvcml0eS5IaWdoLCAnUHJlc2lkZW50XFwncyBDaG9pY2UnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdtaWxrJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnY3JlYW0nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdidXR0ZXInKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdlZ2dzJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnYmFjb24nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdhZ2VkIGNoZWRkYXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEdhcmRlbiA9IHRvZG9MaXN0LmFkZFByb2plY3QoJ0dhcmRlbicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHYXJkZW4sICd0cmFuc3BsYW50IGxldHR1Y2UnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R2FyZGVuLCAnd2F0ZXIgdG9tYXRvIHBsYW50cycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHYXJkZW4sICd3YXRlciBjaGVycnkgdHJlZXMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgeWFyZCA9IHRvZG9MaXN0LmFkZFByb2plY3QoJ1lhcmQnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbSh5YXJkLCAnbW93IGxhd24nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbSh5YXJkLCAnbGV2ZWwgbGF3bicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHlhcmQsICdwbGFudCBncmFzcyBzZWVkJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0oeWFyZCwgJ3NldCB1cCBzcHJpbmtsZXInKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVGVzdERhdGEsIFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gdHJ1ZTtcclxuXHJcbmlmICh1c2VMb2NhbFN0b3JhZ2UpIHtcclxuICAgIGNvbnN0IGxvYWRlZEZyb21Mb2NhbFN0b3JhZ2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBcclxuICAgIGlmICghbG9hZGVkRnJvbUxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB0b2RvIGxpc3QgZGF0YSBmb3VuZCBpbiBsb2NhbCBzdG9yYWdlLicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgX0RFRkFVTFRfUFJPSkVDVF9OQU1FID0gJ1RvIERvJztcclxuICAgICAgICBkaXNwbGF5LnNldEFjdGl2ZVByb2plY3QodG9kb0xpc3QuYWRkUHJvamVjdChfREVGQVVMVF9QUk9KRUNUX05BTUUpLmlkKTtcclxuICAgIH1cclxufSBcclxuZWxzZSB7XHJcbiAgICBjb250cm9sbGVyLmNyZWF0ZVRlc3REYXRhKCk7XHJcbiAgICBpZiAodG9kb0xpc3QucHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRpc3BsYXkuc2V0QWN0aXZlUHJvamVjdCh0b2RvTGlzdC5wcm9qZWN0c1swXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpc3BsYXkucmVuZGVyU2l0ZSh0b2RvTGlzdC5wcm9qZWN0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9