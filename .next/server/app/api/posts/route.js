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
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Projects_next_mongo_nextjs_mongodb_src_app_api_posts_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/posts/route.tsx */ \"(rsc)/./src/app/api/posts/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\api\\\\posts\\\\route.tsx\",\n    nextConfigOutput,\n    userland: C_Projects_next_mongo_nextjs_mongodb_src_app_api_posts_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLnRzeCZhcHBEaXI9QyUzQSU1Q1Byb2plY3RzJTVDbmV4dC1tb25nbyU1Q25leHRqcy1tb25nb2RiJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDUHJvamVjdHMlNUNuZXh0LW1vbmdvJTVDbmV4dGpzLW1vbmdvZGImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxQcm9qZWN0c1xcXFxuZXh0LW1vbmdvXFxcXG5leHRqcy1tb25nb2RiXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHBvc3RzXFxcXHJvdXRlLnRzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcG9zdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wb3N0c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcG9zdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxQcm9qZWN0c1xcXFxuZXh0LW1vbmdvXFxcXG5leHRqcy1tb25nb2RiXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHBvc3RzXFxcXHJvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/posts/route.tsx":
/*!*************************************!*\
  !*** ./src/app/api/posts/route.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _model_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/posts */ \"(rsc)/./src/model/posts.ts\");\n\n\nasync function GET() {\n    try {\n        console.log('Testing database connection...');\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        console.log('Database connected successfully.');\n        const posts = await _model_posts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        console.log('Fetched posts:', posts);\n        return new Response(JSON.stringify({\n            posts\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        let errorMessage = 'An unknown error occurred';\n        if (error instanceof Error) {\n            console.error('Database connection error:', error.message);\n            errorMessage = error.message; // Safely extract the error message\n        } else {\n            console.error('Unknown error connecting database');\n        }\n        return new Response(JSON.stringify({\n            error: errorMessage\n        }), {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const newPost = await _model_posts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(body);\n        return new Response(JSON.stringify(newPost), {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Error creating post:', error);\n        return new Response(JSON.stringify({\n            error: 'Failed to create post'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wb3N0cy9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUNDO0FBRzNCLGVBQWVFO0lBQ2xCLElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUosbURBQVNBO1FBQ2ZHLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1DLFFBQVEsTUFBTUosb0RBQUtBLENBQUNLLElBQUk7UUFDOUJILFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JDO1FBRTlCLE9BQU8sSUFBSUUsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVKO1FBQU0sSUFBSTtZQUFFSyxRQUFRO1FBQUk7SUFDL0QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsSUFBSUMsZUFBZTtRQUVuQixJQUFJRCxpQkFBaUJFLE9BQU87WUFDMUJWLFFBQVFRLEtBQUssQ0FBQyw4QkFBOEJBLE1BQU1HLE9BQU87WUFDekRGLGVBQWVELE1BQU1HLE9BQU8sRUFBRSxtQ0FBbUM7UUFDbkUsT0FBTztZQUNMWCxRQUFRUSxLQUFLLENBQUM7UUFDaEI7UUFFQSxPQUFPLElBQUlKLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFRSxPQUFPQztRQUFhLElBQUk7WUFBRUYsUUFBUTtRQUFJO0lBQzdFO0FBQ0Y7QUFHTyxlQUFlSyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO1FBQzNCLE1BQU1sQixtREFBU0E7UUFDZixNQUFNbUIsVUFBVSxNQUFNbEIsb0RBQUtBLENBQUNtQixNQUFNLENBQUNIO1FBQ25DLE9BQU8sSUFBSVYsU0FBU0MsS0FBS0MsU0FBUyxDQUFDVSxVQUFVO1lBQUVULFFBQVE7UUFBSTtJQUM3RCxFQUFFLE9BQU9DLE9BQU87UUFDZFIsUUFBUVEsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsT0FBTyxJQUFJSixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUUsT0FBTztRQUF3QixJQUFJO1lBQUVELFFBQVE7UUFBSTtJQUN4RjtBQUNGIiwic291cmNlcyI6WyJDOlxcUHJvamVjdHNcXG5leHQtbW9uZ29cXG5leHRqcy1tb25nb2RiXFxzcmNcXGFwcFxcYXBpXFxwb3N0c1xccm91dGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiQC9tb2RlbC9wb3N0c1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUZXN0aW5nIGRhdGFiYXNlIGNvbm5lY3Rpb24uLi4nKTtcclxuICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gIFxyXG4gICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RzLmZpbmQoKTtcclxuICAgICAgY29uc29sZS5sb2coJ0ZldGNoZWQgcG9zdHM6JywgcG9zdHMpO1xyXG4gIFxyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgcG9zdHMgfSksIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnO1xyXG4gIFxyXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTsgLy8gU2FmZWx5IGV4dHJhY3QgdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGVycm9yIGNvbm5lY3RpbmcgZGF0YWJhc2UnKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yTWVzc2FnZSB9KSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgY29uc3QgbmV3UG9zdCA9IGF3YWl0IFBvc3RzLmNyZWF0ZShib2R5KTtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShuZXdQb3N0KSwgeyBzdGF0dXM6IDIwMSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHBvc3Q6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIHBvc3QnIH0pLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiUG9zdHMiLCJHRVQiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJmaW5kIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsIm1lc3NhZ2UiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJuZXdQb3N0IiwiY3JlYXRlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/posts/route.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nconst MONGODB_URI = process.env.MONGO_URI;\nconsole.log(MONGODB_URI);\nif (!MONGODB_URI) {\n    throw new Error('Mongodb uri is not defined');\n}\nlet cached = global.mongoose;\nconsole.log(cached);\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log('Db connected');\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        if (e instanceof Error) {\n            console.error('Database connection error', e.message);\n        } else {\n            console.error(\"Unknown error during database connection\");\n        }\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dDO0FBQ0o7QUFFNUJDLG9EQUFhO0FBUWIsTUFBTUUsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ3pDQyxRQUFRQyxHQUFHLENBQUNMO0FBRVosSUFBSSxDQUFDQSxhQUFhO0lBQ2QsTUFBTSxJQUFJTSxNQUFNO0FBQ3BCO0FBRUEsSUFBSUMsU0FBU0MsT0FBT1gsUUFBUTtBQUM1Qk8sUUFBUUMsR0FBRyxDQUFDRTtBQUVaLElBQUksQ0FBQ0EsUUFBUTtJQUNUQSxTQUFTQyxPQUFPWCxRQUFRLEdBQUc7UUFBRVksTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDM0Q7QUFFQSxlQUFlQztJQUNYLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNiLE9BQU9GLE9BQU9FLElBQUk7SUFDdEI7SUFDQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNqQixNQUFNRSxPQUFPO1lBQ1RDLGdCQUFnQjtRQUNwQjtRQUNBTixPQUFPRyxPQUFPLEdBQUdiLHVEQUFnQixDQUFDRyxhQUFhWSxNQUFNRyxJQUFJLENBQUNsQixDQUFBQTtZQUN0RE8sUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT1I7UUFDWDtJQUNKO0lBRUEsSUFBSTtRQUNBVSxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUV0QyxFQUFFLE9BQU9NLEdBQUc7UUFDUlQsT0FBT0csT0FBTyxHQUFHO1FBRWpCLElBQUlNLGFBQWFWLE9BQU87WUFDcEJGLFFBQVFhLEtBQUssQ0FBQyw2QkFBNkJELEVBQUVFLE9BQU87UUFDeEQsT0FBTztZQUNIZCxRQUFRYSxLQUFLLENBQUM7UUFDbEI7UUFFRCxNQUFNRDtJQUNUO0lBQ0EsT0FBT1QsT0FBT0UsSUFBSTtBQUN0QjtBQUVJLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUHJvamVjdHNcXG5leHQtbW9uZ29cXG5leHRqcy1tb25nb2RiXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuZG90ZW52LmNvbmZpZygpO1xyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICB2YXIgbW9uZ29vc2U6IHtcclxuICAgICAgICBjb25uOiBtb25nb29zZS5Db25uZWN0aW9uIHwgbnVsbDtcclxuICAgICAgICBwcm9taXNlOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfCBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT19VUkkgYXMgc3RyaW5nO1xyXG5jb25zb2xlLmxvZyhNT05HT0RCX1VSSSk7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01vbmdvZGIgdXJpIGlzIG5vdCBkZWZpbmVkJyk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgYXMgeyBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsOyBwcm9taXNlOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfCBudWxsIH07XHJcbmNvbnNvbGUubG9nKGNhY2hlZCk7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gICAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB7XHJcbiAgICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4obW9uZ29vc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGIgY29ubmVjdGVkJylcclxuICAgICAgICAgICAgcmV0dXJuIG1vbmdvb3NlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIGVycm9yJywgZS5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5rbm93biBlcnJvciBkdXJpbmcgZGF0YWJhc2UgY29ubmVjdGlvblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgdGhyb3cgZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkb3RlbnYiLCJjb25maWciLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSIsImVycm9yIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/posts.ts":
