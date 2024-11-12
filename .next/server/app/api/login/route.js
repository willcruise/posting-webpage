/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2Fworkspaces%2Fposting-webpage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fposting-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2Fworkspaces%2Fposting-webpage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fposting-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_posting_webpage_src_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/login/route.ts */ \"(rsc)/./src/app/api/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"/workspaces/posting-webpage/src/app/api/login/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_posting_webpage_src_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGcG9zdGluZy13ZWJwYWdlJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZ3b3Jrc3BhY2VzJTJGcG9zdGluZy13ZWJwYWdlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNNO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8/NjgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvcG9zdGluZy13ZWJwYWdlL3NyYy9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi93b3Jrc3BhY2VzL3Bvc3Rpbmctd2VicGFnZS9zcmMvYXBwL2FwaS9sb2dpbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2Fworkspaces%2Fposting-webpage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fposting-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/login/route.ts":
/*!************************************!*\
  !*** ./src/app/api/login/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_hash_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/hash.ts */ \"(rsc)/./src/utils/hash.ts\");\n\n\n\nfunction handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'loginroute.json');\n    if (req.method !== \"POST\") {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n        return;\n    }\n    try {\n        const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        const jsonData = JSON.parse(data);\n        const newData = req.body;\n        const checkId = newData.id;\n        const checkPw = newData.Password;\n        if (typeof checkId !== \"string\" || typeof checkPw !== \"string\") {\n            res.status(400).json({\n                validate: false,\n                message: \"Invalid input format\"\n            });\n            return;\n        }\n        const firstLetter = Array.from(checkId)[0];\n        const idData = jsonData.id[firstLetter];\n        const pwData = jsonData.password;\n        for(const accid in idData){\n            if (accid == checkId) {\n                const hashedId = (0,_utils_hash_ts__WEBPACK_IMPORTED_MODULE_2__.sha256Hash)(newData.id);\n                if (newData.password == pwData[hashedId]) {\n                    res.status(200).json({\n                        validate: true,\n                        message: \"Sign in Successfule\"\n                    });\n                    return;\n                } else {\n                    res.status(200).json({\n                        validate: false,\n                        message: \"Incorrect password\"\n                    });\n                    return;\n                }\n            }\n        }\n        res.status(200).json({\n            validate: false,\n            message: \"No account, please sign up\"\n        });\n        return;\n    } catch (error) {\n        res.status(500).json({\n            error: \"Failed to read file\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dpbi9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUU0QjtBQUVyQyxTQUFTRyxRQUFRQyxHQUFrQixFQUFFQyxHQUFtQjtJQUNyRSxNQUFNQyxXQUFXTCxnREFBUyxDQUFDTyxRQUFRQyxHQUFHLElBQUk7SUFHMUMsSUFBSUwsSUFBSU0sTUFBTSxLQUFLLFFBQVE7UUFDekJMLElBQUlNLFNBQVMsQ0FBQyxTQUFTO1lBQUM7U0FBTztRQUMvQk4sSUFBSU8sTUFBTSxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRVQsSUFBSU0sTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN0RDtJQUNGO0lBRUEsSUFBSTtRQUVBLE1BQU1JLE9BQU9kLHNEQUFlLENBQUNNLFVBQVU7UUFDdkMsTUFBTVUsV0FBV0MsS0FBS0MsS0FBSyxDQUFDSjtRQUM1QixNQUFNSyxVQUFVZixJQUFJZ0IsSUFBSTtRQUV4QixNQUFNQyxVQUFVRixRQUFRRyxFQUFFO1FBQzFCLE1BQU1DLFVBQVNKLFFBQVFLLFFBQVE7UUFHL0IsSUFBRyxPQUFPSCxZQUFZLFlBQVksT0FBT0UsWUFBWSxVQUFTO1lBQzVEbEIsSUFBSU8sTUFBTSxDQUFDLEtBQUthLElBQUksQ0FBQztnQkFBQ0MsVUFBUztnQkFBUUMsU0FBUztZQUF1QjtZQUN2RTtRQUNGO1FBRUEsTUFBTUMsY0FBY0MsTUFBTUMsSUFBSSxDQUFDVCxRQUFRLENBQUMsRUFBRTtRQUUxQyxNQUFNVSxTQUFTZixTQUFTTSxFQUFFLENBQUNNLFlBQVk7UUFDdkMsTUFBTUksU0FBU2hCLFNBQVNpQixRQUFRO1FBQ2hDLElBQUssTUFBTUMsU0FBU0gsT0FBTztZQUN6QixJQUFHRyxTQUFTYixTQUFRO2dCQUNoQixNQUFNYyxXQUFrQmpDLDBEQUFVQSxDQUFDaUIsUUFBUUcsRUFBRTtnQkFDN0MsSUFBSUgsUUFBUWMsUUFBUSxJQUFJRCxNQUFNLENBQUNHLFNBQVMsRUFBQztvQkFDdkM5QixJQUFJTyxNQUFNLENBQUMsS0FBS2EsSUFBSSxDQUFDO3dCQUFDQyxVQUFTO3dCQUFNQyxTQUFRO29CQUFxQjtvQkFDbEU7Z0JBQ0YsT0FBSztvQkFDSHRCLElBQUlPLE1BQU0sQ0FBQyxLQUFLYSxJQUFJLENBQUM7d0JBQUNDLFVBQVM7d0JBQU9DLFNBQVE7b0JBQW9CO29CQUNsRTtnQkFDQTtZQUNOO1FBQ0Y7UUFDQXRCLElBQUlPLE1BQU0sQ0FBQyxLQUFLYSxJQUFJLENBQUM7WUFBQ0MsVUFBUztZQUFPQyxTQUFRO1FBQTRCO1FBQ3BFO0lBRVIsRUFBRSxPQUFPUyxPQUFPO1FBQ2QvQixJQUFJTyxNQUFNLENBQUMsS0FBS2EsSUFBSSxDQUFDO1lBQUVXLE9BQU87UUFBc0I7SUFDdEQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzP2MxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBzaGEyNTZIYXNoIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2hhc2gudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6TmV4dEFwaVJlcXVlc3QsIHJlczpOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2xvZ2lucm91dGUuanNvbicpO1xuXG4gIFxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiUE9TVFwiXSk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuXG4gICAgICBjb25zdCBkYXRhID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xuICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgICBjb25zdCBjaGVja0lkID0gbmV3RGF0YS5pZDtcbiAgICAgIGNvbnN0IGNoZWNrUHc9IG5ld0RhdGEuUGFzc3dvcmQ7XG5cblxuICAgICAgaWYodHlwZW9mIGNoZWNrSWQgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGNoZWNrUHcgIT09IFwic3RyaW5nXCIpe1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7dmFsaWRhdGU6ZmFsc2UsICBtZXNzYWdlOiBcIkludmFsaWQgaW5wdXQgZm9ybWF0XCIgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBBcnJheS5mcm9tKGNoZWNrSWQpWzBdOyBcblxuICAgICAgY29uc3QgaWREYXRhID0ganNvbkRhdGEuaWRbZmlyc3RMZXR0ZXJdO1xuICAgICAgY29uc3QgcHdEYXRhID0ganNvbkRhdGEucGFzc3dvcmQ7XG4gICAgICBmb3IgKGNvbnN0IGFjY2lkIGluIGlkRGF0YSl7XG4gICAgICAgIGlmKGFjY2lkID09IGNoZWNrSWQpe1xuICAgICAgICAgICAgY29uc3QgaGFzaGVkSWQ6c3RyaW5nID0gc2hhMjU2SGFzaChuZXdEYXRhLmlkKTtcbiAgICAgICAgICAgIGlmIChuZXdEYXRhLnBhc3N3b3JkID09IHB3RGF0YVtoYXNoZWRJZF0pe1xuICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dmFsaWRhdGU6dHJ1ZSwgbWVzc2FnZTpcIlNpZ24gaW4gU3VjY2Vzc2Z1bGVcIn0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3ZhbGlkYXRlOmZhbHNlLCBtZXNzYWdlOlwiSW5jb3JyZWN0IHBhc3N3b3JkXCJ9KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt2YWxpZGF0ZTpmYWxzZSwgbWVzc2FnZTpcIk5vIGFjY291bnQsIHBsZWFzZSBzaWduIHVwXCJ9KTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byByZWFkIGZpbGVcIiB9KTtcbiAgICB9XG59XG5cblxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsInNoYTI1Nkhhc2giLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsIm1ldGhvZCIsInNldEhlYWRlciIsInN0YXR1cyIsImVuZCIsImRhdGEiLCJyZWFkRmlsZVN5bmMiLCJqc29uRGF0YSIsIkpTT04iLCJwYXJzZSIsIm5ld0RhdGEiLCJib2R5IiwiY2hlY2tJZCIsImlkIiwiY2hlY2tQdyIsIlBhc3N3b3JkIiwianNvbiIsInZhbGlkYXRlIiwibWVzc2FnZSIsImZpcnN0TGV0dGVyIiwiQXJyYXkiLCJmcm9tIiwiaWREYXRhIiwicHdEYXRhIiwicGFzc3dvcmQiLCJhY2NpZCIsImhhc2hlZElkIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/hash.ts":
/*!***************************!*\
  !*** ./src/utils/hash.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sha256Hash: () => (/* binding */ sha256Hash)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sha256Hash = (id)=>{\n    return (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)('sha256').update(id).digest('hex');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvaGFzaC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFN0IsTUFBTUMsYUFBYSxDQUFDQztJQUN2QixPQUFPRixrREFBVUEsQ0FBQyxVQUFVRyxNQUFNLENBQUNELElBQUlFLE1BQU0sQ0FBQztBQUNsRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2hhc2gudHM/Y2ZlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGNvbnN0IHNoYTI1Nkhhc2ggPSAoaWQ6c3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShpZCkuZGlnZXN0KCdoZXgnKTtcbn0gXG4iXSwibmFtZXMiOlsiY3JlYXRlSGFzaCIsInNoYTI1Nkhhc2giLCJpZCIsInVwZGF0ZSIsImRpZ2VzdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/hash.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2Fworkspaces%2Fposting-webpage%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fposting-webpage&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();