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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                title: title,\n                completed: false\n            }\n        ]);\n        setTitle(\"\");\n    };\n    const handleToggle = (id)=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (todo.id === id) {\n                todo.completed = !todo.completed;\n            }\n            return todo;\n        });\n        setTodos(newTodoList);\n    };\n    const handleClearCompleted = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: [\n                        \"Create a Todo (\",\n                        todos.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        onClick: ()=>handleAdd(),\n                        disabled: title.length === 0,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        margin: \"8px\"\n                                    },\n                                    children: [\n                                        todo.title,\n                                        \"-- \",\n                                        todo.completed ? \"completed\" : \"incomplete\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            marginX: 0,\n                                            size: \"sm\",\n                                            onClick: ()=>handleToggle(todo.id),\n                                            children: \"Toggle\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>handleClearCompleted(),\n                            children: [\n                                \"\",\n                                \"Clear All Completed\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9Ub2Rvcy5qc3g/ZmY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGbGV4LFxyXG4gICAgSGVhZGluZyxcclxuICAgIElucHV0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0LFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyBpZDogRGF0ZS5ub3coKSwgdGl0bGU6IHRpdGxlLCBjb21wbGV0ZWQ6IGZhbHNlIH1dKTtcclxuICAgICAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1RvZG9MaXN0ID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUb2RvcyhuZXdUb2RvTGlzdCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG1pbkg9eycxMDB2aCd9XHJcbiAgICAgICAgICAgIGFsaWduPXsnY2VudGVyJ31cclxuICAgICAgICAgICAganVzdGlmeT17J2NlbnRlcid9XHJcbiAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgndHJhbnNwYXJlbnQnLCAnZ3JheS44MDAnKX0+XHJcbiAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgICAgc3BhY2luZz17NH1cclxuICAgICAgICAgICAgICAgIHc9eydmdWxsJ31cclxuICAgICAgICAgICAgICAgIG1heFc9eydtZCd9XHJcbiAgICAgICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2dyYXkuNzAwJyl9XHJcbiAgICAgICAgICAgICAgICByb3VuZGVkPXsneGwnfVxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93PXsnbGcnfVxyXG4gICAgICAgICAgICAgICAgcD17Nn1cclxuICAgICAgICAgICAgICAgIG15PXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBsaW5lSGVpZ2h0PXsxLjF9IGZvbnRTaXplPXt7IGJhc2U6ICcyeGwnLCBtZDogJzN4bCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgVG9kbyAoe3RvZG9zLmxlbmd0aH0pXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICdzbScsIHNtOiAnbWQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICdncmF5LjQwMCcpfT5cclxuICAgICAgICAgICAgICAgICAgICBXcml0ZSB0aGluZ3MgaGVyZSBzbyB5b3UgZG9uJ3QgZm9yZ2V0XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJlbWFpbFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEbyBIb21ld29ya3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcGxhY2Vob2xkZXI9e3sgY29sb3I6ICdncmF5LjUwMCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9eydibHVlLjQwMCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnd2hpdGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiAnYmx1ZS41MDAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RpdGxlLmxlbmd0aCA9PT0gMH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgVG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjhweFwiIH19Pnt0b2RvLnRpdGxlfS0tIHt0b2RvLmNvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcImluY29tcGxldGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG1hcmdpblg9ezB9IHNpemU9e1wic21cIn0gb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlKHRvZG8uaWQpfT5Ub2dnbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVDbGVhckNvbXBsZXRlZCgpfT57XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICBDbGVhciBBbGwgQ29tcGxldGVkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGbGV4IiwiSGVhZGluZyIsIklucHV0IiwiU3RhY2siLCJUZXh0IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VTdGF0ZSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsInRpdGxlIiwic2V0VGl0bGUiLCJoYW5kbGVBZGQiLCJpZCIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJoYW5kbGVUb2dnbGUiLCJuZXdUb2RvTGlzdCIsImZpbHRlciIsInRvZG8iLCJoYW5kbGVDbGVhckNvbXBsZXRlZCIsIm1pbkgiLCJhbGlnbiIsImp1c3RpZnkiLCJiZyIsInNwYWNpbmciLCJ3IiwibWF4VyIsInJvdW5kZWQiLCJib3hTaGFkb3ciLCJwIiwibXkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJiYXNlIiwibWQiLCJsZW5ndGgiLCJzbSIsImNvbG9yIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJfaG92ZXIiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ1bCIsIm1hcCIsImxpIiwic3R5bGUiLCJtYXJnaW4iLCJtYXJnaW5YIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});