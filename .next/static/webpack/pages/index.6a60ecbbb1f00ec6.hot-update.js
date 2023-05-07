"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/Todos.jsx":
/*!*****************************!*\
  !*** ./component/Todos.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                title: title,\n                completed: false\n            }\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: \"Create a Todo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVG9kb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUzBCO0FBQ087QUFJbEIsU0FBU1MsUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1NLFlBQVksSUFBTTtRQUNwQkgsU0FBUztlQUFJRDtZQUFPO2dCQUFDRSxPQUFNQTtnQkFBT0csV0FBVSxLQUFLO1lBQUE7U0FBRTtJQUN2RDtJQUNBLHFCQUNJLDhEQUFDYixrREFBSUE7UUFDRGMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsSUFBSVosbUVBQWlCQSxDQUFDLGVBQWU7a0JBQ3JDLDRFQUFDRixtREFBS0E7WUFDRmUsU0FBUztZQUNUQyxHQUFHO1lBQ0hDLE1BQU07WUFDTkgsSUFBSVosbUVBQWlCQSxDQUFDLFNBQVM7WUFDL0JnQixTQUFTO1lBQ1RDLFdBQVc7WUFDWEMsR0FBRztZQUNIQyxJQUFJOzs4QkFDSiw4REFBQ3ZCLHFEQUFPQTtvQkFBQ3dCLFlBQVk7b0JBQUtDLFVBQVU7d0JBQUVDLE1BQU07d0JBQU9DLElBQUk7b0JBQU07OEJBQUc7Ozs7Ozs4QkFHaEUsOERBQUN4QixrREFBSUE7b0JBQ0RzQixVQUFVO3dCQUFFQyxNQUFNO3dCQUFNRSxJQUFJO29CQUFLO29CQUNqQ0MsT0FBT3pCLG1FQUFpQkEsQ0FBQyxZQUFZOzhCQUFhOzs7Ozs7OEJBR3RELDhEQUFDTix5REFBV0E7b0JBQUNnQyxJQUFHOzhCQUVaLDRFQUFDN0IsbURBQUtBO3dCQUNGOEIsYUFBWTt3QkFDWkMsY0FBYzs0QkFBRUgsT0FBTzt3QkFBVzt3QkFDbENJLE1BQUs7d0JBQ0xDLE9BQU96Qjt3QkFDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzhCQUdoRCw4REFBQ2hDLG1EQUFLQTtvQkFBQ2UsU0FBUzs4QkFDWiw0RUFBQ3BCLG9EQUFNQTt3QkFDSG1CLElBQUk7d0JBQ0phLE9BQU87d0JBQ1BTLFFBQVE7NEJBQ0p0QixJQUFJO3dCQUNSO2tDQUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCLENBQUM7R0F6RHVCVjs7UUFhUkYsK0RBQWlCQTtRQUtiQSwrREFBaUJBO1FBVVZBLCtEQUFpQkE7OztLQTVCcEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9Ub2Rvcy5qc3g/ZmY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGbGV4LFxyXG4gICAgSGVhZGluZyxcclxuICAgIElucHV0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0LFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKFsuLi50b2Rvcywge3RpdGxlOnRpdGxlLCBjb21wbGV0ZWQ6ZmFsc2V9XSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbWluSD17JzEwMHZoJ31cclxuICAgICAgICAgICAgYWxpZ249eydjZW50ZXInfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PXsnY2VudGVyJ31cclxuICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd0cmFuc3BhcmVudCcsICdncmF5LjgwMCcpfT5cclxuICAgICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXs0fVxyXG4gICAgICAgICAgICAgICAgdz17J2Z1bGwnfVxyXG4gICAgICAgICAgICAgICAgbWF4Vz17J21kJ31cclxuICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnZ3JheS43MDAnKX1cclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9eyd4bCd9XHJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9eydsZyd9XHJcbiAgICAgICAgICAgICAgICBwPXs2fVxyXG4gICAgICAgICAgICAgICAgbXk9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGxpbmVIZWlnaHQ9ezEuMX0gZm9udFNpemU9e3sgYmFzZTogJzJ4bCcsIG1kOiAnM3hsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBUb2RvXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICdzbScsIHNtOiAnbWQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICdncmF5LjQwMCcpfT5cclxuICAgICAgICAgICAgICAgICAgICBXcml0ZSB0aGluZ3MgaGVyZSBzbyB5b3UgZG9uJ3QgZm9yZ2V0XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEbyBIb21ld29ya3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcGxhY2Vob2xkZXI9e3sgY29sb3I6ICdncmF5LjUwMCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9eydibHVlLjQwMCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnd2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiAnYmx1ZS41MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFRvZG9cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZsZXgiLCJIZWFkaW5nIiwiSW5wdXQiLCJTdGFjayIsIlRleHQiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZVN0YXRlIiwiVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwidGl0bGUiLCJzZXRUaXRsZSIsImhhbmRsZUFkZCIsImNvbXBsZXRlZCIsIm1pbkgiLCJhbGlnbiIsImp1c3RpZnkiLCJiZyIsInNwYWNpbmciLCJ3IiwibWF4VyIsInJvdW5kZWQiLCJib3hTaGFkb3ciLCJwIiwibXkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJiYXNlIiwibWQiLCJzbSIsImNvbG9yIiwiaWQiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIl9ob3ZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});