/*!****************************!*\
  !*** ./src/model/posts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n//schema for user model\nconst PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    detail: {\n        type: String,\n        required: true\n    },\n    author: {\n        type: String,\n        required: true\n    },\n    age: {\n        type: String,\n        required: true\n    }\n});\nconst Posts = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Posts || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Posts', PostSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvcG9zdHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBVzNELHVCQUF1QjtBQUN2QixNQUFNRSxhQUE0QixJQUFJRCw0Q0FBTUEsQ0FBQztJQUN6Q0UsT0FBTztRQUFDQyxNQUFNQztRQUFRQyxVQUFVO0lBQUk7SUFDcENDLFFBQVE7UUFBQ0gsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3JDRSxRQUFRO1FBQUNKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSTtJQUNyQ0csS0FBSztRQUFDTCxNQUFNQztRQUFRQyxVQUFVO0lBQUk7QUFDdEM7QUFFQSxNQUFNSSxRQUFzQlYsd0RBQWUsQ0FBQ1UsS0FBSyxJQUFJVixxREFBYyxDQUFRLFNBQVFFO0FBQ25GLGlFQUFlUSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUHJvamVjdHNcXG5leHQtbW9uZ29cXG5leHRqcy1tb25nb2RiXFxzcmNcXG1vZGVsXFxwb3N0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgLHtEb2N1bWVudCwgTW9kZWwsIFNjaGVtYX0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuLy9pbnRlcmZhY2UgZm9yIHVzZXIgZG9jdW1lbnRcclxuaW50ZXJmYWNlIElQb3N0IGV4dGVuZHMgRG9jdW1lbnQge1xyXG5cclxuICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICBkZXRhaWw6IFN0cmluZyxcclxuICAgIGF1dGhvcjogU3RyaW5nLFxyXG4gICAgYWdlOiBTdHJpbmcsXHJcbn1cclxuXHJcbi8vc2NoZW1hIGZvciB1c2VyIG1vZGVsXHJcbmNvbnN0IFBvc3RTY2hlbWE6IFNjaGVtYTxJUG9zdD4gPSBuZXcgU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBkZXRhaWw6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGF1dGhvcjoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgYWdlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX1cclxufSlcclxuXHJcbmNvbnN0IFBvc3RzOiBNb2RlbDxJUG9zdD4gPSBtb25nb29zZS5tb2RlbHMuUG9zdHMgfHwgbW9uZ29vc2UubW9kZWw8SVBvc3Q+KCdQb3N0cycsUG9zdFNjaGVtYSApO1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJQb3N0U2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXRhaWwiLCJhdXRob3IiLCJhZ2UiLCJQb3N0cyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/model/posts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/dotenv"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.tsx&appDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CProjects%5Cnext-mongo%5Cnextjs-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();