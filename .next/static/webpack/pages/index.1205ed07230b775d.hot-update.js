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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                title: title,\n                completed: false\n            }\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: \"Create a Todo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        onClick: ()=>handleAdd,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVG9kb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUzBCO0FBQ087QUFJbEIsU0FBU1MsUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1NLFlBQVksSUFBTTtRQUNwQkgsU0FBUztlQUFJRDtZQUFPO2dCQUFFRSxPQUFPQTtnQkFBT0csV0FBVyxLQUFLO1lBQUM7U0FBRTtJQUMzRDtJQUNBLHFCQUNJLDhEQUFDYixrREFBSUE7UUFDRGMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsSUFBSVosbUVBQWlCQSxDQUFDLGVBQWU7a0JBQ3JDLDRFQUFDRixtREFBS0E7WUFDRmUsU0FBUztZQUNUQyxHQUFHO1lBQ0hDLE1BQU07WUFDTkgsSUFBSVosbUVBQWlCQSxDQUFDLFNBQVM7WUFDL0JnQixTQUFTO1lBQ1RDLFdBQVc7WUFDWEMsR0FBRztZQUNIQyxJQUFJOzs4QkFDSiw4REFBQ3ZCLHFEQUFPQTtvQkFBQ3dCLFlBQVk7b0JBQUtDLFVBQVU7d0JBQUVDLE1BQU07d0JBQU9DLElBQUk7b0JBQU07OEJBQUc7Ozs7Ozs4QkFHaEUsOERBQUN4QixrREFBSUE7b0JBQ0RzQixVQUFVO3dCQUFFQyxNQUFNO3dCQUFNRSxJQUFJO29CQUFLO29CQUNqQ0MsT0FBT3pCLG1FQUFpQkEsQ0FBQyxZQUFZOzhCQUFhOzs7Ozs7OEJBR3RELDhEQUFDTix5REFBV0E7b0JBQUNnQyxJQUFHOzhCQUVaLDRFQUFDN0IsbURBQUtBO3dCQUNGOEIsYUFBWTt3QkFDWkMsY0FBYzs0QkFBRUgsT0FBTzt3QkFBVzt3QkFDbENJLE1BQUs7d0JBQ0xDLE9BQU96Qjt3QkFDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFNBQVMwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzhCQUdoRCw4REFBQ2hDLG1EQUFLQTtvQkFBQ2UsU0FBUzs4QkFDWiw0RUFBQ3BCLG9EQUFNQTt3QkFDSG1CLElBQUk7d0JBQ0phLE9BQU87d0JBQ1BTLFFBQVE7NEJBQ0p0QixJQUFJO3dCQUNSO3dCQUNBdUIsU0FBUyxJQUFNNUI7a0NBR2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCLENBQUM7R0ExRHVCTDs7UUFhUkYsK0RBQWlCQTtRQUtiQSwrREFBaUJBO1FBVVZBLCtEQUFpQkE7OztLQTVCcEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9Ub2Rvcy5qc3g/ZmY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGbGV4LFxyXG4gICAgSGVhZGluZyxcclxuICAgIElucHV0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0LFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyB0aXRsZTogdGl0bGUsIGNvbXBsZXRlZDogZmFsc2UgfV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG1pbkg9eycxMDB2aCd9XHJcbiAgICAgICAgICAgIGFsaWduPXsnY2VudGVyJ31cclxuICAgICAgICAgICAganVzdGlmeT17J2NlbnRlcid9XHJcbiAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgndHJhbnNwYXJlbnQnLCAnZ3JheS44MDAnKX0+XHJcbiAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17NH1cclxuICAgICAgICAgICAgICAgIHc9eydmdWxsJ31cclxuICAgICAgICAgICAgICAgIG1heFc9eydtZCd9XHJcbiAgICAgICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2dyYXkuNzAwJyl9XHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPXsneGwnfVxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93PXsnbGcnfVxyXG4gICAgICAgICAgICAgICAgcD17Nn1cclxuICAgICAgICAgICAgICAgIG15PXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBsaW5lSGVpZ2h0PXsxLjF9IGZvbnRTaXplPXt7IGJhc2U6ICcyeGwnLCBtZDogJzN4bCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgVG9kb1xyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnc20nLCBzbTogJ21kJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnZ3JheS40MDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgV3JpdGUgdGhpbmdzIGhlcmUgc28geW91IGRvbid0IGZvcmdldFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlkPVwiZW1haWxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRG8gSG9tZXdvcmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BsYWNlaG9sZGVyPXt7IGNvbG9yOiAnZ3JheS41MDAnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPXsnYmx1ZS40MDAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZzogJ2JsdWUuNTAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgVG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRmxleCIsIkhlYWRpbmciLCJJbnB1dCIsIlN0YWNrIiwiVGV4dCIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlU3RhdGUiLCJUb2RvcyIsInRvZG9zIiwic2V0VG9kb3MiLCJ0aXRsZSIsInNldFRpdGxlIiwiaGFuZGxlQWRkIiwiY29tcGxldGVkIiwibWluSCIsImFsaWduIiwianVzdGlmeSIsImJnIiwic3BhY2luZyIsInciLCJtYXhXIiwicm91bmRlZCIsImJveFNoYWRvdyIsInAiLCJteSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImJhc2UiLCJtZCIsInNtIiwiY29sb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiX2hvdmVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});