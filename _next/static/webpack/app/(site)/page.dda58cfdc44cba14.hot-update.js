"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-pages-browser)/./components/FAQ/FAQItem.tsx":
/*!************************************!*\
  !*** ./components/FAQ/FAQItem.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst FAQItem = (param)=>{\n    let { faqData } = param;\n    const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        handleFaqToggle(id);\n                    },\n                    className: \"flex gap-4 cursor-pointer justify-between px-6 py-5 text-base font-medium text-black dark:text-white lg:px-9 lg:py-7.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-left w-full\",\n                            children: quest\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        activeFaq === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"18\",\n                            height: \"4\",\n                            viewBox: \"0 0 18 4\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z\",\n                                fill: \"currentColor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            width: \"18\",\n                            height: \"18\",\n                            viewBox: \"0 0 18 18\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z\",\n                                fill: \"currentColor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"border-t border-stroke px-6 py-5 dark:border-strokedark lg:px-9 lg:py-7.5 \".concat(activeFaq === id ? \"block\" : \"hidden\"),\n                    children: ans\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\Aryan\\\\NextJs\\\\Diagonals\\\\MythVortex\\\\components\\\\FAQ\\\\FAQItem.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = FAQItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQItem);\nvar _c;\n$RefreshReg$(_c, \"FAQItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRkFRL0ZBUUl0ZW0udHN4IiwibWFwcGluZ3MiOiI7OztBQVFBLE1BQU1BLFVBQVU7UUFBQyxFQUFFQyxPQUFPLEVBQXdCO0lBQ2hELE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxFQUFFLEVBQUVDLGVBQWUsRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUUsR0FBR0w7SUFFdkQscUJBQ0U7a0JBQ0UsNEVBQUNNO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFDRUMsU0FBUzt3QkFDUE4sZ0JBQWdCRDtvQkFDbEI7b0JBQ0FLLFdBQVU7O3NDQUVWLDhEQUFDRzs0QkFBS0gsV0FBVTtzQ0FBb0JIOzs7Ozs7d0JBRW5DSCxjQUFjQyxtQkFDYiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLFNBQVE7NEJBQ1JDLE1BQUs7NEJBQ0xDLE9BQU07c0NBRU4sNEVBQUNDO2dDQUNDQyxHQUFFO2dDQUNGSCxNQUFLOzs7Ozs7Ozs7O3NEQUlULDhEQUFDSjs0QkFDQ0MsT0FBTTs0QkFDTkMsUUFBTzs0QkFDUEMsU0FBUTs0QkFDUkMsTUFBSzs0QkFDTEMsT0FBTTtzQ0FFTiw0RUFBQ0M7Z0NBQ0NDLEdBQUU7Z0NBQ0ZILE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtiLDhEQUFDSTtvQkFDQ1osV0FBVyw2RUFFVixPQURDTixjQUFjQyxLQUFLLFVBQVU7OEJBRzlCRzs7Ozs7Ozs7Ozs7OztBQUtYO0tBcERNTjtBQXNETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZBUS9GQVFJdGVtLnRzeD8zOTQ3Il0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgRmFxRGF0YSA9IHtcclxuICBhY3RpdmVGYXE6IG51bWJlcjtcclxuICBpZDogbnVtYmVyO1xyXG4gIGhhbmRsZUZhcVRvZ2dsZTogKGlkOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgcXVlc3Q6IHN0cmluZztcclxuICBhbnM6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEZBUUl0ZW0gPSAoeyBmYXFEYXRhIH06IHsgZmFxRGF0YTogRmFxRGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBhY3RpdmVGYXEsIGlkLCBoYW5kbGVGYXFUb2dnbGUsIHF1ZXN0LCBhbnMgfSA9IGZhcURhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyLWIgYm9yZGVyLXN0cm9rZSBsYXN0LW9mLXR5cGU6Ym9yZGVyLW5vbmUgZGFyazpib3JkZXItc3Ryb2tlZGFya1wiPlxyXG4gICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVGYXFUb2dnbGUoaWQpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgY3Vyc29yLXBvaW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTYgcHktNSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgbGc6cHgtOSBsZzpweS03LjVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGVmdCB3LWZ1bGxcIj57cXVlc3R9PC9zcGFuPlxyXG5cclxuICAgICAgICAgIHthY3RpdmVGYXEgPT09IGlkID8gKFxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOCA0XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNy4xNjY2IDAuODMzMzc0SDEwLjE2NjZINy44MzMzMUgwLjgzMzMxM1YzLjE2NjcxSDcuODMzMzFIMTAuMTY2NkgxNy4xNjY2VjAuODMzMzc0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNNy44MzMzMSA3LjgzMzM3VjAuODMzMzc0SDEwLjE2NjZWNy44MzMzN0gxNy4xNjY2VjEwLjE2NjdIMTAuMTY2NlYxNy4xNjY3SDcuODMzMzFWMTAuMTY2N0gwLjgzMzMxM1Y3LjgzMzM3SDcuODMzMzFaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLXQgYm9yZGVyLXN0cm9rZSBweC02IHB5LTUgZGFyazpib3JkZXItc3Ryb2tlZGFyayBsZzpweC05IGxnOnB5LTcuNSAke1xyXG4gICAgICAgICAgICBhY3RpdmVGYXEgPT09IGlkID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Fuc31cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZBUUl0ZW07XHJcbiJdLCJuYW1lcyI6WyJGQVFJdGVtIiwiZmFxRGF0YSIsImFjdGl2ZUZhcSIsImlkIiwiaGFuZGxlRmFxVG9nZ2xlIiwicXVlc3QiLCJhbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FAQ/FAQItem.tsx\n"));

/***/ })

});