"use strict";
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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_utkarshtemp_Documents_assigments_pokemon_search_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/utkarshtemp/Documents/assigments/pokemon-search-app/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_utkarshtemp_Documents_assigments_pokemon_search_app_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnV0a2Fyc2h0ZW1wJTJGRG9jdW1lbnRzJTJGYXNzaWdtZW50cyUyRnBva2Vtb24tc2VhcmNoLWFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ1dGthcnNodGVtcCUyRkRvY3VtZW50cyUyRmFzc2lnbWVudHMlMkZwb2tlbW9uLXNlYXJjaC1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tEO0FBQy9IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi1hcHAvPzliYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3V0a2Fyc2h0ZW1wL0RvY3VtZW50cy9hc3NpZ21lbnRzL3Bva2Vtb24tc2VhcmNoLWFwcC9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3V0a2Fyc2h0ZW1wL0RvY3VtZW50cy9hc3NpZ21lbnRzL3Bva2Vtb24tc2VhcmNoLWFwcC9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/user */ \"(rsc)/./src/lib/models/user.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                try {\n                    const user = await _lib_models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (!user) {\n                        console.log(\"User not found\");\n                        return null;\n                    }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.password);\n                    if (!isPasswordCorrect) {\n                        console.log(\"Incorrect password\");\n                        alert(\"Incorrect password\");\n                        return null;\n                    }\n                    // If authentication is successful, return the user object\n                    return user;\n                } catch (error) {\n                    throw new Error(error);\n                }\n            }\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_ID ?? \"\",\n            clientSecret: process.env.GITHUB_SECRET ?? \"\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider == \"credentials\") {\n                return true;\n            }\n            if (account?.provider == \"github\") {\n                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                try {\n                    const existingUser = await _lib_models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: user.email\n                    });\n                    if (!existingUser) {\n                        const newUser = new _lib_models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                            email: user.email\n                        });\n                        await newUser.save();\n                        return true;\n                    }\n                    return true;\n                } catch (error) {\n                    console.log(\"Error connecting\", error);\n                    return false;\n                }\n            }\n            return false;\n        },\n        async jwt ({ token, account }) {\n            if (account) {\n                token.jti = account.jti;\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.accessToken = token.accessToken;\n            session.jti = token.jti;\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_6__.cookies)().set(\"midToken\", session.jti);\n            return session;\n        }\n    },\n    events: {\n        signOut () {\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_6__.cookies)().delete(\"midToken\");\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n // export { GET, POST } from \"@/auth\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUV1QjtBQUNVO0FBQzdCO0FBQ047QUFDRDtBQUNTO0FBRS9CLE1BQU1PLGNBQWtCO0lBQzdCLGlEQUFpRDtJQUNqREMsV0FBVztRQUNUTiwyRUFBbUJBLENBQUM7WUFDaEJPLElBQUk7WUFDSkMsTUFBTTtZQUNOQyxhQUFhO2dCQUNiQyxPQUFPO29CQUFDQyxPQUFPO29CQUFRQyxNQUFLO2dCQUFNO2dCQUNsQ0MsVUFBVTtvQkFBQ0YsT0FBTztvQkFBV0MsTUFBSztnQkFBVTtZQUM1QztZQUVBLE1BQU1FLFdBQVVMLFdBQWU7Z0JBQzNCLE1BQU1QLG1EQUFPQTtnQkFDYixJQUFHO29CQUNDLE1BQU1hLE9BQU8sTUFBTWQsd0RBQUlBLENBQUNlLE9BQU8sQ0FBQzt3QkFBRU4sT0FBT0QsWUFBWUMsS0FBSztvQkFBQztvQkFDM0QsSUFBSSxDQUFDSyxNQUFNO3dCQUNURSxRQUFRQyxHQUFHLENBQUM7d0JBQ1osT0FBTztvQkFDVDtvQkFFQSxNQUFNQyxvQkFBb0IsTUFBTWhCLHVEQUFjLENBQUNNLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtvQkFDbEYsSUFBSSxDQUFDTSxtQkFBbUI7d0JBQ3RCRixRQUFRQyxHQUFHLENBQUM7d0JBQ1pHLE1BQU07d0JBQ04sT0FBTztvQkFDVDtvQkFFQSwwREFBMEQ7b0JBQzFELE9BQU9OO2dCQUNYLEVBQ0EsT0FBTU8sT0FBVTtvQkFFWixNQUFNLElBQUlDLE1BQU1EO2dCQUNwQjtZQUNKO1FBQ0o7UUFDQXZCLHNFQUFjQSxDQUFDO1lBQ2J5QixVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVMsSUFBSTtZQUNuQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhLElBQUk7UUFDN0M7S0FFRDtJQUVEQyxXQUFVO1FBQ1IsTUFBTUMsUUFBTyxFQUFDaEIsSUFBSSxFQUFDaUIsT0FBTyxFQUF1QztZQUMvRCxJQUFHQSxTQUFTQyxZQUFZLGVBQWM7Z0JBQ3BDLE9BQU87WUFDVDtZQUNBLElBQUdELFNBQVNDLFlBQVksVUFBUztnQkFDaEMsTUFBTS9CLG1EQUFPQTtnQkFFYixJQUFHO29CQUNGLE1BQU1nQyxlQUFlLE1BQU1qQyx3REFBSUEsQ0FBQ2UsT0FBTyxDQUFDO3dCQUFDTixPQUFPSyxLQUFLTCxLQUFLO29CQUFBO29CQUMxRCxJQUFHLENBQUN3QixjQUFhO3dCQUNmLE1BQU1DLFVBQVUsSUFBSWxDLHdEQUFJQSxDQUFDOzRCQUN2QlMsT0FBT0ssS0FBS0wsS0FBSzt3QkFDbkI7d0JBQ0EsTUFBTXlCLFFBQVFDLElBQUk7d0JBQ2xCLE9BQU87b0JBQ1Q7b0JBQ0EsT0FBTztnQkFFUixFQUFDLE9BQU1kLE9BQU07b0JBQ1ZMLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JJO29CQUNoQyxPQUFPO2dCQUNWO1lBQ0Q7WUFDQSxPQUFPO1FBQ1Q7UUFDQSxNQUFNZSxLQUFJLEVBQUVDLEtBQUssRUFBRU4sT0FBTyxFQUFNO1lBQzlCLElBQUlBLFNBQVM7Z0JBQ1hNLE1BQU1DLEdBQUcsR0FBR1AsUUFBUU8sR0FBRztnQkFDdkJELE1BQU1FLFdBQVcsR0FBR1IsUUFBUVMsWUFBWTtZQUMxQztZQUNBLE9BQU9IO1FBQ1Q7UUFDQSxNQUFNSSxTQUFRLEVBQUVBLE9BQU8sRUFBRUosS0FBSyxFQUFPO1lBQ25DSSxRQUFRRixXQUFXLEdBQUdGLE1BQU1FLFdBQVc7WUFDdkNFLFFBQVFILEdBQUcsR0FBR0QsTUFBTUMsR0FBRztZQUN2Qm5DLHFEQUFPQSxHQUFHdUMsR0FBRyxDQUFDLFlBQVlELFFBQVFILEdBQUc7WUFDckMsT0FBT0c7UUFDVDtJQUVGO0lBQ0FFLFFBQVE7UUFDTkM7WUFDSXpDLHFEQUFPQSxHQUFHMEMsTUFBTSxDQUFDO1FBQ3JCO0lBQ0Y7QUFDRixFQUFDO0FBRU0sTUFBTUMsVUFBVWpELGdEQUFRQSxDQUFDTyxhQUFhO0FBQ0YsQ0FLM0Msc0NBQXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZW1vbi1hcHAvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQge0FjY291bnQsIFVzZXIgYXMgQXV0aFVzZXJ9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9saWIvbW9kZWxzL3VzZXJcIlxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvbGliL2RiXCJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczphbnkgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHtsYWJlbDogXCJFbWFpbFwiLHR5cGU6J3RleHQnfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtsYWJlbDogXCJQYXNzd29yZFwiLHR5cGU6J3Bhc3N3b3JkJ31cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczphbnkpIHtcbiAgICAgICAgICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNlciBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGlmICghaXNQYXNzd29yZENvcnJlY3QpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmNvcnJlY3QgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KCdJbmNvcnJlY3QgcGFzc3dvcmQnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXV0aGVudGljYXRpb24gaXMgc3VjY2Vzc2Z1bCwgcmV0dXJuIHRoZSB1c2VyIG9iamVjdFxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZXJyb3I6YW55KXtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLFxuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgPz8gJycsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQgPz8gJycsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcblxuICBjYWxsYmFja3M6e1xuICAgIGFzeW5jIHNpZ25Jbih7dXNlcixhY2NvdW50fSA6IHsgdXNlcjogQXV0aFVzZXIgLCBhY2NvdW50OkFjY291bnR9KXtcbiAgICAgIGlmKGFjY291bnQ/LnByb3ZpZGVyID09IFwiY3JlZGVudGlhbHNcIil7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYoYWNjb3VudD8ucHJvdmlkZXIgPT0gXCJnaXRodWJcIil7XG4gICAgICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsOiB1c2VyLmVtYWlsfSlcbiAgICAgICAgaWYoIWV4aXN0aW5nVXNlcil7XG4gICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nXCIsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQgfTphbnkpIHtcbiAgICAgIGlmIChhY2NvdW50KSB7XG4gICAgICAgIHRva2VuLmp0aSA9IGFjY291bnQuanRpIGFzIHN0cmluZztcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlbiBhcyBzdHJpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfTogYW55KSB7XG4gICAgICBzZXNzaW9uLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW4gYXMgc3RyaW5nO1xuICAgICAgc2Vzc2lvbi5qdGkgPSB0b2tlbi5qdGkgYXMgc3RyaW5nO1xuICAgICAgY29va2llcygpLnNldCgnbWlkVG9rZW4nLCBzZXNzaW9uLmp0aSk7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gICAgXG4gIH0sXG4gIGV2ZW50czoge1xuICAgIHNpZ25PdXQoKSB7XG4gICAgICAgIGNvb2tpZXMoKS5kZWxldGUoXCJtaWRUb2tlblwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG5cblxuXG5cbi8vIGV4cG9ydCB7IEdFVCwgUE9TVCB9IGZyb20gXCJAL2F1dGhcIjsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJVc2VyIiwiY29ubmVjdCIsImJjcnlwdCIsImNvb2tpZXMiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImlkIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwiY29uc29sZSIsImxvZyIsImlzUGFzc3dvcmRDb3JyZWN0IiwiY29tcGFyZSIsImFsZXJ0IiwiZXJyb3IiLCJFcnJvciIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJleGlzdGluZ1VzZXIiLCJuZXdVc2VyIiwic2F2ZSIsImp3dCIsInRva2VuIiwianRpIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJzZXNzaW9uIiwic2V0IiwiZXZlbnRzIiwic2lnbk91dCIsImRlbGV0ZSIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGOOSE_URL = process.env.DATABASE_URL;\nconst connect = async ()=>{\n    console.log(MONGOOSE_URL, \"MONGOOSE_URLMONGOOSE_URL\");\n    const connectionState = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState;\n    if (connectionState === 1) {\n        console.log(\"Already Connected\");\n        return;\n    }\n    if (connectionState === 2) {\n        console.log(\"Connecting.....\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGOOSE_URL, {\n            dbName: \"todo\",\n            bufferCommands: false\n        });\n        console.log(\"Connnected\");\n    } catch (error) {\n        console.log(\"Error in connecting\", error);\n        throw new Error(\"Error in connecting\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFFN0MsTUFBTUMsVUFBVTtJQUNaQyxRQUFRQyxHQUFHLENBQUNOLGNBQWE7SUFDekIsTUFBTU8sa0JBQWtCUiw0REFBbUIsQ0FBQ1UsVUFBVTtJQUV0RCxJQUFHRixvQkFBb0IsR0FBRTtRQUNyQkYsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDSjtJQUVBLElBQUdDLG9CQUFvQixHQUFFO1FBQ3JCRixRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNKO0lBRUEsSUFBRztRQUNDLE1BQU1QLHVEQUFnQixDQUFDQyxjQUFjO1lBQ2pDVSxRQUFPO1lBQ1BDLGdCQUFlO1FBQ25CO1FBQ0FOLFFBQVFDLEdBQUcsQ0FBQztJQUVoQixFQUVBLE9BQU9NLE9BQU07UUFDVFAsUUFBUUMsR0FBRyxDQUFDLHVCQUF1Qk07UUFDbkMsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0FBQ0o7QUFFQSxpRUFBZVQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2Vtb24tYXBwLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPT1NFX1VSTCA9IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTDtcblxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpPT57XG4gICAgY29uc29sZS5sb2coTU9OR09PU0VfVVJMLCdNT05HT09TRV9VUkxNT05HT09TRV9VUkwnKVxuICAgIGNvbnN0IGNvbm5lY3Rpb25TdGF0ZSA9IG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZTtcbiAgICBcbiAgICBpZihjb25uZWN0aW9uU3RhdGUgPT09IDEpeyBcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IENvbm5lY3RlZFwiKTtcbiAgICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICBpZihjb25uZWN0aW9uU3RhdGUgPT09IDIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RpbmcuLi4uLlwiKTtcbiAgICAgICAgcmV0dXJuIDtcbiAgICB9XG5cbiAgICB0cnl7XG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09PU0VfVVJMISx7XG4gICAgICAgICAgICBkYk5hbWU6J3RvZG8nLFxuICAgICAgICAgICAgYnVmZmVyQ29tbWFuZHM6ZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25ubmVjdGVkJyk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gY29ubmVjdGluZycsIGVycm9yKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGluIGNvbm5lY3RpbmcnKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT09TRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9uU3RhdGUiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImRiTmFtZSIsImJ1ZmZlckNvbW1hbmRzIiwiZXJyb3IiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/models/user.ts":
/*!********************************!*\
  !*** ./src/lib/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        require: true,\n        unique: true\n    },\n    // username:{type:String ,require:true, unique:true},\n    password: {\n        type: String,\n        require: false\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vZGVscy91c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNRyxhQUFhLElBQUlILDRDQUFNQSxDQUFDO0lBQzFCSSxPQUFNO1FBQUNDLE1BQUtDO1FBQVFDLFNBQVE7UUFBTUMsUUFBTztJQUFJO0lBQzdDLHFEQUFxRDtJQUNyREMsVUFBUztRQUFDSixNQUFLQztRQUFRQyxTQUFRO0lBQUs7QUFDeEMsR0FDQTtJQUFDRyxZQUFXO0FBQUk7QUFFaEIsTUFBTUMsT0FBT1YsNENBQU1BLENBQUNVLElBQUksSUFBSVQsK0NBQUtBLENBQUMsUUFBT0M7QUFFekMsaUVBQWVRLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2tlbW9uLWFwcC8uL3NyYy9saWIvbW9kZWxzL3VzZXIudHM/YzgyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVtYSwgbW9kZWxzLCBtb2RlbH0gZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBlbWFpbDp7dHlwZTpTdHJpbmcgLHJlcXVpcmU6dHJ1ZSwgdW5pcXVlOnRydWV9LFxuICAgIC8vIHVzZXJuYW1lOnt0eXBlOlN0cmluZyAscmVxdWlyZTp0cnVlLCB1bmlxdWU6dHJ1ZX0sXG4gICAgcGFzc3dvcmQ6e3R5cGU6U3RyaW5nICxyZXF1aXJlOmZhbHNlfSxcbn0sXG57dGltZXN0YW1wczp0cnVlfSlcblxuY29uc3QgVXNlciA9IG1vZGVscy5Vc2VyIHx8IG1vZGVsKCdVc2VyJyxVc2VyU2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbHMiLCJtb2RlbCIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlIiwidW5pcXVlIiwicGFzc3dvcmQiLCJ0aW1lc3RhbXBzIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/models/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Futkarshtemp%2FDocuments%2Fassigments%2Fpokemon-search-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();