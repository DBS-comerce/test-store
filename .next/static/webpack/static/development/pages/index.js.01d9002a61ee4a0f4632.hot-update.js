webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/actions/items.tsx":
/*!*******************************!*\
  !*** ./src/actions/items.tsx ***!
  \*******************************/
/*! exports provided: loadItemsData, loadCategoriesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadItemsData", function() { return loadItemsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesData", function() { return loadCategoriesData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/types */ "./src/reducers/types.tsx");


function loadItemsData() {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://www.mocky.io/v2/5e982fa93500007f00c47f6c').then(function (response) {
      // handle success
      if (response.status === 200) {
        dispatch({
          type: _reducers_types__WEBPACK_IMPORTED_MODULE_1__["LOAD_ITEMS"],
          payload: response.data
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  };
}
function loadCategoriesData() {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://www.mocky.io/v2/5e982f9c3500007a00c47f6b').then(function (response) {
      if (response.status === 200) {
        dispatch({
          type: _reducers_types__WEBPACK_IMPORTED_MODULE_1__["LOAD_CATEGORIES"],
          payload: response.data
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
  };
}

/***/ })

})
//# sourceMappingURL=index.js.01d9002a61ee4a0f4632.hot-update.js.map