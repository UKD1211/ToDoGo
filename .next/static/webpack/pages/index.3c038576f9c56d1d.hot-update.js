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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Todos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Todos() {\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAdd = ()=>{\n        setTodos([\n            ...todos,\n            {\n                id: Date.now(),\n                title: title,\n                completed: false\n            }\n        ]);\n        setTitle(\"\");\n    };\n    const handleToggle = (id)=>{\n        let newTodoList = todos.filter((todo)=>{\n            if (todo.id === id) {\n                todo.completed = !todo.completed;\n            }\n            return todo;\n        });\n        setTodos();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        minH: \"100vh\",\n        align: \"center\",\n        justify: \"center\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"transparent\", \"gray.800\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n            spacing: 4,\n            w: \"full\",\n            maxW: \"md\",\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"white\", \"gray.700\"),\n            rounded: \"xl\",\n            boxShadow: \"lg\",\n            p: 6,\n            my: 12,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                    lineHeight: 1.1,\n                    fontSize: {\n                        base: \"2xl\",\n                        md: \"3xl\"\n                    },\n                    children: \"Create a Todo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    fontSize: {\n                        base: \"sm\",\n                        sm: \"md\"\n                    },\n                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"gray.400\"),\n                    children: \"Write things here so you don't forget\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                    id: \"email\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Do Homeworks\",\n                        _placeholder: {\n                            color: \"gray.500\"\n                        },\n                        type: \"text\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        bg: \"blue.400\",\n                        color: \"white\",\n                        _hover: {\n                            bg: \"blue.500\"\n                        },\n                        onClick: ()=>handleAdd(),\n                        disabled: title.length == 0,\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    todo.title,\n                                    \"-- \",\n                                    todo.completed ? \"completed\" : \"incomplete\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        onClick: ()=>handleToggle(todo.id),\n                                        children: \"Toggle\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\DEv Works\\\\Mjor big and some min projects\\\\To-do_Next_app\\\\todonextapp\\\\component\\\\Todos.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Todos, \"KU/cziA29YqcwGYOuNkFZ6Pp7w0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = Todos;\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvVG9kb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUzBCO0FBQ087QUFJbEIsU0FBU1MsUUFBUTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1NLFlBQVksSUFBTTtRQUNwQkgsU0FBUztlQUFJRDtZQUFPO2dCQUFDSyxJQUFHQyxLQUFLQyxHQUFHO2dCQUFJTCxPQUFPQTtnQkFBT00sV0FBVyxLQUFLO1lBQUM7U0FBRTtRQUNyRUwsU0FBUztJQUNiO0lBRUEsTUFBTU0sZUFBZSxDQUFDSixLQUFPO1FBQ3pCLElBQUlLLGNBQWNWLE1BQU1XLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUTtZQUNuQyxJQUFHQSxLQUFLUCxFQUFFLEtBQUtBLElBQUk7Z0JBQ2ZPLEtBQUtKLFNBQVMsR0FBRyxDQUFDSSxLQUFLSixTQUFTO1lBQ3BDLENBQUM7WUFDRCxPQUFPSTtRQUNYO1FBRUFYO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ1Qsa0RBQUlBO1FBQ0RxQixNQUFNO1FBQ05DLE9BQU87UUFDUEMsU0FBUztRQUNUQyxJQUFJbkIsbUVBQWlCQSxDQUFDLGVBQWU7a0JBQ3JDLDRFQUFDRixtREFBS0E7WUFDRnNCLFNBQVM7WUFDVEMsR0FBRztZQUNIQyxNQUFNO1lBQ05ILElBQUluQixtRUFBaUJBLENBQUMsU0FBUztZQUMvQnVCLFNBQVM7WUFDVEMsV0FBVztZQUNYQyxHQUFHO1lBQ0hDLElBQUk7OzhCQUNKLDhEQUFDOUIscURBQU9BO29CQUFDK0IsWUFBWTtvQkFBS0MsVUFBVTt3QkFBRUMsTUFBTTt3QkFBT0MsSUFBSTtvQkFBTTs4QkFBRzs7Ozs7OzhCQUdoRSw4REFBQy9CLGtEQUFJQTtvQkFDRDZCLFVBQVU7d0JBQUVDLE1BQU07d0JBQU1FLElBQUk7b0JBQUs7b0JBQ2pDQyxPQUFPaEMsbUVBQWlCQSxDQUFDLFlBQVk7OEJBQWE7Ozs7Ozs4QkFHdEQsOERBQUNOLHlEQUFXQTtvQkFBQ2MsSUFBRzs4QkFFWiw0RUFBQ1gsbURBQUtBO3dCQUNGb0MsYUFBWTt3QkFDWkMsY0FBYzs0QkFBRUYsT0FBTzt3QkFBVzt3QkFDbENHLE1BQUs7d0JBQ0xDLE9BQU8vQjt3QkFDUGdDLFVBQVUsQ0FBQ0MsSUFBTWhDLFNBQVNnQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzhCQUdoRCw4REFBQ3RDLG1EQUFLQTtvQkFBQ3NCLFNBQVM7OEJBQ1osNEVBQUMzQixvREFBTUE7d0JBQ0gwQixJQUFJO3dCQUNKYSxPQUFPO3dCQUNQUSxRQUFROzRCQUNKckIsSUFBSTt3QkFDUjt3QkFDQXNCLFNBQVMsSUFBTWxDO3dCQUNmbUMsVUFBVXJDLE1BQU1zQyxNQUFNLElBQUk7a0NBRTdCOzs7Ozs7Ozs7Ozs4QkFJTCw4REFBQzdDLG1EQUFLQTs4QkFDRiw0RUFBQzhDO2tDQUNJekMsTUFBTTBDLEdBQUcsQ0FBQzlCLENBQUFBLHFCQUNQLDhEQUFDK0I7O29DQUFJL0IsS0FBS1YsS0FBSztvQ0FBQztvQ0FBSVUsS0FBS0osU0FBUyxHQUFFLGNBQWEsWUFBWTtrREFDN0QsOERBQUNsQixvREFBTUE7d0NBQUNnRCxTQUFTLElBQUs3QixhQUFhRyxLQUFLUCxFQUFFO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekUsQ0FBQztHQS9FdUJOOztRQXlCUkYsK0RBQWlCQTtRQUtiQSwrREFBaUJBO1FBVVZBLCtEQUFpQkE7OztLQXhDcEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9Ub2Rvcy5qc3g/ZmY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGbGV4LFxyXG4gICAgSGVhZGluZyxcclxuICAgIElucHV0LFxyXG4gICAgU3RhY2ssXHJcbiAgICBUZXh0LFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvcygpIHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKFsuLi50b2Rvcywge2lkOkRhdGUubm93KCksIHRpdGxlOiB0aXRsZSwgY29tcGxldGVkOiBmYWxzZSB9XSk7XHJcbiAgICAgICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdUb2RvTGlzdCA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHtcclxuICAgICAgICAgICAgaWYodG9kby5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUb2RvcygpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtaW5IPXsnMTAwdmgnfVxyXG4gICAgICAgICAgICBhbGlnbj17J2NlbnRlcid9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9eydjZW50ZXInfVxyXG4gICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ3RyYW5zcGFyZW50JywgJ2dyYXkuODAwJyl9PlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezR9XHJcbiAgICAgICAgICAgICAgICB3PXsnZnVsbCd9XHJcbiAgICAgICAgICAgICAgICBtYXhXPXsnbWQnfVxyXG4gICAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZScsICdncmF5LjcwMCcpfVxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD17J3hsJ31cclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdz17J2xnJ31cclxuICAgICAgICAgICAgICAgIHA9ezZ9XHJcbiAgICAgICAgICAgICAgICBteT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgbGluZUhlaWdodD17MS4xfSBmb250U2l6ZT17eyBiYXNlOiAnMnhsJywgbWQ6ICczeGwnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIFRvZG9cclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ3NtJywgc206ICdtZCcgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ2dyYXkuNDAwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIFdyaXRlIHRoaW5ncyBoZXJlIHNvIHlvdSBkb24ndCBmb3JnZXRcclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRvIEhvbWV3b3Jrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wbGFjZWhvbGRlcj17eyBjb2xvcjogJ2dyYXkuNTAwJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz17J2JsdWUuNDAwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9eyd3aGl0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6ICdibHVlLjUwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGl0bGUubGVuZ3RoID09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFRvZG9cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8U3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0b2RvLnRpdGxlfS0tIHt0b2RvLmNvbXBsZXRlZD8gXCJjb21wbGV0ZWRcIjogXCJpbmNvbXBsZXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT4gaGFuZGxlVG9nZ2xlKHRvZG8uaWQpfT5Ub2dnbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGbGV4IiwiSGVhZGluZyIsIklucHV0IiwiU3RhY2siLCJUZXh0IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJ1c2VTdGF0ZSIsIlRvZG9zIiwidG9kb3MiLCJzZXRUb2RvcyIsInRpdGxlIiwic2V0VGl0bGUiLCJoYW5kbGVBZGQiLCJpZCIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJoYW5kbGVUb2dnbGUiLCJuZXdUb2RvTGlzdCIsImZpbHRlciIsInRvZG8iLCJtaW5IIiwiYWxpZ24iLCJqdXN0aWZ5IiwiYmciLCJzcGFjaW5nIiwidyIsIm1heFciLCJyb3VuZGVkIiwiYm94U2hhZG93IiwicCIsIm15IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiYmFzZSIsIm1kIiwic20iLCJjb2xvciIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiX2hvdmVyIiwib25DbGljayIsImRpc2FibGVkIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Todos.jsx\n"));

/***/ })

});