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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                title: title,\n                completed: false\n            }\n        ]);\n        setTitle(\"\");\n    };\n    const handleToggle = (id)=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (todo.id === id) {\n                todo.completed = !todo.completed;\n            }\n            return todo;\n        });\n        setTodos(newTodoList);\n    };\n    const handleClearCompleted = ()=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (!todo.completed) return todo;\n        });\n        setTodos(newTodoList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: [\n                        \"Create a Todo (\",\n                        todos.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        onClick: ()=>handleAdd(),\n                        disabled: title.length == 0,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        margin: \"8px\"\n                                    },\n                                    children: [\n                                        todo.title,\n                                        \"-- \",\n                                        todo.completed ? \"completed\" : \"incomplete\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            marginX: 0,\n                                            size: \"sm\",\n                                            onClick: ()=>handleToggle(todo.id),\n                                            children: \"Toggle\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>handleClearCompleted(),\n                            children: [\n                                \"\",\n                                \"Clear All Completed\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZFLENBQUM7R0EzRnVCZDs7UUFrQ1JGLCtEQUFpQkE7UUFLYkEsK0RBQWlCQTtRQVVWQSwrREFBaUJBOzs7S0FqRHBCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVG9kb3MuanN4P2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgRmxleCxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBJbnB1dCxcclxuICAgIFN0YWNrLFxyXG4gICAgVGV4dCxcclxuICAgIEJhZGdlLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKFsuLi50b2RvcywgeyBpZDogRGF0ZS5ub3coKSwgdGl0bGU6IHRpdGxlLCBjb21wbGV0ZWQ6IGZhbHNlIH1dKTtcclxuICAgICAgICBzZXRUaXRsZShcIlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1RvZG9MaXN0ID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUb2RvcyhuZXdUb2RvTGlzdCk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3VG9kb0xpc3QgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdG9kby5jb21wbGV0ZWQpIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUb2RvcyhuZXdUb2RvTGlzdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtaW5IPXsnMTAwdmgnfVxyXG4gICAgICAgICAgICBhbGlnbj17J2NlbnRlcid9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9eydjZW50ZXInfVxyXG4gICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ3RyYW5zcGFyZW50JywgJ2dyYXkuODAwJyl9PlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezR9XHJcbiAgICAgICAgICAgICAgICB3PXsnZnVsbCd9XHJcbiAgICAgICAgICAgICAgICBtYXhXPXsnbWQnfVxyXG4gICAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZScsICdncmF5LjcwMCcpfVxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD17J3hsJ31cclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdz17J2xnJ31cclxuICAgICAgICAgICAgICAgIHA9ezZ9XHJcbiAgICAgICAgICAgICAgICBteT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgbGluZUhlaWdodD17MS4xfSBmb250U2l6ZT17eyBiYXNlOiAnMnhsJywgbWQ6ICczeGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIFRvZG8gKHt0b2Rvcy5sZW5ndGh9KVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnc20nLCBzbTogJ21kJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnZ3JheS40MDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgV3JpdGUgdGhpbmdzIGhlcmUgc28geW91IGRvbid0IGZvcmdldFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlkPVwiZW1haWxcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRG8gSG9tZXdvcmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3BsYWNlaG9sZGVyPXt7IGNvbG9yOiAnZ3JheS41MDAnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPXsnYmx1ZS40MDAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3doaXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZzogJ2JsdWUuNTAwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWRkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aXRsZS5sZW5ndGggPT0gMH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgVG9kb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbWFyZ2luOiBcIjhweFwiIH19Pnt0b2RvLnRpdGxlfS0tIHt0b2RvLmNvbXBsZXRlZCA/IFwiY29tcGxldGVkXCIgOiBcImluY29tcGxldGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG1hcmdpblg9ezB9IHNpemU9e1wic21cIn0gb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlKHRvZG8uaWQpfT5Ub2dnbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xlYXJDb21wbGV0ZWQoKX0+e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyIEFsbCBDb21wbGV0ZWQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZsZXgiLCJIZWFkaW5nIiwiSW5wdXQiLCJTdGFjayIsIlRleHQiLCJCYWRnZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwidXNlU3RhdGUiLCJUb2RvcyIsInRvZG9zIiwic2V0VG9kb3MiLCJ0aXRsZSIsInNldFRpdGxlIiwiaGFuZGxlQWRkIiwiaWQiLCJEYXRlIiwibm93IiwiY29tcGxldGVkIiwiaGFuZGxlVG9nZ2xlIiwibmV3VG9kb0xpc3QiLCJmaWx0ZXIiLCJ0b2RvIiwiaGFuZGxlQ2xlYXJDb21wbGV0ZWQiLCJtaW5IIiwiYWxpZ24iLCJqdXN0aWZ5IiwiYmciLCJzcGFjaW5nIiwidyIsIm1heFciLCJyb3VuZGVkIiwiYm94U2hhZG93IiwicCIsIm15IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiYmFzZSIsIm1kIiwibGVuZ3RoIiwic20iLCJjb2xvciIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiX2hvdmVyIiwib25DbGljayIsImRpc2FibGVkIiwidWwiLCJtYXAiLCJsaSIsInN0eWxlIiwibWFyZ2luIiwibWFyZ2luWCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});