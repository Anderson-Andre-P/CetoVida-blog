'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
;(self['webpackChunk_N_E'] = self['webpackChunk_N_E'] || []).push([
  ['components_comments_Disqus_js'],
  {
    /***/ './components/comments/Disqus.js':
      /*!***************************************!*\
  !*** ./components/comments/Disqus.js ***!
  \***************************************/
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/siteMetadata */ "./data/siteMetadata.js");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Disqus = function(param) {\n    var frontMatter = param.frontMatter;\n    var LoadComments = function LoadComments() {\n        setEnabledLoadComments(false);\n        window.disqus_config = function() {\n            this.page.url = window.location.href;\n            this.page.identifier = frontMatter.slug;\n        };\n        if (window.DISQUS === undefined) {\n            var script = document.createElement("script");\n            script.src = "https://" + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().comment.disqusConfig.shortname) + ".disqus.com/embed.js";\n            script.setAttribute("data-timestamp", +new Date());\n            script.setAttribute("crossorigin", "anonymous");\n            script.async = true;\n            document.body.appendChild(script);\n        } else {\n            window.DISQUS.reset({\n                reload: true\n            });\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), enableLoadComments = ref[0], setEnabledLoadComments = ref[1];\n    var COMMENTS_ID = "disqus_thread";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: "pb-6 pt-6 text-center text-gray-700 dark:text-gray-300",\n        children: [\n            enableLoadComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {\n                onClick: LoadComments,\n                children: "Load Comments"\n            }, void 0, false, {\n                fileName: "/home/anderson/www/CetoVida-blog/components/comments/Disqus.js",\n                lineNumber: 31,\n                columnNumber: 30\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "disqus-frame",\n                id: COMMENTS_ID\n            }, void 0, false, {\n                fileName: "/home/anderson/www/CetoVida-blog/components/comments/Disqus.js",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: "/home/anderson/www/CetoVida-blog/components/comments/Disqus.js",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Disqus, "6J2wAdZ2kjF0faG/fj33ZXGxstA=");\n_c = Disqus;\n/* harmony default export */ __webpack_exports__["default"] = (Disqus);\nvar _c;\n$RefreshReg$(_c, "Disqus");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL0Rpc3F1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXVDO0FBRU87O0FBRTlDLElBQU1HLE1BQU0sR0FBRyxnQkFBcUI7UUFBbEJDLFdBQVcsU0FBWEEsV0FBVztRQUtsQkMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLEdBQUc7UUFDdEJDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztRQUU3QkMsTUFBTSxDQUFDQyxhQUFhLEdBQUcsV0FBWTtZQUNqQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSTtZQUNwQyxJQUFJLENBQUNILElBQUksQ0FBQ0ksVUFBVSxHQUFHVCxXQUFXLENBQUNVLElBQUk7U0FDeEM7UUFDRCxJQUFJUCxNQUFNLENBQUNRLE1BQU0sS0FBS0MsU0FBUyxFQUFFO1lBQy9CLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQy9DRixNQUFNLENBQUNHLEdBQUcsR0FBRyxVQUFVLEdBQUdsQiwwRkFBMkMsR0FBRyxzQkFBc0I7WUFDOUZlLE1BQU0sQ0FBQ08sWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUM7WUFDbERSLE1BQU0sQ0FBQ08sWUFBWSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUM7WUFDL0NQLE1BQU0sQ0FBQ1MsS0FBSyxHQUFHLElBQUk7WUFDbkJSLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDQyxXQUFXLENBQUNYLE1BQU0sQ0FBQztTQUNsQyxNQUFNO1lBQ0xWLE1BQU0sQ0FBQ1EsTUFBTSxDQUFDYyxLQUFLLENBQUM7Z0JBQUVDLE1BQU0sRUFBRSxJQUFJO2FBQUUsQ0FBQztTQUN0QztLQUNGOztJQXJCRCxJQUFxRDdCLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFMckUsa0JBSzJCLEdBQTRCQSxHQUFjLEdBQTFDLEVBTDNCLHNCQUttRCxHQUFJQSxHQUFjLEdBQWxCO0lBRWpELElBQU0rQixXQUFXLEdBQUcsZUFBZTtJQXFCbkMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7WUFDcEVILGtCQUFrQixrQkFBSSw4REFBQ0ksUUFBTTtnQkFBQ0MsT0FBTyxFQUFFL0IsWUFBWTswQkFBRSxlQUFhOzs7OztxQkFBUzswQkFDNUUsOERBQUM0QixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsY0FBYztnQkFBQ0csRUFBRSxFQUFFTCxXQUFXOzs7OztxQkFBSTs7Ozs7O2FBQzdDLENBQ1A7Q0FDRjtHQTlCSzdCLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWdDWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lbnRzL0Rpc3F1cy5qcz81MWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXG5cbmNvbnN0IERpc3F1cyA9ICh7IGZyb250TWF0dGVyIH0pID0+IHtcbiAgY29uc3QgW2VuYWJsZUxvYWRDb21tZW50cywgc2V0RW5hYmxlZExvYWRDb21tZW50c10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IENPTU1FTlRTX0lEID0gJ2Rpc3F1c190aHJlYWQnXG5cbiAgZnVuY3Rpb24gTG9hZENvbW1lbnRzKCkge1xuICAgIHNldEVuYWJsZWRMb2FkQ29tbWVudHMoZmFsc2UpXG5cbiAgICB3aW5kb3cuZGlzcXVzX2NvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucGFnZS51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgdGhpcy5wYWdlLmlkZW50aWZpZXIgPSBmcm9udE1hdHRlci5zbHVnXG4gICAgfVxuICAgIGlmICh3aW5kb3cuRElTUVVTID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vJyArIHNpdGVNZXRhZGF0YS5jb21tZW50LmRpc3F1c0NvbmZpZy5zaG9ydG5hbWUgKyAnLmRpc3F1cy5jb20vZW1iZWQuanMnXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXRpbWVzdGFtcCcsICtuZXcgRGF0ZSgpKVxuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJylcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWVcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuRElTUVVTLnJlc2V0KHsgcmVsb2FkOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTYgcHQtNiB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAge2VuYWJsZUxvYWRDb21tZW50cyAmJiA8YnV0dG9uIG9uQ2xpY2s9e0xvYWRDb21tZW50c30+TG9hZCBDb21tZW50czwvYnV0dG9uPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcXVzLWZyYW1lXCIgaWQ9e0NPTU1FTlRTX0lEfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3F1c1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaXRlTWV0YWRhdGEiLCJEaXNxdXMiLCJmcm9udE1hdHRlciIsIkxvYWRDb21tZW50cyIsInNldEVuYWJsZWRMb2FkQ29tbWVudHMiLCJ3aW5kb3ciLCJkaXNxdXNfY29uZmlnIiwicGFnZSIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsImlkZW50aWZpZXIiLCJzbHVnIiwiRElTUVVTIiwidW5kZWZpbmVkIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiY29tbWVudCIsImRpc3F1c0NvbmZpZyIsInNob3J0bmFtZSIsInNldEF0dHJpYnV0ZSIsIkRhdGUiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0IiwicmVsb2FkIiwiZW5hYmxlTG9hZENvbW1lbnRzIiwiQ09NTUVOVFNfSUQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/comments/Disqus.js\n'
        )

        /***/
      },
  },
])
