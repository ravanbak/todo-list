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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color-content-background: hsl(60, 100%, 96%);\n    --color-todo-card-background: hsl(60, 100%, 92%);\n    --color-todo-card-hover-background: hsl(46, 100%, 82%);\n    --color-todo-card-details-background: hsl(60, 100%, 95%);\n    --color-todo-card-border: hsl(49, 18%, 77%);\n    --color-todo-card-done: hsl(100%, 30%, 30%);\n    --color-todo-card-done-background: hsl(0, 0%, 86%);\n    --color-todo-card-checkbox-background: #009900;\n    --color-input-focussed-background: rgb(255, 250, 184);\n    --color-active-project: #ffbf7b;\n    --color-priority-high: red;\n    --color-priority-normal: #55EE44;\n    --color-priority-low: #eedd00;\n    --box-shadow: 0px 0px 4px #00000033;\n    --size-icon: 2.5ch;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: hsl(184, 9%, 75%);\n    box-sizing: border-box;\n}\n\n.site__content * {\n    box-sizing: border-box;\n}\n\n.hide {\n    display: none;\n}\n\n.site__header {\n    display: flex;    \n    justify-content: center;\n    font-size: 2em;\n    color:whitesmoke;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center -40px;\n    background-size: 1200px;\n    background-attachment: fixed;\n    height: 160px;\n}\n\n.site__content {\n    display: flex;\n    margin: auto;\n    background: var(--color-content-background);\n    min-height: 300px;\n    max-width: 1200px;\n}\n\n.site__sidebar {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 20px 5px;\n    border-right: solid 1px var(--color-todo-card-border);\n    font-weight: bold;\n    text-align: center;\n    width: max(100px, 20vw);\n}\n\n.site__sidebar .projects-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.65rem;\n    padding: 25px 5px 30px 5px;\n    margin: 20px 0;\n    background-color: var(--color-todo-card-background);\n    border: solid 1px var(--color-todo-card-border);\n    border-radius: 6px;\n    align-items: flex-end;\n}\n\n.site__sidebar .edit-project {\n    margin-right: auto;\n}\n\n.site__sidebar .delete-project {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.site__sidebar .project-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 10px 5px;\n    border-radius: 6px;\n    text-align: right;\n    justify-content: right;\n}\n\n.site__sidebar div.project-name {\n    overflow-wrap: break-word;\n    max-width: 100%;\n}\n\n.site__sidebar .project-container.active {\n    background-color: var(--color-active-project);\n}\n\n.projects-container input[type=text] {\n    size: 30;\n    text-align: right;\n    background-color: var(--color-input-focussed-background);\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n\n.site__page {\n    margin: 0;\n    padding: 20px 0;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 100%;\n    min-width: 200px;\n    font-size: 1rem;\n    height: calc(100vh - 160px - 40px - 36px);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-list .controls {\n    display: flex;\n    margin-bottom: 10px;\n    position: sticky;\n}\n\ndiv.controls {\n    padding: 15px 0;\n    border-radius: 6px;\n}\n\n.todo-list .add-item {\n    color: rgb(42, 64, 64);\n    margin: 10px;\n}\n\n.todo-list .expand-all {\n    color: rgb(42, 64, 64);\n    margin: 10px;    \n}\n\n.todo-list .collapse-all {\n    color: rgb(42, 64, 64);\n    margin: 10px 10px 10px auto;\n}\n\n.todo-card input[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 2rem;\n    border-radius: 1rem;\n    /* font-size: 5.1rem; */\n    height: 0.25rem;\n}\n\n.todo-card input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #4bb1ff;\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n}\n\n.todo-card input.priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card input.priority-normal {\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card input.priority-low {\n    background-color: var(--color-priority-low);\n}\n\n/* .todo-card input[type=text] { */\n.todo-card textarea {\n    flex-grow: 1;\n    background-color: inherit;\n    border-radius: 3px;\n    border: solid 1px #80808030;\n    /* margin: 0 0px; */\n    transition: 0.2s;\n    size: 10;\n    /* width: 100%; */\n    height: 3rem;\n    overflow-wrap: break-word;\n}\n\n.todo-card textarea:focus {\n    background-color: var(--color-input-focussed-background);\n    outline: none;\n    size: 5;\n}\n\n.todo-card textarea:focus::placeholder {\n    color: gray;\n}\n\n.todo-card input[type=date] {\n    background-color: inherit;\n    border: none;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-todo-card-background);\n    border-radius: 6px;\n    /* border: 1px solid var(--color-todo-card-border); */\n    margin: 6px;\n    box-shadow: var(--box-shadow);\n}\n\n.show-on-hover\n{\n    display: block;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.todo-card:hover .show-on-hover,\n.project-container:hover .show-on-hover {\n    opacity: 0.333;\n}\n\n.project-container .show-on-hover:hover,\n.todo-card .show-on-hover:hover {\n    opacity: 1;\n}\n\n.todo-card * {\n    font-size: 0.65rem;\n}\n\n.todo-card__basic {\n    display: flex;\n    /* flex-wrap: wrap; */\n    padding: 5px;\n    align-items: center;\n}\n\n/* .todo-card__basic input[type=text] { */\n.todo-card__basic textarea {\n    padding-left: 10px;\n    flex-grow: 1;\n    /* width: 60%; */\n    /* font-size: inherit; */\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.todo-card__expanded {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    margin: 10px;\n    /* border: solid 1px var(--color-active-project); */\n    box-shadow: var(--box-shadow);\n    padding: 5px;\n    border-radius: 6px;\n}\n\n.todo-card__expanded {\n    background-color: var(--color-todo-card-details-background);\n}\n\n.todo-card:hover {\n    background-color: var(--color-todo-card-hover-background);\n}\n\n.todo-card.todo-done,\n.todo-card__expanded.todo-done {\n    background-color: var(--color-todo-card-done-background);\n}\n\ndiv.detail-container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 10px 0 0 0;\n    /* width: 100%; */\n}\n\ndiv.detail-container:first-child {\n    margin-top: 0;\n}\n\ndiv.detail-container > .fa-solid {\n    display: flex;\n    justify-content: center;\n    align-items: top;\n    flex-grow: 1;\n    min-width: 4ch;\n    max-width: 4ch;\n    color: rgb(42, 64, 64);\n}\n\n.checkbox input {\n    width: 2ch;\n    height: 2ch;\n    accent-color: var(--color-todo-card-checkbox-background);\n    outline: none;\n}\n\n.todo-card .checkbox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 2ch;\n    min-height: 2ch;\n    border-radius: 3px;\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card .priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card .priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card .delete-item,\n.delete-project {\n    padding: 0 6px 0 6px;\n    color: red;\n}\n\n.todo-card .expander {\n    padding: 0 0 0 6px;\n}\n\n.todo-done .title {\n    text-decoration: line-through;\n}\n\n.site__footer {\n    display: flex;    \n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    background: hsl(184, 9%, 75%);\n    max-width: 1200px;\n}\n\n.footer__inner {\n    display: flex;\n    padding: 2px;\n    align-items: center;\n    justify-content: center;\n}\n\n.site__footer a {\n    text-decoration: none;\n}\n\n.site__footer i {\n    color: rgb(42, 64, 64);\n    margin-left: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8CAA8C;IAC9C,gDAAgD;IAChD,sDAAsD;IACtD,wDAAwD;IACxD,2CAA2C;IAC3C,2CAA2C;IAC3C,kDAAkD;IAClD,8CAA8C;IAC9C,qDAAqD;IACrD,+BAA+B;IAC/B,0BAA0B;IAC1B,gCAAgC;IAChC,6BAA6B;IAC7B,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mCAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,yDAA0C;IAC1C,4BAA4B;IAC5B,iCAAiC;IACjC,uBAAuB;IACvB,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,2CAA2C;IAC3C,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,qDAAqD;IACrD,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,0BAA0B;IAC1B,cAAc;IACd,mDAAmD;IACnD,+CAA+C;IAC/C,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,QAAQ;IACR,iBAAiB;IACjB,wDAAwD;IACxD,WAAW;IACX,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA,kCAAkC;AAClC;IACI,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,QAAQ;IACR,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,wDAAwD;IACxD,aAAa;IACb,OAAO;AACX;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mDAAmD;IACnD,kBAAkB;IAClB,qDAAqD;IACrD,WAAW;IACX,6BAA6B;AACjC;;AAEA;;IAEI,cAAc;IACd,UAAU;IACV,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,YAAY;IACZ,mBAAmB;AACvB;;AAEA,yCAAyC;AACzC;IACI,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,mDAAmD;IACnD,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,2DAA2D;AAC/D;;AAEA;IACI,yDAAyD;AAC7D;;AAEA;;IAEI,wDAAwD;AAC5D;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,wDAAwD;IACxD,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,8CAA8C;AAClD;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;;IAEI,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;AACrB","sourcesContent":[":root {\n    --color-content-background: hsl(60, 100%, 96%);\n    --color-todo-card-background: hsl(60, 100%, 92%);\n    --color-todo-card-hover-background: hsl(46, 100%, 82%);\n    --color-todo-card-details-background: hsl(60, 100%, 95%);\n    --color-todo-card-border: hsl(49, 18%, 77%);\n    --color-todo-card-done: hsl(100%, 30%, 30%);\n    --color-todo-card-done-background: hsl(0, 0%, 86%);\n    --color-todo-card-checkbox-background: #009900;\n    --color-input-focussed-background: rgb(255, 250, 184);\n    --color-active-project: #ffbf7b;\n    --color-priority-high: red;\n    --color-priority-normal: #55EE44;\n    --color-priority-low: #eedd00;\n    --box-shadow: 0px 0px 4px #00000033;\n    --size-icon: 2.5ch;\n}\n\n* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: hsl(184, 9%, 75%);\n    box-sizing: border-box;\n}\n\n.site__content * {\n    box-sizing: border-box;\n}\n\n.hide {\n    display: none;\n}\n\n.site__header {\n    display: flex;    \n    justify-content: center;\n    font-size: 2em;\n    color:whitesmoke;\n    background-image: url('./assets/hero.png');\n    background-repeat: no-repeat;\n    background-position: center -40px;\n    background-size: 1200px;\n    background-attachment: fixed;\n    height: 160px;\n}\n\n.site__content {\n    display: flex;\n    margin: auto;\n    background: var(--color-content-background);\n    min-height: 300px;\n    max-width: 1200px;\n}\n\n.site__sidebar {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 20px 5px;\n    border-right: solid 1px var(--color-todo-card-border);\n    font-weight: bold;\n    text-align: center;\n    width: max(100px, 20vw);\n}\n\n.site__sidebar .projects-container {\n    display: flex;\n    flex-direction: column;\n    font-size: 0.65rem;\n    padding: 25px 5px 30px 5px;\n    margin: 20px 0;\n    background-color: var(--color-todo-card-background);\n    border: solid 1px var(--color-todo-card-border);\n    border-radius: 6px;\n    align-items: flex-end;\n}\n\n.site__sidebar .edit-project {\n    margin-right: auto;\n}\n\n.site__sidebar .delete-project {\n    margin-left: 0;\n    padding-left: 0;\n}\n\n.site__sidebar .project-container {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    padding: 10px 5px;\n    border-radius: 6px;\n    text-align: right;\n    justify-content: right;\n}\n\n.site__sidebar div.project-name {\n    overflow-wrap: break-word;\n    max-width: 100%;\n}\n\n.site__sidebar .project-container.active {\n    background-color: var(--color-active-project);\n}\n\n.projects-container input[type=text] {\n    size: 30;\n    text-align: right;\n    background-color: var(--color-input-focussed-background);\n    width: 100%;\n    height: 100%;\n    border: 0;\n}\n\n.site__page {\n    margin: 0;\n    padding: 20px 0;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    width: 100%;\n    min-width: 200px;\n    font-size: 1rem;\n    height: calc(100vh - 160px - 40px - 36px);\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n}\n\n.todo-list .controls {\n    display: flex;\n    margin-bottom: 10px;\n    position: sticky;\n}\n\ndiv.controls {\n    padding: 15px 0;\n    border-radius: 6px;\n}\n\n.todo-list .add-item {\n    color: rgb(42, 64, 64);\n    margin: 10px;\n}\n\n.todo-list .expand-all {\n    color: rgb(42, 64, 64);\n    margin: 10px;    \n}\n\n.todo-list .collapse-all {\n    color: rgb(42, 64, 64);\n    margin: 10px 10px 10px auto;\n}\n\n.todo-card input[type=range] {\n    -webkit-appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 2rem;\n    border-radius: 1rem;\n    /* font-size: 5.1rem; */\n    height: 0.25rem;\n}\n\n.todo-card input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #4bb1ff;\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n}\n\n.todo-card input.priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card input.priority-normal {\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card input.priority-low {\n    background-color: var(--color-priority-low);\n}\n\n/* .todo-card input[type=text] { */\n.todo-card textarea {\n    flex-grow: 1;\n    background-color: inherit;\n    border-radius: 3px;\n    border: solid 1px #80808030;\n    /* margin: 0 0px; */\n    transition: 0.2s;\n    size: 10;\n    /* width: 100%; */\n    height: 3rem;\n    overflow-wrap: break-word;\n}\n\n.todo-card textarea:focus {\n    background-color: var(--color-input-focussed-background);\n    outline: none;\n    size: 5;\n}\n\n.todo-card textarea:focus::placeholder {\n    color: gray;\n}\n\n.todo-card input[type=date] {\n    background-color: inherit;\n    border: none;\n}\n\n.todo-card {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--color-todo-card-background);\n    border-radius: 6px;\n    /* border: 1px solid var(--color-todo-card-border); */\n    margin: 6px;\n    box-shadow: var(--box-shadow);\n}\n\n.show-on-hover\n{\n    display: block;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.todo-card:hover .show-on-hover,\n.project-container:hover .show-on-hover {\n    opacity: 0.333;\n}\n\n.project-container .show-on-hover:hover,\n.todo-card .show-on-hover:hover {\n    opacity: 1;\n}\n\n.todo-card * {\n    font-size: 0.65rem;\n}\n\n.todo-card__basic {\n    display: flex;\n    /* flex-wrap: wrap; */\n    padding: 5px;\n    align-items: center;\n}\n\n/* .todo-card__basic input[type=text] { */\n.todo-card__basic textarea {\n    padding-left: 10px;\n    flex-grow: 1;\n    /* width: 60%; */\n    /* font-size: inherit; */\n    justify-content: center;\n    align-items: center;\n}\n\ndiv.todo-card__expanded {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    margin: 10px;\n    /* border: solid 1px var(--color-active-project); */\n    box-shadow: var(--box-shadow);\n    padding: 5px;\n    border-radius: 6px;\n}\n\n.todo-card__expanded {\n    background-color: var(--color-todo-card-details-background);\n}\n\n.todo-card:hover {\n    background-color: var(--color-todo-card-hover-background);\n}\n\n.todo-card.todo-done,\n.todo-card__expanded.todo-done {\n    background-color: var(--color-todo-card-done-background);\n}\n\ndiv.detail-container {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 10px 0 0 0;\n    /* width: 100%; */\n}\n\ndiv.detail-container:first-child {\n    margin-top: 0;\n}\n\ndiv.detail-container > .fa-solid {\n    display: flex;\n    justify-content: center;\n    align-items: top;\n    flex-grow: 1;\n    min-width: 4ch;\n    max-width: 4ch;\n    color: rgb(42, 64, 64);\n}\n\n.checkbox input {\n    width: 2ch;\n    height: 2ch;\n    accent-color: var(--color-todo-card-checkbox-background);\n    outline: none;\n}\n\n.todo-card .checkbox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 2ch;\n    min-height: 2ch;\n    border-radius: 3px;\n    background-color: var(--color-priority-normal);\n}\n\n.todo-card .priority-high {\n    background-color: var(--color-priority-high);\n}\n\n.todo-card .priority-low {\n    background-color: var(--color-priority-low);\n}\n\n.todo-card .delete-item,\n.delete-project {\n    padding: 0 6px 0 6px;\n    color: red;\n}\n\n.todo-card .expander {\n    padding: 0 0 0 6px;\n}\n\n.todo-done .title {\n    text-decoration: line-through;\n}\n\n.site__footer {\n    display: flex;    \n    margin: auto;\n    justify-content: center;\n    align-items: center;\n    background: hsl(184, 9%, 75%);\n    max-width: 1200px;\n}\n\n.footer__inner {\n    display: flex;\n    padding: 2px;\n    align-items: center;\n    justify-content: center;\n}\n\n.site__footer a {\n    text-decoration: none;\n}\n\n.site__footer i {\n    color: rgb(42, 64, 64);\n    margin-left: 20px;\n}"],"sourceRoot":""}]);
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

