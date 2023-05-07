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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                title: title,\n                completed: false\n            }\n        ]);\n        setTitle(\"\");\n    };\n    const handleToggle = (id)=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (todo.id === id) {\n                todo.completed = !todo.completed;\n            }\n            return todo;\n        });\n        setTodos(newTodoList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: [\n                        \"Create a Todo (\",\n                        todos.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        onClick: ()=>handleAdd(),\n                        disabled: title.length === 0,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                style: {\n                                    margin: \"8px\"\n                                },\n                                children: [\n                                    todo.title,\n                                    \"-- \",\n                                    todo.completed ? \"completed\" : \"incomplete\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        marginX: 1,\n                                        size: \"sm\",\n                                        onClick: ()=>handleToggle(todo.id),\n                                        children: \"Toggle\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVG9kb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUzBCO0FBQ087QUFJbEIsU0FBU1MsUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1NLFlBQVksSUFBTTtRQUNwQkgsU0FBUztlQUFJRDtZQUFPO2dCQUFFSyxJQUFJQyxLQUFLQyxHQUFHO2dCQUFJTCxPQUFPQTtnQkFBT00sV0FBVyxLQUFLO1lBQUM7U0FBRTtRQUN2RUwsU0FBUztJQUNiO0lBRUEsTUFBTU0sZUFBZSxDQUFDSixLQUFPO1FBQ3pCLElBQUlLLGNBQWNWLE1BQU1XLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUTtZQUNuQyxJQUFJQSxLQUFLUCxFQUFFLEtBQUtBLElBQUk7Z0JBQ2hCTyxLQUFLSixTQUFTLEdBQUcsQ0FBQ0ksS0FBS0osU0FBUztZQUNwQyxDQUFDO1lBQ0QsT0FBT0k7UUFDWDtRQUVBWCxTQUFTUztJQUNiO0lBQ0EscUJBQ0ksOERBQUNsQixrREFBSUE7UUFDRHFCLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLElBQUluQixtRUFBaUJBLENBQUMsZUFBZTtrQkFDckMsNEVBQUNGLG1EQUFLQTtZQUNGc0IsU0FBUztZQUNUQyxHQUFHO1lBQ0hDLE1BQU07WUFDTkgsSUFBSW5CLG1FQUFpQkEsQ0FBQyxTQUFTO1lBQy9CdUIsU0FBUztZQUNUQyxXQUFXO1lBQ1hDLEdBQUc7WUFDSEMsSUFBSTs7OEJBQ0osOERBQUM5QixxREFBT0E7b0JBQUMrQixZQUFZO29CQUFLQyxVQUFVO3dCQUFFQyxNQUFNO3dCQUFPQyxJQUFJO29CQUFNOzt3QkFBRzt3QkFDNUMzQixNQUFNNEIsTUFBTTt3QkFBQzs7Ozs7Ozs4QkFFakMsOERBQUNoQyxrREFBSUE7b0JBQ0Q2QixVQUFVO3dCQUFFQyxNQUFNO3dCQUFNRyxJQUFJO29CQUFLO29CQUNqQ0MsT0FBT2pDLG1FQUFpQkEsQ0FBQyxZQUFZOzhCQUFhOzs7Ozs7OEJBR3RELDhEQUFDTix5REFBV0E7b0JBQUNjLElBQUc7OEJBRVosNEVBQUNYLG1EQUFLQTt3QkFDRnFDLGFBQVk7d0JBQ1pDLGNBQWM7NEJBQUVGLE9BQU87d0JBQVc7d0JBQ2xDRyxNQUFLO3dCQUNMQyxPQUFPaEM7d0JBQ1BpQyxVQUFVLENBQUNDLElBQU1qQyxTQUFTaUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs4QkFHaEQsOERBQUN2QyxtREFBS0E7b0JBQUNzQixTQUFTOzhCQUNaLDRFQUFDM0Isb0RBQU1BO3dCQUNIMEIsSUFBSTt3QkFDSmMsT0FBTzt3QkFDUFEsUUFBUTs0QkFDSnRCLElBQUk7d0JBQ1I7d0JBQ0F1QixTQUFTLElBQU1uQzt3QkFDZm9DLFVBQVV0QyxNQUFNMEIsTUFBTSxLQUFLO2tDQUU5Qjs7Ozs7Ozs7Ozs7OEJBSUwsOERBQUNqQyxtREFBS0E7OEJBQ0YsNEVBQUM4QztrQ0FDSXpDLE1BQU0wQyxHQUFHLENBQUM5QixDQUFBQSxxQkFDUCw4REFBQytCO2dDQUFHQyxPQUFPO29DQUFFQyxRQUFRO2dDQUFNOztvQ0FBSWpDLEtBQUtWLEtBQUs7b0NBQUM7b0NBQUlVLEtBQUtKLFNBQVMsR0FBRyxjQUFjLFlBQVk7a0RBQ3JGLDhEQUFDbEIsb0RBQU1BO3dDQUFDd0QsU0FBUzt3Q0FBR0MsTUFBTTt3Q0FBTVIsU0FBUyxJQUFNOUIsYUFBYUcsS0FBS1AsRUFBRTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRHLENBQUM7R0EvRXVCTjs7UUF5QlJGLCtEQUFpQkE7UUFLYkEsK0RBQWlCQTtRQVVWQSwrREFBaUJBOzs7S0F4Q3BCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvVG9kb3MuanN4P2ZmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgRmxleCxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBJbnB1dCxcclxuICAgIFN0YWNrLFxyXG4gICAgVGV4dCxcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb3MoKSB7XHJcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUb2RvcyhbLi4udG9kb3MsIHsgaWQ6IERhdGUubm93KCksIHRpdGxlOiB0aXRsZSwgY29tcGxldGVkOiBmYWxzZSB9XSk7XHJcbiAgICAgICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdUb2RvTGlzdCA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VG9kb3MobmV3VG9kb0xpc3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbWluSD17JzEwMHZoJ31cclxuICAgICAgICAgICAgYWxpZ249eydjZW50ZXInfVxyXG4gICAgICAgICAgICBqdXN0aWZ5PXsnY2VudGVyJ31cclxuICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd0cmFuc3BhcmVudCcsICdncmF5LjgwMCcpfT5cclxuICAgICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nPXs0fVxyXG4gICAgICAgICAgICAgICAgdz17J2Z1bGwnfVxyXG4gICAgICAgICAgICAgICAgbWF4Vz17J21kJ31cclxuICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnZ3JheS43MDAnKX1cclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9eyd4bCd9XHJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9eydsZyd9XHJcbiAgICAgICAgICAgICAgICBwPXs2fVxyXG4gICAgICAgICAgICAgICAgbXk9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGxpbmVIZWlnaHQ9ezEuMX0gZm9udFNpemU9e3sgYmFzZTogJzJ4bCcsIG1kOiAnM3hsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBUb2RvICh7dG9kb3MubGVuZ3RofSlcclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ3NtJywgc206ICdtZCcgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ2dyYXkuNDAwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFdyaXRlIHRoaW5ncyBoZXJlIHNvIHlvdSBkb24ndCBmb3JnZXRcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRvIEhvbWV3b3Jrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBjb2xvcjogJ2dyYXkuNTAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz17J2JsdWUuNDAwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6ICdibHVlLjUwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGl0bGUubGVuZ3RoID09PSAwfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBUb2RvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBtYXJnaW46IFwiOHB4XCIgfX0+e3RvZG8udGl0bGV9LS0ge3RvZG8uY29tcGxldGVkID8gXCJjb21wbGV0ZWRcIiA6IFwiaW5jb21wbGV0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbWFyZ2luWD17MX0gc2l6ZT17XCJzbVwifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUb2dnbGUodG9kby5pZCl9PlRvZ2dsZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtQ29udHJvbCIsIkZsZXgiLCJIZWFkaW5nIiwiSW5wdXQiLCJTdGFjayIsIlRleHQiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZVN0YXRlIiwiVG9kb3MiLCJ0b2RvcyIsInNldFRvZG9zIiwidGl0bGUiLCJzZXRUaXRsZSIsImhhbmRsZUFkZCIsImlkIiwiRGF0ZSIsIm5vdyIsImNvbXBsZXRlZCIsImhhbmRsZVRvZ2dsZSIsIm5ld1RvZG9MaXN0IiwiZmlsdGVyIiwidG9kbyIsIm1pbkgiLCJhbGlnbiIsImp1c3RpZnkiLCJiZyIsInNwYWNpbmciLCJ3IiwibWF4VyIsInJvdW5kZWQiLCJib3hTaGFkb3ciLCJwIiwibXkiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJiYXNlIiwibWQiLCJsZW5ndGgiLCJzbSIsImNvbG9yIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJfaG92ZXIiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ1bCIsIm1hcCIsImxpIiwic3R5bGUiLCJtYXJnaW4iLCJtYXJnaW5YIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});