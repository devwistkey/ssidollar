'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/index', {
    /***/ './components/Layout/index.tsx':
        /*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var effector_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! effector-react */ "./node_modules/effector-react/effector-react.mjs");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./components/index.ts");\n/* harmony import */ var _src_store_menuOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/store/menuOn */ "./src/store/menuOn.ts");\n/* harmony import */ var _src_store_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/store/loading */ "./src/store/loading.ts");\n/* harmony import */ var _src_store_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/store/modal */ "./src/store/modal.ts");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LayoutSearch(props) {\n    _s();\n    var children = props.children;\n    var menuOn = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_menuOn__WEBPACK_IMPORTED_MODULE_3__.$menuOn);\n    var loading = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_loading__WEBPACK_IMPORTED_MODULE_4__.$loading);\n    var modalDashboard = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalDashboard);\n    var modalNewSsi = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalNewSsi);\n    var modalTx = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalTx);\n    var modalGetStarted = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalGetStarted);\n    var modalBuyNft = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalBuyNft);\n    var modalAddFunds = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalAddFunds);\n    var modalWithdrawal = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalWithdrawal);\n    var modalNewMotions = (0,effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore)(_src_store_modal__WEBPACK_IMPORTED_MODULE_5__.$modalNewMotions);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        style: {\n            display: \'flex\',\n            flexDirection: \'column\',\n            alignItems: \'center\'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {\n                    children: "TYRON"\n                }, void 0, false, {\n                    fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                id: "bg"\n            }, void 0, false, {\n                fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                id: "wrapper",\n                children: [\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {\n                        style: {\n                            color: \'#ffff32\'\n                        },\n                        className: "fa fa-lg fa-spin fa-circle-notch",\n                        "aria-hidden": "true"\n                    }, void 0, false, {\n                        fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: !menuOn && !modalNewSsi && !modalTx && !modalGetStarted && !modalBuyNft && !modalAddFunds && !modalDashboard && !modalWithdrawal && !modalNewMotions && children\n                    }, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_2__.Dashboard, {}, void 0, false, {\n                        fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/ilhambagas/Documents/Wistkey/ssidollar/components/Layout/index.tsx",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this));\n}\n_s(LayoutSearch, "HI9HyXXLg8H+AYhmZS97i3IZrM4=", false, function() {\n    return [\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore,\n        effector_react__WEBPACK_IMPORTED_MODULE_6__.useStore\n    ];\n});\n_c = LayoutSearch;\n/* harmony default export */ __webpack_exports__["default"] = (LayoutSearch);\nvar _c;\n$RefreshReg$(_c, "LayoutSearch");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ2I7QUFDd0I7QUFDSjtBQUNFO0FBVXBCOztTQU1yQmEsWUFBWSxDQUFDQyxLQUFrQixFQUFFLENBQUM7O0lBQ3ZDLEdBQUssQ0FBR0MsUUFBUSxHQUFLRCxLQUFLLENBQWxCQyxRQUFRO0lBQ2hCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHaEIsd0RBQVEsQ0FBQ0csc0RBQU87SUFDL0IsR0FBSyxDQUFDYyxPQUFPLEdBQUdqQix3REFBUSxDQUFDSSx3REFBUTtJQUNqQyxHQUFLLENBQUNjLGNBQWMsR0FBR2xCLHdEQUFRLENBQUNLLDZEQUFlO0lBQy9DLEdBQUssQ0FBQ2MsV0FBVyxHQUFHbkIsd0RBQVEsQ0FBQ00sMERBQVk7SUFDekMsR0FBSyxDQUFDYyxPQUFPLEdBQUdwQix3REFBUSxDQUFDTyxzREFBUTtJQUNqQyxHQUFLLENBQUNjLGVBQWUsR0FBR3JCLHdEQUFRLENBQUNRLDhEQUFnQjtJQUNqRCxHQUFLLENBQUNjLFdBQVcsR0FBR3RCLHdEQUFRLENBQUNTLDBEQUFZO0lBQ3pDLEdBQUssQ0FBQ2MsYUFBYSxHQUFHdkIsd0RBQVEsQ0FBQ1UsNERBQWM7SUFDN0MsR0FBSyxDQUFDYyxlQUFlLEdBQUd4Qix3REFBUSxDQUFDVyw4REFBZ0I7SUFDakQsR0FBSyxDQUFDYyxlQUFlLEdBQUd6Qix3REFBUSxDQUFDWSw4REFBZ0I7SUFFakQsTUFBTSw2RUFDRGMsQ0FBRztRQUNBQyxLQUFLLEVBQUUsQ0FBQztZQUNKQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxhQUFhLEVBQUUsQ0FBUTtZQUN2QkMsVUFBVSxFQUFFLENBQVE7UUFDeEIsQ0FBQzs7d0ZBRUE3QixrREFBSTtzR0FDQThCLENBQUs7OEJBQUMsQ0FBSzs7Ozs7Ozs7Ozs7d0ZBRWZMLENBQUc7Z0JBQUNNLEVBQUUsRUFBQyxDQUFJOzs7Ozs7d0ZBQ1hOLENBQUc7Z0JBQUNNLEVBQUUsRUFBQyxDQUFTOztvQkFDWmYsT0FBTywrRUFDSGdCLENBQUM7d0JBQ0VOLEtBQUssRUFBRSxDQUFDOzRCQUFDTyxLQUFLLEVBQUUsQ0FBUzt3QkFBQyxDQUFDO3dCQUMzQkMsU0FBUyxFQUFDLENBQWtDO3dCQUM1Q0MsQ0FBVyxjQUFDLENBQU07Ozs7OzttQ0FJaEJwQixNQUFNLEtBQ0hHLFdBQVcsS0FDWEMsT0FBTyxLQUNQQyxlQUFlLEtBQ2ZDLFdBQVcsS0FDWEMsYUFBYSxLQUNiTCxjQUFjLEtBQ2RNLGVBQWUsS0FDZkMsZUFBZSxJQUNoQlYsUUFBUTs7Z0dBR25CYix3Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUIsQ0FBQztHQWxEUVcsWUFBWTs7UUFFRmIsb0RBQVE7UUFDUEEsb0RBQVE7UUFDREEsb0RBQVE7UUFDWEEsb0RBQVE7UUFDWkEsb0RBQVE7UUFDQUEsb0RBQVE7UUFDWkEsb0RBQVE7UUFDTkEsb0RBQVE7UUFDTkEsb0RBQVE7UUFDUkEsb0RBQVE7OztLQVgzQmEsWUFBWTtBQW9EckIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzY0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ2VmZmVjdG9yLXJlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSGVhZGVyLCBGb290ZXIsIE1lbnUsIERhc2hib2FyZCB9IGZyb20gJy4uJ1xuaW1wb3J0IHsgJG1lbnVPbiB9IGZyb20gJy4uLy4uL3NyYy9zdG9yZS9tZW51T24nXG5pbXBvcnQgeyAkbG9hZGluZyB9IGZyb20gJy4uLy4uL3NyYy9zdG9yZS9sb2FkaW5nJ1xuaW1wb3J0IHtcbiAgICAkbW9kYWxEYXNoYm9hcmQsXG4gICAgJG1vZGFsTmV3U3NpLFxuICAgICRtb2RhbFR4LFxuICAgICRtb2RhbEdldFN0YXJ0ZWQsXG4gICAgJG1vZGFsQnV5TmZ0LFxuICAgICRtb2RhbEFkZEZ1bmRzLFxuICAgICRtb2RhbFdpdGhkcmF3YWwsXG4gICAgJG1vZGFsTmV3TW90aW9ucyxcbn0gZnJvbSAnLi4vLi4vc3JjL3N0b3JlL21vZGFsJ1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbn1cblxuZnVuY3Rpb24gTGF5b3V0U2VhcmNoKHByb3BzOiBMYXlvdXRQcm9wcykge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzXG4gICAgY29uc3QgbWVudU9uID0gdXNlU3RvcmUoJG1lbnVPbilcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlU3RvcmUoJGxvYWRpbmcpXG4gICAgY29uc3QgbW9kYWxEYXNoYm9hcmQgPSB1c2VTdG9yZSgkbW9kYWxEYXNoYm9hcmQpXG4gICAgY29uc3QgbW9kYWxOZXdTc2kgPSB1c2VTdG9yZSgkbW9kYWxOZXdTc2kpXG4gICAgY29uc3QgbW9kYWxUeCA9IHVzZVN0b3JlKCRtb2RhbFR4KVxuICAgIGNvbnN0IG1vZGFsR2V0U3RhcnRlZCA9IHVzZVN0b3JlKCRtb2RhbEdldFN0YXJ0ZWQpXG4gICAgY29uc3QgbW9kYWxCdXlOZnQgPSB1c2VTdG9yZSgkbW9kYWxCdXlOZnQpXG4gICAgY29uc3QgbW9kYWxBZGRGdW5kcyA9IHVzZVN0b3JlKCRtb2RhbEFkZEZ1bmRzKVxuICAgIGNvbnN0IG1vZGFsV2l0aGRyYXdhbCA9IHVzZVN0b3JlKCRtb2RhbFdpdGhkcmF3YWwpXG4gICAgY29uc3QgbW9kYWxOZXdNb3Rpb25zID0gdXNlU3RvcmUoJG1vZGFsTmV3TW90aW9ucylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlRZUk9OPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJiZ1wiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmZmZjMyJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbGcgZmEtc3BpbiBmYS1jaXJjbGUtbm90Y2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFtZW51T24gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbW9kYWxOZXdTc2kgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbW9kYWxUeCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtb2RhbEdldFN0YXJ0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbW9kYWxCdXlOZnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbW9kYWxBZGRGdW5kcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtb2RhbERhc2hib2FyZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtb2RhbFdpdGhkcmF3YWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbW9kYWxOZXdNb3Rpb25zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPERhc2hib2FyZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0U2VhcmNoXG4iXSwibmFtZXMiOlsidXNlU3RvcmUiLCJIZWFkIiwiRGFzaGJvYXJkIiwiJG1lbnVPbiIsIiRsb2FkaW5nIiwiJG1vZGFsRGFzaGJvYXJkIiwiJG1vZGFsTmV3U3NpIiwiJG1vZGFsVHgiLCIkbW9kYWxHZXRTdGFydGVkIiwiJG1vZGFsQnV5TmZ0IiwiJG1vZGFsQWRkRnVuZHMiLCIkbW9kYWxXaXRoZHJhd2FsIiwiJG1vZGFsTmV3TW90aW9ucyIsIkxheW91dFNlYXJjaCIsInByb3BzIiwiY2hpbGRyZW4iLCJtZW51T24iLCJsb2FkaW5nIiwibW9kYWxEYXNoYm9hcmQiLCJtb2RhbE5ld1NzaSIsIm1vZGFsVHgiLCJtb2RhbEdldFN0YXJ0ZWQiLCJtb2RhbEJ1eU5mdCIsIm1vZGFsQWRkRnVuZHMiLCJtb2RhbFdpdGhkcmF3YWwiLCJtb2RhbE5ld01vdGlvbnMiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInRpdGxlIiwiaWQiLCJpIiwiY29sb3IiLCJjbGFzc05hbWUiLCJhcmlhLWhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n'
            )

            /***/
        },
})