function localStorageAvailable() {
    console.log('Checking local storage availability...');

    let storage;
    try {
        storage = window['localStorage'];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    }
    catch(e) {
        if (e instanceof DOMException) {
            return ((e.name == 'QuotaExceededError' || 
                     e.name == 'NS_ERROR_DOM_QUOTA_REACHED') && 
                     storage && 
                     storage.length !== 0)
        } 
        
        return false;
    }
}

function saveToLocalStorage() {
    if (!localStorageAvailable()) return false;

    localStorage.removeItem(LOCAL_STORAGE_ID);
    localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(todoList));
}

function getFromLocalStorage() {
    if (!localStorageAvailable()) return false;

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
            console.log(data);
            if (confirm(`Delete your project named "${_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.getProject(data.id)?.projectName}"?`)) {
                if (!_todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.deleteProject(data.id)) {
                    return;
                }
                
                _updateContent();
            }
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
            if (confirm(`Delete this item?:\n\n "${_display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject()?.getTodoItem(data.id)?.title}"`)) {
                _todo_list__WEBPACK_IMPORTED_MODULE_3__.todoList.deleteTodoItem(_display__WEBPACK_IMPORTED_MODULE_2__.display.getActiveProject(), data.id);

                _display__WEBPACK_IMPORTED_MODULE_2__.display.updateTodoItems();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxV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NUIsUUFBUSw0REFBb0I7QUFDNUI7QUFDQSxxQkFBcUIsMkRBQW1CO0FBQ3hDLFFBQVEsNERBQW9CO0FBQzVCLFFBQVEsNERBQW9CO0FBQzVCLFFBQVEsNERBQW9CO0FBQzVCLFFBQVEsNERBQW9CO0FBQzVCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrREFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXdCLENBQUMsMkRBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBd0I7QUFDaEMsUUFBUSw4REFBd0IsQ0FBQyw0REFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esd0RBQWtCLENBQUMseURBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzEzNjciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLXV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaGVyby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3ItY29udGVudC1iYWNrZ3JvdW5kOiBoc2woNjAsIDEwMCUsIDk2JSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTIlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtaG92ZXItYmFja2dyb3VuZDogaHNsKDQ2LCAxMDAlLCA4MiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kZXRhaWxzLWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTUlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyOiBoc2woNDksIDE4JSwgNzclKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtZG9uZTogaHNsKDEwMCUsIDMwJSwgMzAlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtZG9uZS1iYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDg2JSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWNoZWNrYm94LWJhY2tncm91bmQ6ICMwMDk5MDA7XFxuICAgIC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZDogcmdiKDI1NSwgMjUwLCAxODQpO1xcbiAgICAtLWNvbG9yLWFjdGl2ZS1wcm9qZWN0OiAjZmZiZjdiO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LWhpZ2g6IHJlZDtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1ub3JtYWw6ICM1NUVFNDQ7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktbG93OiAjZWVkZDAwO1xcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggNHB4ICMwMDAwMDAzMztcXG4gICAgLS1zaXplLWljb246IDIuNWNoO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTg0LCA5JSwgNzUlKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnNpdGVfX2NvbnRlbnQgKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpdGVfX2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOndoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAtNDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjAwcHg7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbi5zaXRlX19jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jb250ZW50LWJhY2tncm91bmQpO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtYXgoMTAwcHgsIDIwdncpO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbiAgICBwYWRkaW5nOiAyNXB4IDVweCAzMHB4IDVweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItdG9kby1jYXJkLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZWRpdC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgZGl2LnByb2plY3QtbmFtZSB7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgLnByb2plY3QtY29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjdGl2ZS1wcm9qZWN0KTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgc2l6ZTogMzA7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbnB1dC1mb2N1c3NlZC1iYWNrZ3JvdW5kKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uc2l0ZV9fcGFnZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHggLSA0MHB4IC0gMzZweCk7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1saXN0IC5jb250cm9scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbmRpdi5jb250cm9scyB7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udG9kby1saXN0IC5hZGQtaXRlbSB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnRvZG8tbGlzdCAuZXhwYW5kLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweDsgICAgXFxufVxcblxcbi50b2RvLWxpc3QgLmNvbGxhcHNlLWFsbCB7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggYXV0bztcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXJhbmdlXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIC8qIGZvbnQtc2l6ZTogNS4xcmVtOyAqL1xcbiAgICBoZWlnaHQ6IDAuMjVyZW07XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGJiMWZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXQucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWhpZ2gpO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LW5vcm1hbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LW5vcm1hbCk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXQucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktbG93KTtcXG59XFxuXFxuLyogLnRvZG8tY2FyZCBpbnB1dFt0eXBlPXRleHRdIHsgKi9cXG4udG9kby1jYXJkIHRleHRhcmVhIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogc29saWQgMXB4ICM4MDgwODAzMDtcXG4gICAgLyogbWFyZ2luOiAwIDBweDsgKi9cXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgc2l6ZTogMTA7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWNhcmQgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbnB1dC1mb2N1c3NlZC1iYWNrZ3JvdW5kKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgc2l6ZTogNTtcXG59XFxuXFxuLnRvZG8tY2FyZCB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dFt0eXBlPWRhdGVdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWJhY2tncm91bmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXIpOyAqL1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxufVxcblxcbi5zaG93LW9uLWhvdmVyXFxue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciAuc2hvdy1vbi1ob3ZlcixcXG4ucHJvamVjdC1jb250YWluZXI6aG92ZXIgLnNob3ctb24taG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjMzMztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIC5zaG93LW9uLWhvdmVyOmhvdmVyLFxcbi50b2RvLWNhcmQgLnNob3ctb24taG92ZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udG9kby1jYXJkICoge1xcbiAgICBmb250LXNpemU6IDAuNjVyZW07XFxufVxcblxcbi50b2RvLWNhcmRfX2Jhc2ljIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC50b2RvLWNhcmRfX2Jhc2ljIGlucHV0W3R5cGU9dGV4dF0geyAqL1xcbi50b2RvLWNhcmRfX2Jhc2ljIHRleHRhcmVhIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC8qIHdpZHRoOiA2MCU7ICovXFxuICAgIC8qIGZvbnQtc2l6ZTogaW5oZXJpdDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi50b2RvLWNhcmRfX2V4cGFuZGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLWFjdGl2ZS1wcm9qZWN0KTsgKi9cXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4udG9kby1jYXJkX19leHBhbmRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1kZXRhaWxzLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWhvdmVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4udG9kby1jYXJkLnRvZG8tZG9uZSxcXG4udG9kby1jYXJkX19leHBhbmRlZC50b2RvLWRvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtZG9uZS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuZGl2LmRldGFpbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuZGl2LmRldGFpbC1jb250YWluZXIgPiAuZmEtc29saWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHRvcDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtaW4td2lkdGg6IDRjaDtcXG4gICAgbWF4LXdpZHRoOiA0Y2g7XFxuICAgIGNvbG9yOiByZ2IoNDIsIDY0LCA2NCk7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dCB7XFxuICAgIHdpZHRoOiAyY2g7XFxuICAgIGhlaWdodDogMmNoO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1jaGVja2JveC1iYWNrZ3JvdW5kKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCAuY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAyY2g7XFxuICAgIG1pbi1oZWlnaHQ6IDJjaDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5wcmlvcml0eS1oaWdoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktaGlnaCk7XFxufVxcblxcbi50b2RvLWNhcmQgLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi50b2RvLWNhcmQgLmRlbGV0ZS1pdGVtLFxcbi5kZWxldGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDAgNnB4IDAgNnB4O1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udG9kby1jYXJkIC5leHBhbmRlciB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcXG59XFxuXFxuLnRvZG8tZG9uZSAudGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnNpdGVfX2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMTg0LCA5JSwgNzUlKTtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5mb290ZXJfX2lubmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpdGVfX2Zvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc2l0ZV9fZm9vdGVyIGkge1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsc0RBQXNEO0lBQ3RELHdEQUF3RDtJQUN4RCwyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLGtEQUFrRDtJQUNsRCw4Q0FBOEM7SUFDOUMscURBQXFEO0lBQ3JE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QWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1jb250ZW50LWJhY2tncm91bmQ6IGhzbCg2MCwgMTAwJSwgOTYlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5MiUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1ob3Zlci1iYWNrZ3JvdW5kOiBoc2woNDYsIDEwMCUsIDgyJSk7XFxuICAgIC0tY29sb3ItdG9kby1jYXJkLWRldGFpbHMtYmFja2dyb3VuZDogaHNsKDYwLCAxMDAlLCA5NSUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXI6IGhzbCg0OSwgMTglLCA3NyUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kb25lOiBoc2woMTAwJSwgMzAlLCAzMCUpO1xcbiAgICAtLWNvbG9yLXRvZG8tY2FyZC1kb25lLWJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODYlKTtcXG4gICAgLS1jb2xvci10b2RvLWNhcmQtY2hlY2tib3gtYmFja2dyb3VuZDogIzAwOTkwMDtcXG4gICAgLS1jb2xvci1pbnB1dC1mb2N1c3NlZC1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTAsIDE4NCk7XFxuICAgIC0tY29sb3ItYWN0aXZlLXByb2plY3Q6ICNmZmJmN2I7XFxuICAgIC0tY29sb3ItcHJpb3JpdHktaGlnaDogcmVkO1xcbiAgICAtLWNvbG9yLXByaW9yaXR5LW5vcm1hbDogIzU1RUU0NDtcXG4gICAgLS1jb2xvci1wcmlvcml0eS1sb3c6ICNlZWRkMDA7XFxuICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCA0cHggIzAwMDAwMDMzO1xcbiAgICAtLXNpemUtaWNvbjogMi41Y2g7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODQsIDklLCA3NSUpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2l0ZV9fY29udGVudCAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2l0ZV9faGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9oZXJvLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgLTQwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4uc2l0ZV9fY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY29udGVudC1iYWNrZ3JvdW5kKTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uc2l0ZV9fc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMjBweCA1cHg7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogbWF4KDEwMHB4LCAyMHZ3KTtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgcGFkZGluZzogMjVweCA1cHggMzBweCA1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ib3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgLmVkaXQtcHJvamVjdCB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLnNpdGVfX3NpZGViYXIgLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIGRpdi5wcm9qZWN0LW5hbWUge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaXRlX19zaWRlYmFyIC5wcm9qZWN0LWNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUtcHJvamVjdCk7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHNpemU6IDMwO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLnNpdGVfX3BhZ2Uge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4IC0gNDBweCAtIDM2cHgpO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8tbGlzdCAuY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG5kaXYuY29udHJvbHMge1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRvZG8tbGlzdCAuYWRkLWl0ZW0ge1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi50b2RvLWxpc3QgLmV4cGFuZC1hbGwge1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbiAgICBtYXJnaW46IDEwcHg7ICAgIFxcbn1cXG5cXG4udG9kby1saXN0IC5jb2xsYXBzZS1hbGwge1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IGF1dG87XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT1yYW5nZV0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICAvKiBmb250LXNpemU6IDUuMXJlbTsgKi9cXG4gICAgaGVpZ2h0OiAwLjI1cmVtO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjFmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1oaWdoKTtcXG59XFxuXFxuLnRvZG8tY2FyZCBpbnB1dC5wcmlvcml0eS1ub3JtYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1ub3JtYWwpO1xcbn1cXG5cXG4udG9kby1jYXJkIGlucHV0LnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWxvdyk7XFxufVxcblxcbi8qIC50b2RvLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7ICovXFxuLnRvZG8tY2FyZCB0ZXh0YXJlYSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjODA4MDgwMzA7XFxuICAgIC8qIG1hcmdpbjogMCAwcHg7ICovXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIHNpemU6IDEwO1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udG9kby1jYXJkIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaW5wdXQtZm9jdXNzZWQtYmFja2dyb3VuZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHNpemU6IDU7XFxufVxcblxcbi50b2RvLWNhcmQgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi50b2RvLWNhcmQgaW5wdXRbdHlwZT1kYXRlXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10b2RvLWNhcmQtYm9yZGVyKTsgKi9cXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4uc2hvdy1vbi1ob3ZlclxcbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi50b2RvLWNhcmQ6aG92ZXIgLnNob3ctb24taG92ZXIsXFxuLnByb2plY3QtY29udGFpbmVyOmhvdmVyIC5zaG93LW9uLWhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC4zMzM7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciAuc2hvdy1vbi1ob3Zlcjpob3ZlcixcXG4udG9kby1jYXJkIC5zaG93LW9uLWhvdmVyOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRvZG8tY2FyZCAqIHtcXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xcbn1cXG5cXG4udG9kby1jYXJkX19iYXNpYyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAudG9kby1jYXJkX19iYXNpYyBpbnB1dFt0eXBlPXRleHRdIHsgKi9cXG4udG9kby1jYXJkX19iYXNpYyB0ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICAvKiB3aWR0aDogNjAlOyAqL1xcbiAgICAvKiBmb250LXNpemU6IGluaGVyaXQ7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYudG9kby1jYXJkX19leHBhbmRlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jb2xvci1hY3RpdmUtcHJvamVjdCk7ICovXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnRvZG8tY2FyZF9fZXhwYW5kZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtZGV0YWlscy1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRvZG8tY2FyZC1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnRvZG8tY2FyZC50b2RvLWRvbmUsXFxuLnRvZG8tY2FyZF9fZXhwYW5kZWQudG9kby1kb25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdG9kby1jYXJkLWRvbmUtYmFja2dyb3VuZCk7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbn1cXG5cXG5kaXYuZGV0YWlsLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbmRpdi5kZXRhaWwtY29udGFpbmVyID4gLmZhLXNvbGlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWluLXdpZHRoOiA0Y2g7XFxuICAgIG1heC13aWR0aDogNGNoO1xcbiAgICBjb2xvcjogcmdiKDQyLCA2NCwgNjQpO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXQge1xcbiAgICB3aWR0aDogMmNoO1xcbiAgICBoZWlnaHQ6IDJjaDtcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1jb2xvci10b2RvLWNhcmQtY2hlY2tib3gtYmFja2dyb3VuZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50b2RvLWNhcmQgLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMmNoO1xcbiAgICBtaW4taGVpZ2h0OiAyY2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpb3JpdHktbm9ybWFsKTtcXG59XFxuXFxuLnRvZG8tY2FyZCAucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW9yaXR5LWhpZ2gpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5wcmlvcml0eS1sb3cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4udG9kby1jYXJkIC5kZWxldGUtaXRlbSxcXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgICBwYWRkaW5nOiAwIDZweCAwIDZweDtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRvZG8tY2FyZCAuZXhwYW5kZXIge1xcbiAgICBwYWRkaW5nOiAwIDAgMCA2cHg7XFxufVxcblxcbi50b2RvLWRvbmUgLnRpdGxlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5zaXRlX19mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogaHNsKDE4NCwgOSUsIDc1JSk7XFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uZm9vdGVyX19pbm5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaXRlX19mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNpdGVfX2Zvb3RlciBpIHtcXG4gICAgY29sb3I6IHJnYig0MiwgNjQsIDY0KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0ICogYXMgcHViU3ViIGZyb20gJy4vcHVic3ViJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGRlbGV0ZUFsbENoaWxkcmVuIH0gZnJvbSAnLi9kb20tdXRpbCc7XG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4vdG9kby1pdGVtJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSAnLi90b2RvLWxpc3QnO1xuXG4vKlxuU2l0ZSBsYXlvdXQ6XG4gSGVhZGVyXG4gPT09PT09PT09PT1cbiBDb250ZW50IChQcm9qZWN0cywgSXRlbXMpXG4gPT09PT09PT09PT1cbiBGb290ZXJcbiovXG5cbmNvbnN0IGhlYWRlckRpc3BsYXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnIH0pO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2l0ZV9faGVhZGVyJyk7XG5cbiAgICAgICAgY29uc3QgZGl2VGl0bGUgPSBjcmVhdGVFbGVtZW50KHsgXG4gICAgICAgICAgICB0YWc6ICdkaXYnLCBcbiAgICAgICAgICAgIHBhcmVudDogaGVhZGVyLCBcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWyAnaGVyby10ZXh0JyBdLFxuICAgICAgICB9KTtcblxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2gxJyxcbiAgICAgICAgICAgIHBhcmVudDogZGl2VGl0bGUsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogICdUb2Rvb2RsaScsXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdlbmVyYXRlSGVhZGVyLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBjb250ZW50RGlzcGxheU1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBsZXQgX2FjdGl2ZVByb2plY3Q7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdHMsIGFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIHNpZGViYXIgYW5kIHRoZSBhY3RpdmUgcHJvamVjdCdzIHRvZG8gbGlzdCBjb250ZW50IFxuICAgICAgICAvLyBhbmQgcmV0dXJuIGEgZGl2IGNvbnRhaW5pbmcgYm90aC5cblxuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBfYWN0aXZlUHJvamVjdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfYWN0aXZlUHJvamVjdCA9IGFjdGl2ZVByb2plY3QgPyBhY3RpdmVQcm9qZWN0IDogcHJvamVjdHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaXRlQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIGNsYXNzTGlzdDogWydjb250YWluZXInLCAnc2l0ZV9fY29udGVudCddfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgcHJvamVjdHNcbiAgICAgICAgc2l0ZUNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXNwbGF5TW9kdWxlLmdlbmVyYXRlQ29udGVudChwcm9qZWN0cywgX2FjdGl2ZVByb2plY3QpKTtcblxuICAgICAgICAvLyBBZGQgaXRlbXNcbiAgICAgICAgc2l0ZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbXNEaXNwbGF5TW9kdWxlLmdlbmVyYXRlQ29udGVudChfYWN0aXZlUHJvamVjdCkpO1xuXG4gICAgICAgIHJldHVybiBzaXRlQ29udGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0c0Rpc3BsYXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc0xpc3Q6IFsnc2l0ZV9fc2lkZWJhciddIH0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IF9hZGRTaWRlYmFyRWxlbWVudCgpO1xuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChfYWRkUHJvamVjdExpc3QoKSk7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKF9hZGRBZGRQcm9qZWN0QnV0dG9uKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc2lkZWJhckNvbnRhaW5lcjtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX2FkZFNpZGViYXJFbGVtZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2NvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1Byb2plY3RzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2FkZFByb2plY3RMaXN0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgY2xhc3NMaXN0OiBbJ3Byb2plY3RzLWNvbnRhaW5lciddfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChnZW5lcmF0ZVByb2plY3RJdGVtKHByb2plY3RzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfYWRkQWRkUHJvamVjdEJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgY2xhc3NMaXN0OiBbJ2FkZC1wcm9qZWN0J119KTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIGNsYXNzTGlzdDogWydmYS1zb2xpZCcsICdmYS14bCcsICdmYS1wbHVzLWNpcmNsZSddfSkpO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwdWJTdWIucHVibGlzaCgnYWRkUHJvamVjdCcsIHtwcm9qZWN0TmFtZTogJ05ldyBQcm9qZWN0J30pKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdEl0ZW0ocHJvamVjdCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuIGVsZW1lbnQgZGlzcGxheWluZyB0aGUgcHJvamVjdCBuYW1lIGFuZCBcbiAgICAgICAgICAgIC8vIGJ1dHRvbnMgZm9yIG1hbmlwdWxhdGluZyB0aGUgcHJvamVjdC5cblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsIFxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydwcm9qZWN0LWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIGlkOiBwcm9qZWN0LmlkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZURlbGV0ZUJ1dHRvbigpKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUVkaXRCdXR0b24oKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGl2UHJvak5hbWUsIGlucHV0UHJvak5hbWUgfSA9IF9jcmVhdGVQcm9qZWN0TmFtZUVsZW1lbnRzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGhpbGlnaHQgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gX2FjdGl2ZVByb2plY3Q/LmlkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHViU3ViLnB1Ymxpc2goJ3NlbGVjdFByb2plY3QnLCB7IGlkOiBwcm9qZWN0LmlkIH0pKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0TmFtZUVsZW1lbnRzKCkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0d28gZWxlbWVudHMgZm9yIHByb2plY3QgbmFtZSwgYSBkaXYgZWxlbWVudCB0byBkaXNwbGF5IFxuICAgICAgICAgICAgICAgIC8vIHRoZSBuYW1lLCBhbmQgYSB0ZXh0IGlucHV0IGVsZW1lbnQgdG8gZWRpdCB0aGUgcHJvamVjdCBuYW1lLlxuICAgICAgICAgICAgICAgIC8vIE9ubHkgb25lIG9mIHRoZXNlIGVsZW1lbnRzIHdpbGwgYmUgYWN0aXZlIGF0IGFueSBnaXZlbiB0aW1lLlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlByb2pOYW1lID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudDogcHJvamVjdENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydwcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UHJvak5hbWUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnPHByb2plY3QgbmFtZT4nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Byb2plY3QtbmFtZSddLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGlucHV0IGV2ZW50czpcbiAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gX2FjY2VwdFByb2plY3ROYW1lKGUpKTtcbiAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZSA9PiBfZmluaXNoRWRpdFByb2plY3ROYW1lKGUpKTtcbiAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IF9oYW5kbGVJbnB1dEtleVByZXNzKGUpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4geyBkaXZQcm9qTmFtZSwgaW5wdXRQcm9qTmFtZSB9O1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX2hhbmRsZUlucHV0S2V5UHJlc3MoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLnZhbHVlID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ/LmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfZWRpdFByb2plY3ROYW1lKGUpIHtcbiAgICAgICAgICAgICAgICBkaXZQcm9qTmFtZS5yZXBsYWNlV2l0aChpbnB1dFByb2pOYW1lKTtcbiAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLmZvY3VzKCk7IFxuICAgICAgICAgICAgICAgIGlucHV0UHJvak5hbWUuc2VsZWN0KCk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBfZmluaXNoRWRpdFByb2plY3ROYW1lKGUpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFByb2pOYW1lLnJlcGxhY2VXaXRoKGRpdlByb2pOYW1lKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBfYWNjZXB0UHJvamVjdE5hbWUoZSkge1xuICAgICAgICAgICAgICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgcHJvamVjdCBuYW1lIScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHViU3ViLnB1Ymxpc2goJ2NoYW5nZVByb2plY3QnLCB7IGlkOiBwcm9qZWN0LmlkLCBwcm9qZWN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZURlbGV0ZUJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2RlbGV0ZS1wcm9qZWN0JywgJ2ZhLXNvbGlkJywgJ2ZhLXRyYXNoLWNhbicsICdoaWRlJywgJ3Nob3ctb24taG92ZXInXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gcHViU3ViLnB1Ymxpc2goJ2RlbGV0ZVByb2plY3QnLCB7IGlkOiBwcm9qZWN0LmlkIH0pKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVCdXR0b247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVFZGl0QnV0dG9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2VkaXQtcHJvamVjdCcsICdmYS1zb2xpZCcsICdmYS1wZW4nLCAnaGlkZScsICdzaG93LW9uLWhvdmVyJ10sXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBfZWRpdFByb2plY3ROYW1lKGUpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0QnV0dG9uOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdlbmVyYXRlQ29udGVudCxcbiAgICAgICAgICAgIGdlbmVyYXRlUHJvamVjdEl0ZW0sXG4gICAgICAgIH07XG4gICAgfSkoKTtcbiAgICBcbiAgICBjb25zdCBpdGVtc0Rpc3BsYXlNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IFNvcnRPcmRlciA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgVGl0bGU6IDAsXG4gICAgICAgICAgICBQcmlvcml0eTogMSxcbiAgICAgICAgICAgIERhdGU6IDIsXG4gICAgICAgICAgICBDdXN0b206IDNcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwcmltYXJ5U29ydEZpZWxkID0gU29ydE9yZGVyLlByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgU29ydERpcmVjdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgQXNjZW5kaW5nOiAxLFxuICAgICAgICAgICAgRGVzY2VuZGluZzogLTEsXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc29ydERpcmVjdGlvbiA9IFNvcnREaXJlY3Rpb24uRGVzY2VuZGluZztcblxuICAgICAgICBmdW5jdGlvbiBfZ2V0U29ydGVkVG9kb0l0ZW1zKHByb2plY3QpIHtcbiAgICAgICAgICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcHJvamVjdC50b2RvSXRlbXM7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocHJpbWFyeVNvcnRGaWVsZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgU29ydE9yZGVyLlRpdGxlOlxuICAgICAgICAgICAgICAgICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gU29ydERpcmVjdGlvbi5Bc2NlbmRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEudGl0bGUgPiBiLnRpdGxlID8gMSA6IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLnRpdGxlID4gYi50aXRsZSA/IC0xIDogMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFNvcnRPcmRlci5Qcmlvcml0eTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09IFNvcnREaXJlY3Rpb24uQXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBTb3J0T3JkZXIuRGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09IFNvcnREaXJlY3Rpb24uQXNjZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiBjb21wYXJlQXNjKGEuZHVlRGF0ZSwgYi5kdWVEYXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMuc29ydCgoYSwgYikgPT4gY29tcGFyZUFzYyhiLmR1ZURhdGUsIGEuZHVlRGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnQocHJvamVjdCkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGEgZGl2IGNvbnRhaW5pbmcgdGhlIGFjdGl2ZSBwcm9qZWN0J3MgdG9kbyBsaXN0LlxuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgY2xhc3NMaXN0OiBbICdzaXRlX19wYWdlJyBdfSk7XG4gICAgICAgICAgICBjb25zdCB0b2RvSXRlbXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHt0YWc6J2RpdicsIHBhcmVudDpjb250ZW50LCBjbGFzc0xpc3Q6Wydjb250YWluZXInLCAndG9kby1saXN0J119KTtcblxuICAgICAgICAgICAgLy8gQ29udGFpbmVyIGZvciBwYWdlIGNvbnRyb2xzXG4gICAgICAgICAgICBjb25zdCBjb250cm9sc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0b2RvSXRlbXNDb250YWluZXIsXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2NvbnRyb2xzJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBtYWluIGNvbnRyb2wgYnV0dG9ucyBmb3IgdG9kbyBsaXN0XG4gICAgICAgICAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUFkZEl0ZW1CdXR0b24oKSk7XG4gICAgICAgICAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbGxhcHNlQWxsQnV0dG9uKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVFeHBhbmRBbGxCdXR0b24oKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBwZW5kaW5nIHRvZG8gaXRlbSAoaXRlbSBhZGRlZCB0aHJvdWdoIFVJIGJ1dCBub3QgXG4gICAgICAgICAgICAgICAgLy8geWV0IGFjY2VwdGVkIGJ5IHRoZSB1c2VyKSwgZGlzcGxheSBpdCBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmdUb2RvSXRlbSA9IHByb2plY3QuZ2V0UGVuZGluZ1RvZG9JdGVtKCk7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdUb2RvSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RvSXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NhcmRNb2R1bGUuZ2VuZXJhdGVUb2RvQ2FyZChwZW5kaW5nVG9kb0l0ZW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBhbGwgdG9kbyBpdGVtcyBpbiB0aGUgcHJvamVjdC5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvSXRlbXMgPSBfZ2V0U29ydGVkVG9kb0l0ZW1zKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9JdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ2FyZE1vZHVsZS5nZW5lcmF0ZVRvZG9DYXJkKHRvZG9JdGVtc1tpXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9zZXRBbGxJdGVtc0V4cGFuZGVkU3RhdGUodG9kb0l0ZW1zLCBleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRvZG9JdGVtcy5mb3JFYWNoKGVsID0+IGVsLmV4cGFuZGVkID0gZXhwYW5kZWQpOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1cGRhdGVDb250ZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVFeHBhbmRBbGxCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydleHBhbmQtYWxsJywgJ2ZhLXNvbGlkJywgJ2ZhLXhsJywgJ2ZhLWFuZ2xlLWRvdWJsZS1kb3duJ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX3NldEFsbEl0ZW1zRXhwYW5kZWRTdGF0ZShwcm9qZWN0LnRvZG9JdGVtcywgdHJ1ZSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUNvbGxhcHNlQWxsQnV0dG9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnY29sbGFwc2UtYWxsJywgJ2ZhLXNvbGlkJywgJ2ZhLXhsJywgJ2ZhLWFuZ2xlLWRvdWJsZS11cCddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9zZXRBbGxJdGVtc0V4cGFuZGVkU3RhdGUocHJvamVjdC50b2RvSXRlbXMsIGZhbHNlKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlQWRkSXRlbUJ1dHRvbigpIHtcbiAgICAgICAgICAgICAgICAvLyAnQWRkIG5ldyB0b2RvIGl0ZW0nIGJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2FkZC1pdGVtJywgJ2ZhLXNvbGlkJywgJ2ZhLXhsJywgJ2ZhLXBsdXMtY2lyY2xlJ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHB1YlN1Yi5wdWJsaXNoKCdhZGRJdGVtJywgeyBpc1BlbmRpbmc6IHRydWUgfSkpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkSXRlbUJ1dHRvbjtcbiAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZV9fcGFnZScpO1xuICAgICAgICAgICAgY29udGVudD8ucmVwbGFjZVdpdGgoZ2VuZXJhdGVDb250ZW50KF9hY3RpdmVQcm9qZWN0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2RvQ2FyZE1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IF9nZXRQcmlvcml0eUNsYXNzID0gKHApID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCtwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgK1ByaW9yaXR5LkhpZ2g6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ByaW9yaXR5LWhpZ2gnO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICtQcmlvcml0eS5Mb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ByaW9yaXR5LWxvdyc7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ByaW9yaXR5LW5vcm1hbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRvZG9DYXJkKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGEgZGl2IGNvbnRhaW5pbmcgYSBzaW5nbGUgdG9kbyBpdGVtXG4gICAgICAgICAgICAgICAgLy8gc2hvd2luZyB0aGUgaXRlbSdzIGJhc2ljIGluZm8uIElmIHRoZSBpdGVtIGhhcyBiZWVuIFxuICAgICAgICAgICAgICAgIC8vIGV4cGFuZGVkLCBkaXNwbGF5IGRldGFpbHMuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXZUb2RvQ2FyZCA9IGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsndG9kby1jYXJkJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdG9kb0l0ZW0uaWR9KTtcbiAgICAgICAgICAgICAgICBpZiAodG9kb0l0ZW0uZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBkaXZUb2RvQ2FyZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWRvbmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb250YWluZXIgZm9yIGJhc2ljIHRvZG8gaXRlbSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdlRvZG9CYXNpYyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGRpdlRvZG9DYXJkLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsndG9kby1jYXJkX19iYXNpYyddLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZGl2VG9kb0Jhc2ljLmFwcGVuZENoaWxkKF9jcmVhdGVDaGVja2JveElucHV0KHRvZG9JdGVtKSk7XG4gICAgICAgICAgICAgICAgZGl2VG9kb0Jhc2ljLmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0Ym94SW5wdXQodG9kb0l0ZW0sIHtmaWVsZDondGl0bGUnfSkpO1xuICAgICAgICAgICAgICAgIGRpdlRvZG9CYXNpYy5hcHBlbmRDaGlsZChfY3JlYXRlRGVsZXRlQnV0dG9uKHRvZG9JdGVtKSk7XG4gICAgICAgICAgICAgICAgZGl2VG9kb0Jhc2ljLmFwcGVuZENoaWxkKF9jcmVhdGVFeHBhbmRlckJ1dHRvbih0b2RvSXRlbSkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0b2RvSXRlbT8uZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhwYW5kZWQgZGV0YWlscyBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2VG9kb0RldGFpbHMgPSBfZ2VuZXJhdGVFeHBhbmRlZFRvZG9JdGVtQ29udGVudCh0b2RvSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGRpdlRvZG9DYXJkLmFwcGVuZENoaWxkKGRpdlRvZG9EZXRhaWxzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0l0ZW0uZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2VG9kb0RldGFpbHMuY2xhc3NMaXN0LmFkZCgndG9kby1kb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpdlRvZG9DYXJkO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUV4cGFuZGVyQnV0dG9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJvdyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydleHBhbmRlcicsICdmYS1zb2xpZCcsICdzaG93LW9uLWhvdmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCh0b2RvSXRlbT8uZXhwYW5kZWQpID8gJ2ZhLWFuZ2xlLXVwJyA6ICdmYS1hbmdsZS1kb3duJyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9leHBhbmRDb2xsYXBzZVRvZG9JdGVtKHRvZG9JdGVtKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycm93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVDaGVja2JveElucHV0KHRvZG9JdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVja2JveCBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnY2hlY2tib3gnLCBfZ2V0UHJpb3JpdHlDbGFzcyh0b2RvSXRlbS5wcmlvcml0eSldLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVja2JveCBpbnB1dCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGNoZWNrYm94Q29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdG9kb0l0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB0b2RvSXRlbS5kb25lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tib3hJbnB1dC5jaGVja2VkID0gdG9kb0l0ZW0uZG9uZTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBwdWJTdWIucHVibGlzaCgndG9nZ2xlSXRlbURvbmUnLCB7aWQ6IHRvZG9JdGVtLmlkfSkpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94Q29udGFpbmVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVEZWxldGVCdXR0b24odG9kb0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2RlbGV0ZS1pdGVtJywgJ2ZhLXNvbGlkJywgJ2ZhLXRyYXNoLWNhbicsICdoaWRlJywgJ3Nob3ctb24taG92ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwdWJTdWIucHVibGlzaCgnZGVsZXRlSXRlbScsIHtpZDogdG9kb0l0ZW0uaWR9KSk7IFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9nZW5lcmF0ZUV4cGFuZGVkVG9kb0l0ZW1Db250ZW50KHRvZG9JdGVtKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2VG9kb0RldGFpbHMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3RvZG8tY2FyZF9fZXhwYW5kZWQnXSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFByaW9yaXR5XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkaXZUb2RvRGV0YWlscy5hcHBlbmRDaGlsZChfY3JlYXRlQ29udGFpbmVyV2l0aEljb24oJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJykpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIHRleHRDb250ZW50OiAnUHJpb3JpdHk6J30pKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlUHJpb3JpdHlJbnB1dCh0b2RvSXRlbSwge2ZpZWxkOidwcmlvcml0eSd9KSk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgdGV4dENvbnRlbnQ6IHRvZG9JdGVtLmdldFByaW9yaXR5U3RyaW5nKCl9KSk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcblxuICAgICAgICAgICAgICAgIC8vIER1ZSBkYXRlXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRpdlRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWluZXJXaXRoSWNvbignY2FsZW5kYXItYWx0JykpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZURhdGVJbnB1dCh0b2RvSXRlbSwge2ZpZWxkOidkdWVEYXRlJ30pKTtcblxuICAgICAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRpdlRvZG9EZXRhaWxzLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWluZXJXaXRoSWNvbignaW5mby1jaXJjbGUnKSk7XG4gICAgICAgICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dGJveElucHV0KHRvZG9JdGVtLCB7ZmllbGQ6J2Rlc2NyaXB0aW9uJ30pKTtcblxuICAgICAgICAgICAgICAgIC8vIE5vdGVzXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkaXZUb2RvRGV0YWlscy5hcHBlbmRDaGlsZChfY3JlYXRlQ29udGFpbmVyV2l0aEljb24oJ2NsaXBib2FyZCcpKTtcbiAgICAgICAgICAgICAgICBub3Rlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dGJveElucHV0KHRvZG9JdGVtLCB7ZmllbGQ6J25vdGVzJ30pKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkaXZUb2RvRGV0YWlscztcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVQcmlvcml0eUlucHV0KHRvZG9JdGVtLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eUNsYXNzID0gYHByaW9yaXR5LSR7dG9kb0l0ZW0uZ2V0UHJpb3JpdHlTdHJpbmcoKS50b0xvd2VyQ2FzZSgpfWA7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdG9kb0l0ZW0ucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFtwcmlvcml0eUNsYXNzXSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHB1YlN1Yi5wdWJsaXNoKCdjaGFuZ2VJdGVtJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogdG9kb0l0ZW0uaWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyZ3MuZmllbGRdOiBlLnRhcmdldC52YWx1ZX0pKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmFuZ2VJbnB1dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBfY3JlYXRlRGF0ZUlucHV0KHRvZG9JdGVtLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvZG9JdGVtLmR1ZURhdGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIV9hY3RpdmVQcm9qZWN0Py5pc1BlbmRpbmdUb2RvSXRlbSh0b2RvSXRlbSkgJiYgdG9kb0l0ZW1bYXJncy5maWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG9JdGVtW2FyZ3MuZmllbGRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHB1YlN1Yi5wdWJsaXNoKCdjaGFuZ2VJdGVtJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiB0b2RvSXRlbS5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcmdzLmZpZWxkXTogZS50YXJnZXQudmFsdWV9KSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NyZWF0ZUNvbnRhaW5lcldpdGhJY29uKGZhSWNvbk5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBkaXYgd2l0aCB0aGUgc3BlY2lmaWVkIEZBIGNoYXJhY3RlciBpY29uIGFzIGl0cyBjaGlsZCBlbGVtZW50LlxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7dGFnOiAnZGl2JywgY2xhc3NMaXN0OlsnZGV0YWlsLWNvbnRhaW5lciddfSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoe3RhZzogJ2RpdicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZmEtc29saWQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZhLSR7ZmFJY29uTmFtZX1gXX0pKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jcmVhdGVUZXh0Ym94SW5wdXQodG9kb0l0ZW0sIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBhcmdzLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFthcmdzLmZpZWxkXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIV9hY3RpdmVQcm9qZWN0Py5pc1BlbmRpbmdUb2RvSXRlbSh0b2RvSXRlbSkgJiYgdG9kb0l0ZW1bYXJncy5maWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0b2RvSXRlbVthcmdzLmZpZWxkXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4gcHViU3ViLnB1Ymxpc2goJ2NoYW5nZUl0ZW0nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkOiB0b2RvSXRlbS5pZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJncy5maWVsZF06IGUudGFyZ2V0LnZhbHVlfSkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gX2NyZWF0ZVRleHRib3hJbnB1dCh0b2RvSXRlbSwgYXJncykge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgLy8gICAgICAgICBwbGFjZWhvbGRlcjogYXJncy5maWVsZCxcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xhc3NMaXN0OiBbYXJncy5maWVsZF0sXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgaWYgKCFfYWN0aXZlUHJvamVjdD8uaXNQZW5kaW5nVG9kb0l0ZW0odG9kb0l0ZW0pICYmIHRvZG9JdGVtW2FyZ3MuZmllbGRdKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlucHV0LnZhbHVlID0gdG9kb0l0ZW1bYXJncy5maWVsZF07XG4gICAgICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgICAgICAvLyAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHB1YlN1Yi5wdWJsaXNoKCdjaGFuZ2VJdGVtJywgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZDogdG9kb0l0ZW0uaWQsIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyZ3MuZmllbGRdOiBlLnRhcmdldC52YWx1ZX0pKTtcblxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVRvZG9DYXJkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvQ2FyZCA9IHRvZG9DYXJkTW9kdWxlLmdlbmVyYXRlVG9kb0NhcmQodG9kb0l0ZW0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0b2RvSXRlbS5pZCk/LnJlcGxhY2VXaXRoKG5ld1RvZG9DYXJkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbnRlbnQsXG4gICAgICAgICAgICB1cGRhdGVDb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlVG9kb0l0ZW0sXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9hY3RpdmVQcm9qZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgX2FjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvZG9MaXN0LnByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9hY3RpdmVQcm9qZWN0ID0gdG9kb0xpc3QucHJvamVjdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIaWdobGlnaHQgdGhlIGFjdGl2ZSBwcm9qZWN0IGluIHRoZSBzaWRlYmFyOlxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRvZG9MaXN0LnByb2plY3RzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0c1tpXS5pZH1gKT8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke19hY3RpdmVQcm9qZWN0LmlkfWApPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBwcm9qZWN0c0Rpc3BsYXlNb2R1bGUuZ2VuZXJhdGVQcm9qZWN0SXRlbShwcm9qZWN0KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9qZWN0LmlkKT8ucmVwbGFjZVdpdGgobmV3UHJvamVjdEVsZW1lbnQpO1xuXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QoX2FjdGl2ZVByb2plY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9leHBhbmRDb2xsYXBzZVRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgICAgIHRvZG9JdGVtLmV4cGFuZGVkID0gIXRvZG9JdGVtLmV4cGFuZGVkO1xuXG4gICAgICAgIGl0ZW1zRGlzcGxheU1vZHVsZS51cGRhdGVUb2RvSXRlbSh0b2RvSXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVDb250ZW50LFxuICAgICAgICB1cGRhdGVQcm9qZWN0LFxuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICB1cGRhdGVUb2RvSXRlbTogaXRlbXNEaXNwbGF5TW9kdWxlLnVwZGF0ZVRvZG9JdGVtLFxuICAgICAgICB1cGRhdGVDb250ZW50OiBpdGVtc0Rpc3BsYXlNb2R1bGUudXBkYXRlQ29udGVudCxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgZm9vdGVyRGlzcGxheU1vZHVsZSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLCBcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydzaXRlX19mb290ZXInXSxcbiAgICAgICAgfSk7ICAgIFxuICAgICAgICBjb25zdCBmb290ZXJDb250ZW50ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgcGFyZW50OiBmb290ZXIsIFxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2Zvb3Rlcl9faW5uZXInXSxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBwYXJlbnQ6IGZvb3RlckNvbnRlbnQsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogJ0NvcHlyaWdodCDCqSAyMDIyIERhdmlkIFJhdmFuYmFraHNoJyxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGEgPSBjcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIHRhZzogJ2EnLFxuICAgICAgICAgICAgcGFyZW50OiBmb290ZXJDb250ZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYXZhbmJhayc7XG4gICAgICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgdGFnOiAnaScsXG4gICAgICAgICAgICBwYXJlbnQ6IGEsXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZmEtYnJhbmRzJywgJ2ZhLWdpdGh1Yi1zcXVhcmUnLCAnZmEtMngnXSxcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVGb290ZXIsXG4gICAgfVxufSkoKTtcblxuY29uc3QgZGlzcGxheSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiByZW5kZXJTaXRlKHByb2plY3RzKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgc2l0ZSAoaW5jbHVkaW5nIGhlYWRlciBhbmQgZm9vdGVyKS5cblxuICAgICAgICBkZWxldGVBbGxDaGlsZHJlbignZGl2I3NpdGUnKTtcblxuICAgICAgICBjb25zdCBzaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3NpdGUnKTtcbiAgICAgICAgc2l0ZT8uYXBwZW5kQ2hpbGQoaGVhZGVyRGlzcGxheU1vZHVsZS5nZW5lcmF0ZUhlYWRlcigpKTtcbiAgICAgICAgc2l0ZT8uYXBwZW5kQ2hpbGQoY29udGVudERpc3BsYXlNb2R1bGUuZ2VuZXJhdGVDb250ZW50KHByb2plY3RzKSk7IC8vLCBhY3RpdmVQcm9qZWN0KSk7XG4gICAgICAgIHNpdGU/LmFwcGVuZENoaWxkKGZvb3RlckRpc3BsYXlNb2R1bGUuZ2VuZXJhdGVGb290ZXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGVudChwcm9qZWN0cykge1xuICAgICAgICAvLyBSZW5kZXIgc2l0ZSBjb250ZW50IChzaWRlYmFyIGFuZCB0b2RvIGxpc3QgaXRlbXMpLlxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlX19jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZW50ID0gY29udGVudERpc3BsYXlNb2R1bGUuZ2VuZXJhdGVDb250ZW50KHByb2plY3RzLCBjb250ZW50RGlzcGxheU1vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICBjb250ZW50Py5yZXBsYWNlV2l0aCh1cGRhdGVkQ29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyU2l0ZSxcbiAgICAgICAgdXBkYXRlQ29udGVudCxcbiAgICAgICAgdXBkYXRlVG9kb0l0ZW06IGNvbnRlbnREaXNwbGF5TW9kdWxlLnVwZGF0ZVRvZG9JdGVtLFxuICAgICAgICB1cGRhdGVUb2RvSXRlbXM6IGNvbnRlbnREaXNwbGF5TW9kdWxlLnVwZGF0ZUNvbnRlbnQsXG4gICAgICAgIHVwZGF0ZVByb2plY3Q6IGNvbnRlbnREaXNwbGF5TW9kdWxlLnVwZGF0ZVByb2plY3QsXG4gICAgICAgIGdldEFjdGl2ZVByb2plY3Q6IGNvbnRlbnREaXNwbGF5TW9kdWxlLmdldEFjdGl2ZVByb2plY3QsXG4gICAgICAgIHNldEFjdGl2ZVByb2plY3Q6IGNvbnRlbnREaXNwbGF5TW9kdWxlLnNldEFjdGl2ZVByb2plY3QsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRpc3BsYXkgfTsiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChhcmdzKSB7XG4gICAgaWYgKCFhcmdzLnRhZykgcmV0dXJuO1xuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZ3MudGFnKTtcblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFyZ3MpKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICAgICAgICBlbFtrZXldLmFkZCguLi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgYXJncy5wYXJlbnQ/LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBbGxDaGlsZHJlbihzZWxlY3Rvcikge1xuICAgIC8vIERlbGV0ZSBhbGwgY2hpbGRyZW4gb2YgdGhlIHNlbGVjdGVkIGVsZW1lbnQgXG4gICAgLy8gYW5kIHJldHVybiB0aGUgc2VsZWN0ZWQgZWxlbWVudC5cblxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgd2hpbGUgKHBhcmVudD8uZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQ/LnJlbW92ZUNoaWxkKHBhcmVudD8ubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xufSIsImxldCBzdWJzY3JpYmVycyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSkge1xuICAgIGlmICghc3Vic2NyaWJlcnNbZXZlbnRdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVyc1tldmVudF0uZm9yRWFjaChzdWJzY3JpYmVyQ2FsbGJhY2sgPT4ge1xuICAgICAgICBzdWJzY3JpYmVyQ2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFzdWJzY3JpYmVyc1tldmVudF0pIHtcbiAgICAgICAgc3Vic2NyaWJlcnNbZXZlbnRdID0gW107XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCwgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IFByaW9yaXR5ID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBIaWdoOiAxLFxyXG4gICAgTm9ybWFsOiAwLFxyXG4gICAgTG93OiAtMSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5ID0gUHJpb3JpdHkuTm9ybWFsLCBub3RlcywgZG9uZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBpZCA9ICdpdGVtLScgKyB1dWlkdjQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eVN0cmluZygpIHtcclxuICAgICAgICBzd2l0Y2ggKCt0aGlzLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHkuTG93OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdMb3cnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUHJpb3JpdHkuSGlnaDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnSGlnaCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTm9ybWFsJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBkb25lLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZ2V0UHJpb3JpdHlTdHJpbmcsXHJcbiAgICAgICAgbm90ZXMsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByaW9yaXR5LCBjcmVhdGVUb2RvSXRlbSB9IiwiaW1wb3J0ICogYXMgcHJvamVjdE1vZHVsZSBmcm9tICcuL3RvZG8tcHJvamVjdCc7XHJcbmltcG9ydCAqIGFzIGl0ZW1Nb2R1bGUgZnJvbSAnLi90b2RvLWl0ZW0nO1xyXG5cclxuY29uc3QgTE9DQUxfU1RPUkFHRV9JRCA9ICd0b2RvbGlzdC1kOWNhMDBjZS02NTc0LTQyYmQtYmYyZS1kZTIyNDQ0ZjRmZjUnO1xyXG5cclxuY29uc3QgdG9kb0xpc3QgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuICAgICAgICBcclxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJRCkge1xyXG4gICAgICAgIGNvbnN0IGlkeCA9IHByb2plY3RzLmZpbmRJbmRleCgocCkgPT4gcC5pZCA9PT0gcHJvamVjdElEICk7XHJcblxyXG4gICAgICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IG5vdCBmb3VuZCEgRnVuY3Rpb246ICR7ZGVsZXRlUHJvamVjdC5uYW1lfWApO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKGlkeCA+IC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0KGRhdGEpIHtcclxuICAgICAgICBjb25zdCBpZHggPSBwcm9qZWN0cy5maW5kSW5kZXgocCA9PiBwLmlkID09PSBkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3Qgbm90IGZvdW5kISBGdW5jdGlvbjogJHtjaGFuZ2VQcm9qZWN0Lm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb2plY3RzW2lkeF0sIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdElEKSB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gcHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElEKTtcclxuXHJcbiAgICAgICAgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2plY3Qgbm90IGZvdW5kISBGdW5jdGlvbjogJHtnZXRQcm9qZWN0Lm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2lkeF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9kb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlzUGVuZGluZykge1xyXG4gICAgICAgIGlmICghcHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdCBub3QgZm91bmQhYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gaXRlbU1vZHVsZS5jcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0LmFkZFRvZG9JdGVtKHRvZG9JdGVtLCBpc1BlbmRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVRvZG9JdGVtRG9uZShwcm9qZWN0LCBpZCkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gcHJvamVjdC5nZXRUb2RvSXRlbShpZCk7XHJcbiAgICAgICAgdG9kb0l0ZW0uZG9uZSA9ICF0b2RvSXRlbS5kb25lO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVG9kb0l0ZW0ocHJvamVjdCwgbW9kaWZpZWRUb2RvSXRlbSkge1xyXG4gICAgICAgIGlmICghcHJvamVjdCB8fCAhbW9kaWZpZWRUb2RvSXRlbS5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBvciB0b2RvIGl0ZW0gbm90IGZvdW5kLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdC5jaGFuZ2VUb2RvSXRlbShtb2RpZmllZFRvZG9JdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbShwcm9qZWN0LCBpZCkge1xyXG4gICAgICAgIGlmICghcHJvamVjdCB8fCAhaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3Qgb3IgdG9kbyBpdGVtIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3QuZGVsZXRlVG9kb0l0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvamVjdHMsXHJcbiAgICAgICAgYWRkUHJvamVjdCxcclxuICAgICAgICBkZWxldGVQcm9qZWN0LFxyXG4gICAgICAgIGNoYW5nZVByb2plY3QsXHJcbiAgICAgICAgZ2V0UHJvamVjdCxcclxuICAgICAgICBhZGRUb2RvSXRlbSxcclxuICAgICAgICBjaGFuZ2VUb2RvSXRlbSxcclxuICAgICAgICBkZWxldGVUb2RvSXRlbSxcclxuICAgICAgICB0b2dnbGVUb2RvSXRlbURvbmUsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgbG9jYWwgc3RvcmFnZSBhdmFpbGFiaWxpdHkuLi4nKTtcclxuXHJcbiAgICBsZXQgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1snbG9jYWxTdG9yYWdlJ107XHJcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKChlLm5hbWUgPT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgIGUubmFtZSA9PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDApXHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShMT0NBTF9TVE9SQUdFX0lEKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfSUQsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IHByb2plY3RzID0gZ2V0U3RvcmVkUHJvamVjdHMoKTtcclxuICAgIGlmICghcHJvamVjdHMgfHwgcHJvamVjdHM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMb2FkIHN0b3JlZCBkYXRhOlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIExvYWQgcHJvamVjdDpcclxuICAgICAgICBsZXQgcHJvaiA9IHRvZG9MaXN0LmFkZFByb2plY3QoJycpOyAvLyBjcmVhdGUgYW4gZW1wdHkgcHJvamVjdCBvYmplY3RcclxuICAgICAgICBwcm9qLmlkID0gcHJvamVjdHNbaV0uaWQ7XHJcbiAgICAgICAgcHJvai5wcm9qZWN0TmFtZSA9IHByb2plY3RzW2ldLnByb2plY3ROYW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIExvYWQgdGhlIHRvZG8gaXRlbXMgaW4gdGhpcyBwcm9qZWN0OlxyXG4gICAgICAgIGxldCBpdGVtcyA9IHByb2plY3RzW2ldLnRvZG9JdGVtcztcclxuICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zPy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gaXRlbXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBpdGVtTW9kdWxlLmNyZWF0ZVRvZG9JdGVtKCk7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwgaXRlbXNbal0pO1xyXG4gICAgICAgICAgICBwcm9qLmFkZFRvZG9JdGVtKGl0ZW0sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmVkUHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfSUQpO1xyXG5cclxuICAgICAgICBpZiAoIXN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcclxuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgdG9kb0xpc3QsXHJcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UsXHJcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxyXG59OyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCwgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBpZCA9ICdwcm9qLScgKyB1dWlkdjQoKTtcclxuICAgIFxyXG4gICAgbGV0IHRvZG9JdGVtcyA9IFtdO1xyXG4gICAgbGV0IF9wZW5kaW5nVG9kb0l0ZW07IC8vIHRvZG8gaXRlbSBhZGRlZCB0aHJvdWdoIFVJIGFuZCBub3QgeWV0IGNvbmZpcm1lZCBieSB1c2VyXHJcbiAgICBcclxuICAgIGNvbnN0IF9nZXRUb2RvSXRlbUluZGV4ID0gKGlkKSA9PiB0b2RvSXRlbXMuZmluZEluZGV4KGVsID0+IGVsLmlkID09PSBpZCk7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGFkZFRvZG9JdGVtKHRvZG9JdGVtLCBpc1BlbmRpbmcpIHtcclxuICAgICAgICBpZiAoaXNQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXRlbSBpcyB0byBiZSBjb25maXJtZWQgYnkgdGhlIHVzZXJcclxuICAgICAgICAgICAgLy8gYmVmb3JlIGl0IGlzIGFkZGVkIHRvIHRoZSBwcm9qZWN0IGxpc3QuXHJcbiAgICAgICAgICAgIF9wZW5kaW5nVG9kb0l0ZW0gPSB0b2RvSXRlbTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2RvSXRlbXMudW5zaGlmdCh0b2RvSXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdG9kb0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVG9kb0l0ZW0obW9kaWZpZWRUb2RvSXRlbSkge1xyXG4gICAgICAgIGxldCBpdGVtID0gZ2V0VG9kb0l0ZW0obW9kaWZpZWRUb2RvSXRlbS5pZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJdGVtICR7bW9kaWZpZWRUb2RvSXRlbT8uaWR9IG5vdCBmb3VuZCBpbiAke3RoaXMucHJvamVjdE5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCBtb2RpZmllZFRvZG9JdGVtKTtcclxuXHJcbiAgICAgICAgaWYgKGlzUGVuZGluZ1RvZG9JdGVtKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1QZW5kaW5nVG9kb0l0ZW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG9JdGVtKGlkKSB7XHJcbiAgICAgICAgaWYgKGlkID09PSBfcGVuZGluZ1RvZG9JdGVtPy5pZCkge1xyXG4gICAgICAgICAgICAvLyBDYW5jZWwgdGhlIHBlbmRpbmcgdG9kbyBpdGVtLlxyXG4gICAgICAgICAgICBfcGVuZGluZ1RvZG9JdGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWR4ID0gX2dldFRvZG9JdGVtSW5kZXgoaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpZHggPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUb2RvIGl0ZW0gbm90IGZvdW5kIWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9kb0l0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChpZHggPiAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VG9kb0l0ZW0oaWQpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRvZG9JdGVtcy5maW5kKGVsID0+IGVsLmlkID09PSBpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFpdGVtICYmIGlkID09PSBfcGVuZGluZ1RvZG9JdGVtPy5pZCkge1xyXG4gICAgICAgICAgICBpdGVtID0gX3BlbmRpbmdUb2RvSXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQZW5kaW5nVG9kb0l0ZW0odG9kb0l0ZW0pIHtcclxuICAgICAgICByZXR1cm4gdG9kb0l0ZW0/LmlkID09PSBfcGVuZGluZ1RvZG9JdGVtPy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQZW5kaW5nVG9kb0l0ZW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9wZW5kaW5nVG9kb0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY29uZmlybVBlbmRpbmdUb2RvSXRlbSgpIHtcclxuICAgICAgICBpZiAoIV9wZW5kaW5nVG9kb0l0ZW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHBlbmRpbmcgdG9kbyBpdGVtIHRvIGNvbmZpcm0hJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFRvZG9JdGVtKF9wZW5kaW5nVG9kb0l0ZW0sIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICBfcGVuZGluZ1RvZG9JdGVtID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZCxcclxuICAgICAgICB0b2RvSXRlbXMsXHJcbiAgICAgICAgcHJvamVjdE5hbWUsXHJcbiAgICAgICAgYWRkVG9kb0l0ZW0sXHJcbiAgICAgICAgY2hhbmdlVG9kb0l0ZW0sXHJcbiAgICAgICAgZGVsZXRlVG9kb0l0ZW0sXHJcbiAgICAgICAgZ2V0VG9kb0l0ZW0sXHJcbiAgICAgICAgZ2V0UGVuZGluZ1RvZG9JdGVtLFxyXG4gICAgICAgIGlzUGVuZGluZ1RvZG9JdGVtLFxyXG4gICAgICAgIGNvbmZpcm1QZW5kaW5nVG9kb0l0ZW0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBwdWJTdWIgZnJvbSAnLi9wdWJzdWInO1xyXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IHsgdG9kb0xpc3QsIHNhdmVUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3RvZG8tbGlzdFwiO1xyXG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gXCIuL3RvZG8taXRlbVwiO1xyXG5cclxuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGluaXQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnYWRkUHJvamVjdCcsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5LnNldEFjdGl2ZVByb2plY3QodG9kb0xpc3QuYWRkUHJvamVjdChkYXRhLnByb2plY3ROYW1lKSk7XHJcblxyXG4gICAgICAgICAgICBfdXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2RlbGV0ZVByb2plY3QnLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKGBEZWxldGUgeW91ciBwcm9qZWN0IG5hbWVkIFwiJHt0b2RvTGlzdC5nZXRQcm9qZWN0KGRhdGEuaWQpPy5wcm9qZWN0TmFtZX1cIj9gKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0b2RvTGlzdC5kZWxldGVQcm9qZWN0KGRhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBfdXBkYXRlQ29udGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnc2VsZWN0UHJvamVjdCcsIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgZGlzcGxheS5zZXRBY3RpdmVQcm9qZWN0KHRvZG9MaXN0LmdldFByb2plY3QoZGF0YS5pZCkpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUb2RvSXRlbXMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnYWRkSXRlbScsIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qID0gZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2osICcnLCAnJywgRGF0ZS5ub3coKSwgUHJpb3JpdHkuTm9ybWFsLCAnJywgZGF0YS5pc1BlbmRpbmcpXHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVRvZG9JdGVtcygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjb25maXJtSXRlbScsICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCk/LmNvbmZpcm1QZW5kaW5nVG9kb0l0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW1zKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2RlbGV0ZUl0ZW0nLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZSB0aGlzIGl0ZW0/OlxcblxcbiBcIiR7ZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCk/LmdldFRvZG9JdGVtKGRhdGEuaWQpPy50aXRsZX1cImApKSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5kZWxldGVUb2RvSXRlbShkaXNwbGF5LmdldEFjdGl2ZVByb2plY3QoKSwgZGF0YS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheS51cGRhdGVUb2RvSXRlbXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VJdGVtJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmNoYW5nZVRvZG9JdGVtKGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW0oZGlzcGxheS5nZXRBY3RpdmVQcm9qZWN0KCkuZ2V0VG9kb0l0ZW0oZGF0YS5pZCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjaGFuZ2VQcm9qZWN0JywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9MaXN0LmNoYW5nZVByb2plY3QoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZVByb2plY3QodG9kb0xpc3QuZ2V0UHJvamVjdChkYXRhLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ3RvZ2dsZUl0ZW1Eb25lJywgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JdGVtID0gdG9kb0xpc3QudG9nZ2xlVG9kb0l0ZW1Eb25lKGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpLCBkYXRhLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlVG9kb0l0ZW0odG9kb0l0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTYXZlIHRoZSBlbnRpcmUgdG9kbyBsaXN0IHRvIGxvY2FsIHN0b3JhZ2Ugd2hlbiBhbnlcclxuICAgICAgICAvLyBvZiB0aGUgYmVsb3cgZXZlbnRzIGFyZSBmaXJlZDpcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdhZGRQcm9qZWN0Jywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdkZWxldGVQcm9qZWN0Jywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdhZGRJdGVtJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcclxuICAgICAgICBwdWJTdWIuc3Vic2NyaWJlKCdjb25maXJtSXRlbScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnZGVsZXRlSXRlbScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnY2hhbmdlSXRlbScsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgnY2hhbmdlUHJvamVjdCcsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgcHViU3ViLnN1YnNjcmliZSgndG9nZ2xlSXRlbURvbmUnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBfdXBkYXRlQ29udGVudCgpIHtcclxuICAgICAgICAvLyBVcGRhdGUgc2lkZWJhciBhbmQgcGFnZS5cclxuICAgICAgICBkaXNwbGF5LnVwZGF0ZUNvbnRlbnQodG9kb0xpc3QucHJvamVjdHMsIGRpc3BsYXkuZ2V0QWN0aXZlUHJvamVjdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVUZXN0RGF0YSA9IChmdW5jdGlvbigpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRvZG9MaXN0LmFkZFByb2plY3QoJ1RvIERvJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2ZpbmlzaCB0aGlzIHByb2plY3QnLCAndGhpcyBwcm9qZWN0IGlzIGEgdG9kbyBsaXN0JywgJzIwMjItMTAtMDknLCBQcmlvcml0eS5IaWdoLCAnY2hlY2sgdGhlIGJveCB3aGVuIGRvbmUnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWRkIGJ1dHRvbiB0byBleHBhbmQvY29sbGFwc2UgYWxsIHRvZG8gaXRlbXMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWRkIGJveCBzaGFkb3dzJywgJ2Nyb3NzIG9mZicsICcnLCBQcmlvcml0eS5Mb3cpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhbGxvdyBlZGl0aW5nIHByb2plY3QgbmFtZXMnLCAncHJvamVjdCcsICcnLCBQcmlvcml0eS5Ob3JtYWwsJ2luLXBsYWNlIGVkaXRpbmc/Jyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGVkaXRpbmcgdG9kbyBpdGVtIHByb3BlcnRpZXMnLCAnaW4tcGxhY2UgZWRpdGluZycsICcnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnbW92ZSBjb21wbGV0ZWQgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdCcsICdhbmltYXRlZD8nLCAnJywgUHJpb3JpdHkuTm9ybWFsLCAnc2hvdWxkIHRoaXMgYmUgYXV0b21hdGljPycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICd0aGlzIGl0ZW0gZGF0ZSBpcyB0aGUgbGF0ZXN0JywgJycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3QsICdhbGxvdyBzb3J0aW5nIG9mIHRvZG8gaXRlbXMnLCAnJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGRlbGV0aW5nIHRvZG8gaXRlbXMnLCAnJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdCwgJ2FsbG93IGFkZGluZyBwcm9qZWN0cycsICcnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgZGVsZXRpbmcgcHJvamVjdHMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0LCAnYWxsb3cgY3VzdG9tIHNvcnQgb2YgcHJvamVjdHMnLCAnJywgJzIwMjItMTItMTYnKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0R3JvY2VyaWVzID0gdG9kb0xpc3QuYWRkUHJvamVjdCgnR3JvY2VyaWVzJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnYmFuYW5hcycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHcm9jZXJpZXMsJ25lY3RhcmluZXMnLCAnJywgbnVsbCwgUHJpb3JpdHkuTG93KTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdhcHBsZXMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdwbGFudGFpbnMnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdmbG91cicsICdnbHV0ZW4gZnJlZScsICcnLCBQcmlvcml0eS5IaWdoLCAnUHJlc2lkZW50XFwncyBDaG9pY2UnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdtaWxrJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnY3JlYW0nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdidXR0ZXInKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdlZ2dzJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0ocHJvamVjdEdyb2NlcmllcywnYmFjb24nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R3JvY2VyaWVzLCdhZ2VkIGNoZWRkYXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEdhcmRlbiA9IHRvZG9MaXN0LmFkZFByb2plY3QoJ0dhcmRlbicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHYXJkZW4sICd0cmFuc3BsYW50IGxldHR1Y2UnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbShwcm9qZWN0R2FyZGVuLCAnd2F0ZXIgdG9tYXRvIHBsYW50cycpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHByb2plY3RHYXJkZW4sICd3YXRlciBjaGVycnkgdHJlZXMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgeWFyZCA9IHRvZG9MaXN0LmFkZFByb2plY3QoJ1lhcmQnKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbSh5YXJkLCAnbW93IGxhd24nKTtcclxuICAgICAgICB0b2RvTGlzdC5hZGRUb2RvSXRlbSh5YXJkLCAnbGV2ZWwgbGF3bicpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFkZFRvZG9JdGVtKHlhcmQsICdwbGFudCBncmFzcyBzZWVkJyk7XHJcbiAgICAgICAgdG9kb0xpc3QuYWRkVG9kb0l0ZW0oeWFyZCwgJ3NldCB1cCBzcHJpbmtsZXInKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlVGVzdERhdGEsIFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gdHJ1ZTtcclxuXHJcbmlmICh1c2VMb2NhbFN0b3JhZ2UpIHtcclxuICAgIGNvbnN0IGxvYWRlZEZyb21Mb2NhbFN0b3JhZ2UgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBcclxuICAgIGlmICghbG9hZGVkRnJvbUxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyB0b2RvIGxpc3QgZGF0YSBmb3VuZCBpbiBsb2NhbCBzdG9yYWdlLicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgX0RFRkFVTFRfUFJPSkVDVF9OQU1FID0gJ1RvIERvJztcclxuICAgICAgICBkaXNwbGF5LnNldEFjdGl2ZVByb2plY3QodG9kb0xpc3QuYWRkUHJvamVjdChfREVGQVVMVF9QUk9KRUNUX05BTUUpLmlkKTtcclxuICAgIH1cclxufSBcclxuZWxzZSB7XHJcbiAgICBjb250cm9sbGVyLmNyZWF0ZVRlc3REYXRhKCk7XHJcbiAgICBpZiAodG9kb0xpc3QucHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRpc3BsYXkuc2V0QWN0aXZlUHJvamVjdCh0b2RvTGlzdC5wcm9qZWN0c1swXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpc3BsYXkucmVuZGVyU2l0ZSh0b2RvTGlzdC5wcm9qZWN0cyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9