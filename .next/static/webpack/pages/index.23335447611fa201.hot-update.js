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
    /***/ './src/store/modal.ts':
        /*!****************************!*\
  !*** ./src/store/modal.ts ***!
  \****************************/
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            eval(
                '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "showZilpay": function() { return /* binding */ showZilpay; },\n/* harmony export */   "dashboardState": function() { return /* binding */ dashboardState; },\n/* harmony export */   "modalDashboard": function() { return /* binding */ modalDashboard; },\n/* harmony export */   "updateShowZilpay": function() { return /* binding */ updateShowZilpay; },\n/* harmony export */   "$showZilpay": function() { return /* binding */ $showZilpay; },\n/* harmony export */   "updateDashboardState": function() { return /* binding */ updateDashboardState; },\n/* harmony export */   "$dashboardState": function() { return /* binding */ $dashboardState; },\n/* harmony export */   "updateModalDashboard": function() { return /* binding */ updateModalDashboard; },\n/* harmony export */   "$modalDashboard": function() { return /* binding */ $modalDashboard; }\n/* harmony export */ });\n/* harmony import */ var effector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! effector */ "./node_modules/effector/effector.mjs");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar showZilpay;\nvar dashboardState;\nvar modalDashboard;\nvar showZilpayDomain = (0,effector__WEBPACK_IMPORTED_MODULE_0__.createDomain)();\nvar updateShowZilpay = showZilpayDomain.createEvent();\nvar $showZilpay = showZilpayDomain.createStore(false).on(updateShowZilpay, function(_, payload) {\n    return payload;\n});\nvar dashboardStateDomain = (0,effector__WEBPACK_IMPORTED_MODULE_0__.createDomain)();\nvar updateDashboardState = dashboardStateDomain.createEvent();\nvar $dashboardState = dashboardStateDomain.createStore(null).on(updateDashboardState, function(_, payload) {\n    return payload;\n});\nvar modalDashboardDomain = (0,effector__WEBPACK_IMPORTED_MODULE_0__.createDomain)();\nvar updateModalDashboard = modalDashboardDomain.createEvent();\nvar $modalDashboard = modalDashboardDomain.createStore(false);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kYWwudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsR0FBRyxDQUFDQyxVQUFVO0FBQ2QsR0FBRyxDQUFDQyxjQUFjO0FBQ2xCLEdBQUcsQ0FBQ0MsY0FBYztBQUV6QixHQUFLLENBQUNDLGdCQUFnQixHQUFHSixzREFBWTtBQUM5QixHQUFLLENBQUNLLGdCQUFnQixHQUFHRCxnQkFBZ0IsQ0FBQ0UsV0FBVztBQUNyRCxHQUFLLENBQUNDLFdBQVcsR0FBR0gsZ0JBQWdCLENBQ3RDSSxXQUFXLENBQWtCLEtBQUssRUFDbENDLEVBQUUsQ0FBQ0osZ0JBQWdCLEVBQUUsUUFBUSxDQUFQSyxDQUFDLEVBQUVDLE9BQU87SUFBS0EsTUFBTSxDQUFOQSxPQUFPOztBQUVqRCxHQUFLLENBQUNDLG9CQUFvQixHQUFHWixzREFBWTtBQUNsQyxHQUFLLENBQUNhLG9CQUFvQixHQUFHRCxvQkFBb0IsQ0FBQ04sV0FBVztBQUM3RCxHQUFLLENBQUNRLGVBQWUsR0FBR0Ysb0JBQW9CLENBQzlDSixXQUFXLENBQWEsSUFBSSxFQUM1QkMsRUFBRSxDQUFDSSxvQkFBb0IsRUFBRSxRQUFRLENBQVBILENBQUMsRUFBRUMsT0FBTztJQUFLQSxNQUFNLENBQU5BLE9BQU87O0FBRXJELEdBQUssQ0FBQ0ksb0JBQW9CLEdBQUdmLHNEQUFZO0FBQ2xDLEdBQUssQ0FBQ2dCLG9CQUFvQixHQUFHRCxvQkFBb0IsQ0FBQ1QsV0FBVztBQUc3RCxHQUFLLENBQUNXLGVBQWUsR0FBR0Ysb0JBQW9CLENBQzlDUCxXQUFXLENBQWtCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL21vZGFsLnRzP2RjYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRG9tYWluIH0gZnJvbSAnZWZmZWN0b3InXG5cbmV4cG9ydCBsZXQgc2hvd1ppbHBheTogYm9vbGVhblxuZXhwb3J0IGxldCBkYXNoYm9hcmRTdGF0ZTogYW55XG5leHBvcnQgbGV0IG1vZGFsRGFzaGJvYXJkOiBib29sZWFuXG5cbmNvbnN0IHNob3daaWxwYXlEb21haW4gPSBjcmVhdGVEb21haW4oKVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNob3daaWxwYXkgPSBzaG93WmlscGF5RG9tYWluLmNyZWF0ZUV2ZW50PGJvb2xlYW4gfCBmYWxzZT4oKVxuZXhwb3J0IGNvbnN0ICRzaG93WmlscGF5ID0gc2hvd1ppbHBheURvbWFpblxuICAgIC5jcmVhdGVTdG9yZTxib29sZWFuIHwgZmFsc2U+KGZhbHNlKVxuICAgIC5vbih1cGRhdGVTaG93WmlscGF5LCAoXywgcGF5bG9hZCkgPT4gcGF5bG9hZClcblxuY29uc3QgZGFzaGJvYXJkU3RhdGVEb21haW4gPSBjcmVhdGVEb21haW4oKVxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhc2hib2FyZFN0YXRlID0gZGFzaGJvYXJkU3RhdGVEb21haW4uY3JlYXRlRXZlbnQ8YW55PigpXG5leHBvcnQgY29uc3QgJGRhc2hib2FyZFN0YXRlID0gZGFzaGJvYXJkU3RhdGVEb21haW5cbiAgICAuY3JlYXRlU3RvcmU8YW55IHwgbnVsbD4obnVsbClcbiAgICAub24odXBkYXRlRGFzaGJvYXJkU3RhdGUsIChfLCBwYXlsb2FkKSA9PiBwYXlsb2FkKVxuXG5jb25zdCBtb2RhbERhc2hib2FyZERvbWFpbiA9IGNyZWF0ZURvbWFpbigpXG5leHBvcnQgY29uc3QgdXBkYXRlTW9kYWxEYXNoYm9hcmQgPSBtb2RhbERhc2hib2FyZERvbWFpbi5jcmVhdGVFdmVudDxcbiAgICBib29sZWFuIHwgZmFsc2Vcbj4oKVxuZXhwb3J0IGNvbnN0ICRtb2RhbERhc2hib2FyZCA9IG1vZGFsRGFzaGJvYXJkRG9tYWluXG4gICAgLmNyZWF0ZVN0b3JlPGJvb2xlYW4gfCBmYWxzZT4oZmFsc2UpXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVEb21haW4iLCJzaG93WmlscGF5IiwiZGFzaGJvYXJkU3RhdGUiLCJtb2RhbERhc2hib2FyZCIsInNob3daaWxwYXlEb21haW4iLCJ1cGRhdGVTaG93WmlscGF5IiwiY3JlYXRlRXZlbnQiLCIkc2hvd1ppbHBheSIsImNyZWF0ZVN0b3JlIiwib24iLCJfIiwicGF5bG9hZCIsImRhc2hib2FyZFN0YXRlRG9tYWluIiwidXBkYXRlRGFzaGJvYXJkU3RhdGUiLCIkZGFzaGJvYXJkU3RhdGUiLCJtb2RhbERhc2hib2FyZERvbWFpbiIsInVwZGF0ZU1vZGFsRGFzaGJvYXJkIiwiJG1vZGFsRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/modal.ts\n'
            )

            /***/
        },
})
