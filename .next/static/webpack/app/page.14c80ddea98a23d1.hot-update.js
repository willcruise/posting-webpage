"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/login/loginform.tsx":
/*!*************************************!*\
  !*** ./src/app/login/loginform.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _loginbutton_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginbutton.tsx */ \"(app-pages-browser)/./src/app/login/loginbutton.tsx\");\n/* harmony import */ var _components_password_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/password.tsx */ \"(app-pages-browser)/./src/components/password.tsx\");\n/* harmony import */ var _components_id_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/id.tsx */ \"(app-pages-browser)/./src/components/id.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_currentacc_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/currentacc.ts */ \"(app-pages-browser)/./src/utils/currentacc.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction LoginForm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    async function loginAccount(event) {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        const Data = Object.fromEntries(formData.entries());\n        const idstr = Data.id;\n        const pwstr = Data.password;\n        if (typeof idstr !== \"string\") {\n            alert(\"Invalid input\");\n            return;\n        }\n        const checkacc = {\n            id: idstr,\n            password: pwstr\n        };\n        const response = await fetch(\"/api/login/\", {\n            method: \"POST\",\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(checkacc)\n        });\n        if (!response.ok) {\n            const errorText = await response.text(); // Get response text for debugging\n            console.error('Error response:', errorText);\n            throw new Error(\"HTTP error! status: \".concat(response.status));\n        }\n        const value = await response.json();\n        const validate = value.validate;\n        if (validate) {\n            (0,_utils_currentacc_ts__WEBPACK_IMPORTED_MODULE_6__.setIsLoggedIn)(true);\n            (0,_utils_currentacc_ts__WEBPACK_IMPORTED_MODULE_6__.setId)(idstr);\n            (0,_utils_currentacc_ts__WEBPACK_IMPORTED_MODULE_6__.setPassword)(pwstr);\n            alert(\"Login successful\");\n            router.push(\"/src/mainpage/mainpage.tsx\");\n        } else {\n            alert(\"Login failed\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"POST\",\n        id: \"login-form\",\n        onSubmit: loginAccount,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"logininputs\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_id_tsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_password_tsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loginbuttons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loginbutton_tsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/posting-webpage/src/app/login/loginform.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginForm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = LoginForm;\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vbG9naW5mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNDO0FBQ1M7QUFDWjtBQUNmO0FBQ2dDO0FBQ1I7QUFDTTtBQU96QyxTQUFTUTs7SUFDcEIsTUFBTUMsU0FBU1QsMERBQVNBO0lBRXhCLGVBQWVVLGFBQWFDLEtBQXNDO1FBQzlEQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsTUFBTUksYUFBYTtRQUNqRCxNQUFNQyxPQUFPQyxPQUFPQyxXQUFXLENBQUNMLFNBQVNNLE9BQU87UUFDaEQsTUFBTUMsUUFBUUosS0FBS0ssRUFBRTtRQUNyQixNQUFNQyxRQUFRTixLQUFLTyxRQUFRO1FBRTNCLElBQUksT0FBT0gsVUFBVSxVQUFTO1lBQzFCSSxNQUFNO1lBQ047UUFDSjtRQUVBLE1BQU1DLFdBQVc7WUFBQ0osSUFBR0Q7WUFBT0csVUFBU0Q7UUFBSztRQUUxQyxNQUFNSSxXQUFXLE1BQU1DLE1BQU0sZUFBZTtZQUMxQ0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1FBQ3ZCO1FBR0EsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7WUFDaEIsTUFBTUMsWUFBWSxNQUFNUixTQUFTUyxJQUFJLElBQUksa0NBQWtDO1lBQzNFQyxRQUFRQyxLQUFLLENBQUMsbUJBQW1CSDtZQUNqQyxNQUFNLElBQUlJLE1BQU0sdUJBQXVDLE9BQWhCWixTQUFTYSxNQUFNO1FBQzFEO1FBRUUsTUFBTUMsUUFBaUIsTUFBTWQsU0FBU2UsSUFBSTtRQUUxQyxNQUFNQyxXQUFtQkYsTUFBTUUsUUFBUTtRQUV2QyxJQUFJQSxVQUFTO1lBQ1hyQyxtRUFBYUEsQ0FBQztZQUNkQywyREFBS0EsQ0FBQ2M7WUFDTmIsaUVBQVdBLENBQUNlO1lBQ1pFLE1BQU07WUFDTmYsT0FBT2tDLElBQUksQ0FBQztRQUNkLE9BQUs7WUFDSG5CLE1BQU07UUFDUjtJQUNGO0lBRUYscUJBQ0ksOERBQUNvQjtRQUFLaEIsUUFBUztRQUFPUCxJQUFLO1FBQWF3QixVQUFXbkM7a0JBQy9DLDRFQUFDb0M7WUFBSXpCLElBQUs7OzhCQUNOLDhEQUFDMEI7OEJBQUU7Ozs7Ozs4QkFDSCw4REFBQ0M7Ozs7OzhCQUNELDhEQUFDN0MsMERBQUVBOzs7Ozs4QkFDSCw4REFBQzZDOzs7Ozs4QkFDRCw4REFBQzlDLGdFQUFRQTs7Ozs7OEJBQ1QsOERBQUM0QztvQkFBSUcsV0FBWTs7c0NBQ2IsOERBQUNEOzs7OztzQ0FDRCw4REFBQy9DLHdEQUFXQTs7Ozs7c0NBQ1osOERBQUMrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQS9Ed0J4Qzs7UUFDTFIsc0RBQVNBOzs7S0FESlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luZm9ybS50c3g/ZmE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiIFxuaW1wb3J0IExvZ2luQnV0dG9uIGZyb20gXCIuL2xvZ2luYnV0dG9uLnRzeFwiO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Bhc3N3b3JkLnRzeFwiO1xuaW1wb3J0IElkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2lkLnRzeFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNldElzTG9nZ2VkSW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvY3VycmVudGFjYy50c1wiO1xuaW1wb3J0IHsgc2V0SWQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY3VycmVudGFjYy50c1wiO1xuaW1wb3J0IHsgc2V0UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY3VycmVudGFjYy50c1wiO1xuXG5cblxudHlwZSBjaGVja09iaiA9IHt2YWxpZGF0ZTpib29sZWFuLCBtZXNzYWdlOnN0cmluZ31cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oKXtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ2luQWNjb3VudChldmVudDpSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pil7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBEYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSlcbiAgICAgICAgY29uc3QgaWRzdHIgPSBEYXRhLmlkO1xuICAgICAgICBjb25zdCBwd3N0ciA9IERhdGEucGFzc3dvcmQgYXMgc3RyaW5nO1xuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBpZHN0ciAhPT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICBhbGVydChcIkludmFsaWQgaW5wdXRcIik7XG4gICAgICAgICAgICByZXR1cm4gICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja2FjYyA9IHtpZDppZHN0ciwgcGFzc3dvcmQ6cHdzdHJ9O1xuICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luL1wiLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sIFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNoZWNrYWNjKSxcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7IC8vIEdldCByZXNwb25zZSB0ZXh0IGZvciBkZWJ1Z2dpbmdcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgdmFsdWU6Y2hlY2tPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGU6Ym9vbGVhbiA9IHZhbHVlLnZhbGlkYXRlIDtcblxuICAgICAgICBpZiAodmFsaWRhdGUpe1xuICAgICAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgICAgICAgc2V0SWQoaWRzdHIpO1xuICAgICAgICAgIHNldFBhc3N3b3JkKHB3c3RyKTtcbiAgICAgICAgICBhbGVydChcIkxvZ2luIHN1Y2Nlc3NmdWxcIik7ICBcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9zcmMvbWFpbnBhZ2UvbWFpbnBhZ2UudHN4XCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGFsZXJ0KFwiTG9naW4gZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIG1ldGhvZCA9IFwiUE9TVFwiIGlkID0gXCJsb2dpbi1mb3JtXCIgb25TdWJtaXQgPXtsb2dpbkFjY291bnR9PlxuICAgICAgICAgICAgPGRpdiBpZCA9ICdsb2dpbmlucHV0cyc+XG4gICAgICAgICAgICAgICAgPHA+U2lnbiBpbjwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxJZC8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmQvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ2xvZ2luYnV0dG9ucyc+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxMb2dpbkJ1dHRvbi8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTG9naW5CdXR0b24iLCJQYXNzd29yZCIsIklkIiwiUmVhY3QiLCJzZXRJc0xvZ2dlZEluIiwic2V0SWQiLCJzZXRQYXNzd29yZCIsIkxvZ2luRm9ybSIsInJvdXRlciIsImxvZ2luQWNjb3VudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsIkRhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJpZHN0ciIsImlkIiwicHdzdHIiLCJwYXNzd29yZCIsImFsZXJ0IiwiY2hlY2thY2MiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvclRleHQiLCJ0ZXh0IiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXMiLCJ2YWx1ZSIsImpzb24iLCJ2YWxpZGF0ZSIsInB1c2giLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJwIiwiYnIiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/loginform.tsx\n"));

/***/ })

});