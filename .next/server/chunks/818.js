"use strict";
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 9818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px"
};
const StyledContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-width: auto;
  margin: 0 auto;

  @media screen and (min-width: 321px) {
    max-width: ${size.mobileS};
  }
  @media screen and (min-width: ${size.mobileM}) {
    max-width: ${size.mobileM};
  }
  @media screen and (min-width: ${size.mobileL}) {
    max-width: ${size.mobileL};
  }
  @media screen and (min-width: ${size.tablet}) {
    max-width: ${size.tablet};
  }
  @media screen and (min-width: ${size.laptop}) {
    max-width: ${size.laptop};
  }
  @media screen and (min-width: ${size.laptopL}) {
    max-width: ${size.laptopL};
  }
`;
const Container = ({ children , setWidth  })=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (setWidth) {
            debugger;
            setWidth(containerRef.current.offsetWidth);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledContainer, {
        ref: containerRef,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ })

};
;