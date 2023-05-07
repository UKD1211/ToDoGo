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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                title: title,\n                completed: false\n            }\n        ]);\n        setTitle(\"\");\n    };\n    const handleToggle = (id)=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (todo.id === id) {\n                todo.completed = !todo.completed;\n            }\n            return todo;\n        });\n        setTodos(newTodoList);\n    };\n    const handleClearCompleted = ()=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (!todo.completed) return todo;\n        });\n        setTodos(newTodoList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: [\n                        \"Create a Todo (\",\n                        todos.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        onClick: ()=>handleAdd(),\n                        disabled: title.length == 0,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    style: {\n                                        margin: \"8px\"\n                                    },\n                                    children: [\n                                        todo.title,\n                                        \"-- \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {}, void 0, false, {\n                                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 74\n                                        }, this),\n                                        todo.completed ? \"completed\" : \"incomplete\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            marginX: 0,\n                                            size: \"sm\",\n                                            onClick: ()=>handleToggle(todo.id),\n                                            children: \"Toggle\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            onClick: ()=>handleClearCompleted(),\n                            children: [\n                                \"\",\n                                \"Clear All Completed\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBTTNCOztnQ0FBeUI7Z0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RSxDQUFDO0dBM0Z1QmQ7O1FBa0NSRiwrREFBaUJBO1FBS2JBLCtEQUFpQkE7UUFVVkEsK0RBQWlCQTs7O0tBakRwQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1RvZG9zLmpzeD9mZjY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZsZXgsXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgSW5wdXQsXHJcbiAgICBTdGFjayxcclxuICAgIFRleHQsXHJcbiAgICBCYWRnZSxcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3MoKSB7XHJcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHsgaWQ6IERhdGUubm93KCksIHRpdGxlOiB0aXRsZSwgY29tcGxldGVkOiBmYWxzZSB9XSk7XHJcbiAgICAgICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdUb2RvTGlzdCA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VG9kb3MobmV3VG9kb0xpc3QpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1RvZG9MaXN0ID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRvZG8uY29tcGxldGVkKSByZXR1cm4gdG9kbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VG9kb3MobmV3VG9kb0xpc3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbWluSD17JzEwMHZoJ31cclxuICAgICAgICAgICAgYWxpZ249eydjZW50ZXInfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PXsnY2VudGVyJ31cclxuICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd0cmFuc3BhcmVudCcsICdncmF5LjgwMCcpfT5cclxuICAgICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXs0fVxyXG4gICAgICAgICAgICAgICAgdz17J2Z1bGwnfVxyXG4gICAgICAgICAgICAgICAgbWF4Vz17J21kJ31cclxuICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnZ3JheS43MDAnKX1cclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9eyd4bCd9XHJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9eydsZyd9XHJcbiAgICAgICAgICAgICAgICBwPXs2fVxyXG4gICAgICAgICAgICAgICAgbXk9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGxpbmVIZWlnaHQ9ezEuMX0gZm9udFNpemU9e3sgYmFzZTogJzJ4bCcsIG1kOiAnM3hsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBUb2RvICh7dG9kb3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ3NtJywgc206ICdtZCcgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ2dyYXkuNDAwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFdyaXRlIHRoaW5ncyBoZXJlIHNvIHlvdSBkb24ndCBmb3JnZXRcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRvIEhvbWV3b3Jrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBjb2xvcjogJ2dyYXkuNTAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz17J2JsdWUuNDAwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6ICdibHVlLjUwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGl0bGUubGVuZ3RoID09IDB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFRvZG9cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IG1hcmdpbjogXCI4cHhcIiB9fT57dG9kby50aXRsZX0tLSA8QmFkZ2U+PC9CYWRnZT57dG9kby5jb21wbGV0ZWQgPyBcImNvbXBsZXRlZFwiIDogXCJpbmNvbXBsZXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBtYXJnaW5YPXswfSBzaXplPXtcInNtXCJ9IG9uQ2xpY2s9eygpID0+IGhhbmRsZVRvZ2dsZSh0b2RvLmlkKX0+VG9nZ2xlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsZWFyQ29tcGxldGVkKCl9PntcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGVhciBBbGwgQ29tcGxldGVkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGbGV4IiwiSGVhZGluZyIsIklucHV0IiwiU3RhY2siLCJUZXh0IiwiQmFkZ2UiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZVN0YXRlIiwiVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwidGl0bGUiLCJzZXRUaXRsZSIsImhhbmRsZUFkZCIsImlkIiwiRGF0ZSIsIm5vdyIsImNvbXBsZXRlZCIsImhhbmRsZVRvZ2dsZSIsIm5ld1RvZG9MaXN0IiwiZmlsdGVyIiwidG9kbyIsImhhbmRsZUNsZWFyQ29tcGxldGVkIiwibWluSCIsImFsaWduIiwianVzdGlmeSIsImJnIiwic3BhY2luZyIsInciLCJtYXhXIiwicm91bmRlZCIsImJveFNoYWRvdyIsInAiLCJteSIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImJhc2UiLCJtZCIsImxlbmd0aCIsInNtIiwiY29sb3IiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIl9ob3ZlciIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInVsIiwibWFwIiwibGkiLCJzdHlsZSIsIm1hcmdpbiIsIm1hcmdpblgiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});