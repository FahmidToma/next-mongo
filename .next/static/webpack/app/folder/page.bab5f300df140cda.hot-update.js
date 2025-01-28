"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/folder/page",{

/***/ "(app-pages-browser)/./src/app/folder/page.tsx":
/*!*********************************!*\
  !*** ./src/app/folder/page.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdKeyboardArrowRight_react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MdKeyboardArrowRight!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_RxCrossCircled_react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RxCrossCircled!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_GoPlus_react_icons_go__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=GoPlus!=!react-icons/go */ \"(app-pages-browser)/./node_modules/react-icons/go/index.mjs\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal */ \"(app-pages-browser)/./src/components/Modal.tsx\");\n/* harmony import */ var _lib_serverActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/serverActions */ \"(app-pages-browser)/./src/lib/serverActions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Folder = ()=>{\n    _s();\n    const [click, setClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [folderName, setFolderName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [folderNames, setFolderNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [parentId, setParentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const toggleModal = ()=>{\n        setClick(!click);\n    };\n    //for fetching all the folders to show\n    const fetchFolder = async ()=>{\n        console.log(\"Getting folders----client\");\n        const result = await (0,_lib_serverActions__WEBPACK_IMPORTED_MODULE_3__.getFolders)();\n        console.log(\"Got the folders---client\", result);\n        setFolderNames(result);\n        // setParentId(result.parent);\n        // console.log(result.parent)\n        setLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Folder.useEffect\": ()=>{\n            fetchFolder();\n        }\n    }[\"Folder.useEffect\"], []);\n    //for creating a new folder\n    const handleForm = async (e)=>{\n        e.preventDefault();\n        //const data = { name };\n        console.log(folderName);\n        if (!folderName) {\n            setError(\"Please enter a folder name\");\n            return;\n        }\n        try {\n            //const parentId = folderNames.length == 0 ? null : folderNames[0]._id;\n            //console.log(parentId);\n            await (0,_lib_serverActions__WEBPACK_IMPORTED_MODULE_3__.createFolder)(folderName, parentId);\n            setFolderName('');\n        } catch (error) {\n            console.error(\"There is error creating folder\", error);\n        }\n        //const result = await createFolder(name, parentId);\n        toggleModal();\n        await fetchFolder();\n    };\n    //handleNewFolder\n    const handleNewFolder = (parentId)=>{\n        setParentId(parentId);\n        //setFolderName(name);\n        toggleModal();\n    };\n    //handle Delete\n    const handleDelete = async (id)=>{\n        await (0,_lib_serverActions__WEBPACK_IMPORTED_MODULE_3__.deleteFolder)(id);\n        alert(\"Successfully deleted the item\");\n        fetchFolder();\n    };\n    const renderFolderStructure = (parentId)=>{\n        return folderNames.filter((folder)=>folder.parent === parentId).map((folder)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between group hover:bg-slate-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-1  p-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdKeyboardArrowRight_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdKeyboardArrowRight, {}, void 0, false, {\n                                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: folder.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDelete(folder._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxCrossCircled_react_icons_rx__WEBPACK_IMPORTED_MODULE_5__.RxCrossCircled, {\n                                            className: \"opacity-0 group-hover:opacity-100 hover:bg-red-600 rounded-full hover:text-white\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 78\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center bg-slate-500 text-white gap-1 max-w-16 px-2 opacity-0 group-hover:opacity-100\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GoPlus_react_icons_go__WEBPACK_IMPORTED_MODULE_6__.GoPlus, {}, void 0, false, {\n                                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleNewFolder(folder._id),\n                                        children: \"New\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pl-5\",\n                        children: renderFolderStructure(folder._id)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, folder._id, true, {\n                fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                lineNumber: 93,\n                columnNumber: 17\n            }, undefined));\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-center text-2xl mt-10\",\n        children: \"Loading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n        lineNumber: 109,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center space-y-1 mt-2 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-semibold\",\n                children: \"Folder Structure Viewer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-300\",\n                children: \"[Note: The new button is available when you expand the folder.]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-200 font-semibold max-w-3xl mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5\",\n                        children: \"Folder structure view\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" max-w-16 mx-auto \",\n                        children: click && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            isOpen: click,\n                            onRequestClose: toggleModal,\n                            folderName: folderName,\n                            setFolderName: setFolderName,\n                            handleSubmit: handleForm,\n                            error: error\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-200 pb-5 h-[450px] overflow-y-auto\",\n                        children: renderFolderStructure(null)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                        lineNumber: 136,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\next-mongo\\\\nextjs-mongodb\\\\src\\\\app\\\\folder\\\\page.tsx\",\n        lineNumber: 112,\n        columnNumber: 12\n    }, undefined);\n};\n_s(Folder, \"bFlU1xx1SWLRHAMAwd/lgYEIJuQ=\");\n_c = Folder;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);\nvar _c;\n$RefreshReg$(_c, \"Folder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZm9sZGVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXVEO0FBQzJCO0FBQ2xDO0FBQ1I7QUFDZDtBQUNhO0FBQ3NDO0FBUzdFLE1BQU1VLFNBQVM7O0lBQ1gsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQVcsRUFBRTtJQUMzRCxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBZ0I7SUFDeEQsTUFBTSxDQUFDa0IsT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBO0lBQ2xDLE1BQU0sQ0FBQ29CLFNBQVNDLFdBQVcsR0FBR3JCLCtDQUFRQSxDQUFVO0lBRWhELE1BQU1zQixjQUFjO1FBQ2hCWCxTQUFTLENBQUNEO0lBQ2Q7SUFFQSxzQ0FBc0M7SUFDdEMsTUFBTWEsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1osTUFBTUMsU0FBUyxNQUFNbEIsOERBQVVBO1FBQy9CZ0IsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QkM7UUFDeENYLGVBQWVXO1FBQ2YsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QkwsV0FBVztJQUNmO0lBRUF0QixnREFBU0E7NEJBQUM7WUFDTndCO1FBRUo7MkJBQUcsRUFBRTtJQUdMLDJCQUEyQjtJQUMzQixNQUFNSSxhQUFhLE9BQU9DO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCLHdCQUF3QjtRQUN4QkwsUUFBUUMsR0FBRyxDQUFDYjtRQUVaLElBQUksQ0FBQ0EsWUFBWTtZQUNiTyxTQUFTO1lBQ1Q7UUFDSjtRQUVBLElBQUk7WUFDQSx1RUFBdUU7WUFDdkUsd0JBQXdCO1lBQ3ZCLE1BQU1iLGdFQUFZQSxDQUFDTSxZQUFZSTtZQUNoQ0gsY0FBYztRQUVsQixFQUFFLE9BQU9LLE9BQU87WUFDWk0sUUFBUU4sS0FBSyxDQUFDLGtDQUFrQ0E7UUFDcEQ7UUFFQSxvREFBb0Q7UUFDcERJO1FBQ0EsTUFBTUM7SUFFVjtJQUVBLGlCQUFpQjtJQUNqQixNQUFNTyxrQkFBa0IsQ0FBQ2Q7UUFDckJDLFlBQVlEO1FBQ1osc0JBQXNCO1FBQ3RCTTtJQUNKO0lBRUEsZUFBZTtJQUNmLE1BQU1TLGVBQWUsT0FBT0M7UUFDeEIsTUFBTXpCLGdFQUFZQSxDQUFDeUI7UUFDbkJDLE1BQU07UUFDTlY7SUFDSjtJQUVBLE1BQU1XLHdCQUF3QixDQUFDbEI7UUFFM0IsT0FBT0YsWUFDRnFCLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxNQUFNLEtBQUtyQixVQUNyQ3NCLEdBQUcsQ0FBQyxDQUFDRix1QkFDRiw4REFBQ0c7Z0JBQXFCQyxXQUFVOztrQ0FDNUIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDdkMsNEdBQW9CQTs7Ozs7a0RBQ3JCLDhEQUFDd0M7a0RBQVFMLE9BQU9NLElBQUk7Ozs7OztrREFDcEIsOERBQUNEO3dDQUFPRSxTQUFTLElBQU1aLGFBQWFLLE9BQU9RLEdBQUc7a0RBQUcsNEVBQUMxQyxnR0FBY0E7NENBQUNzQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFL0UsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ3JDLGdGQUFNQTs7Ozs7a0RBQ1AsOERBQUNzQzt3Q0FBT0UsU0FBUyxJQUFNYixnQkFBZ0JNLE9BQU9RLEdBQUc7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUQsOERBQUNMO3dCQUFJQyxXQUFVO2tDQUFRTixzQkFBc0JFLE9BQU9RLEdBQUc7Ozs7Ozs7ZUFaakRSLE9BQU9RLEdBQUc7Ozs7O0lBZWhDO0lBQ0EsSUFBSXhCLFNBQVMscUJBQU8sOERBQUN5QjtRQUFFTCxXQUFVO2tCQUE2Qjs7Ozs7O0lBRzlELHFCQUFPLDhEQUFDRDtRQUFJQyxXQUFVOzswQkFDbEIsOERBQUNNO2dCQUFHTixXQUFVOzBCQUF3Qjs7Ozs7OzBCQUN0Qyw4REFBQ0s7Z0JBQUVMLFdBQVU7MEJBQWdCOzs7Ozs7MEJBQzdCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNLO3dCQUFFTCxXQUFVO2tDQUFPOzs7Ozs7a0NBQ3BCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FNUDlCLHVCQUVJLDhEQUFDTCx5REFBS0E7NEJBQ0YwQyxRQUFRckM7NEJBQ1JzQyxnQkFBZ0IxQjs0QkFDaEJWLFlBQVlBOzRCQUNaQyxlQUFlQTs0QkFDZm9DLGNBQWN0Qjs0QkFDZFQsT0FBT0E7Ozs7Ozs7Ozs7O2tDQUt2Qiw4REFBQ3FCO3dCQUFJQyxXQUFVO2tDQUdWTixzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QztHQTlITXpCO0tBQUFBO0FBZ0lOLGlFQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcUHJvamVjdHNcXG5leHQtbW9uZ29cXG5leHRqcy1tb25nb2RiXFxzcmNcXGFwcFxcZm9sZGVyXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEtleWJvYXJkQXJyb3dSaWdodCwgTWRPdXRsaW5lS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgUnhDcm9zc0NpcmNsZWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuaW1wb3J0IHsgR29QbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdAL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb2xkZXIsIGRlbGV0ZUZvbGRlciwgZ2V0Rm9sZGVycyB9IGZyb20gXCJAL2xpYi9zZXJ2ZXJBY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvbGRlciB7XHJcbiAgICBfaWQ6IHN0cmluZyxcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIHBhcmVudD86IHN0cmluZyB8IG51bGwsXHJcblxyXG59XHJcblxyXG5jb25zdCBGb2xkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY2xpY2ssIHNldENsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtmb2xkZXJOYW1lLCBzZXRGb2xkZXJOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2ZvbGRlck5hbWVzLCBzZXRGb2xkZXJOYW1lc10gPSB1c2VTdGF0ZTxGb2xkZXJbXT4oW10pO1xyXG4gICAgY29uc3QgW3BhcmVudElkLCBzZXRQYXJlbnRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2xpY2soIWNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ZvciBmZXRjaGluZyBhbGwgdGhlIGZvbGRlcnMgdG8gc2hvd1xyXG4gICAgY29uc3QgZmV0Y2hGb2xkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXR0aW5nIGZvbGRlcnMtLS0tY2xpZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEZvbGRlcnMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCB0aGUgZm9sZGVycy0tLWNsaWVudFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHNldEZvbGRlck5hbWVzKHJlc3VsdCk7XHJcbiAgICAgICAgLy8gc2V0UGFyZW50SWQocmVzdWx0LnBhcmVudCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnBhcmVudClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRm9sZGVyKCk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICAvL2ZvciBjcmVhdGluZyBhIG5ldyBmb2xkZXJcclxuICAgIGNvbnN0IGhhbmRsZUZvcm0gPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9jb25zdCBkYXRhID0geyBuYW1lIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVyTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghZm9sZGVyTmFtZSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvcihcIlBsZWFzZSBlbnRlciBhIGZvbGRlciBuYW1lXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2NvbnN0IHBhcmVudElkID0gZm9sZGVyTmFtZXMubGVuZ3RoID09IDAgPyBudWxsIDogZm9sZGVyTmFtZXNbMF0uX2lkO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhcmVudElkKTtcclxuICAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUZvbGRlcihmb2xkZXJOYW1lLCBwYXJlbnRJZCk7XHJcbiAgICAgICAgICAgIHNldEZvbGRlck5hbWUoJycpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaXMgZXJyb3IgY3JlYXRpbmcgZm9sZGVyXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0gYXdhaXQgY3JlYXRlRm9sZGVyKG5hbWUsIHBhcmVudElkKTtcclxuICAgICAgICB0b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgIGF3YWl0IGZldGNoRm9sZGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vaGFuZGxlTmV3Rm9sZGVyXHJcbiAgICBjb25zdCBoYW5kbGVOZXdGb2xkZXIgPSAocGFyZW50SWQ6IHN0cmluZyB8IG51bGwpID0+IHtcclxuICAgICAgICBzZXRQYXJlbnRJZChwYXJlbnRJZCk7XHJcbiAgICAgICAgLy9zZXRGb2xkZXJOYW1lKG5hbWUpO1xyXG4gICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9oYW5kbGUgRGVsZXRlXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRlbGV0ZUZvbGRlcihpZCk7XHJcbiAgICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsbHkgZGVsZXRlZCB0aGUgaXRlbVwiKTtcclxuICAgICAgICBmZXRjaEZvbGRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckZvbGRlclN0cnVjdHVyZSA9IChwYXJlbnRJZDogc3RyaW5nIHwgbnVsbCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gZm9sZGVyTmFtZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoZm9sZGVyKSA9PiBmb2xkZXIucGFyZW50ID09PSBwYXJlbnRJZClcclxuICAgICAgICAgICAgLm1hcCgoZm9sZGVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Zm9sZGVyLl9pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdyb3VwIGhvdmVyOmJnLXNsYXRlLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMSAgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRLZXlib2FyZEFycm93UmlnaHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+e2ZvbGRlci5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoZm9sZGVyLl9pZCl9PjxSeENyb3NzQ2lyY2xlZCBjbGFzc05hbWU9XCJvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6YmctcmVkLTYwMCByb3VuZGVkLWZ1bGwgaG92ZXI6dGV4dC13aGl0ZVwiIC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXNsYXRlLTUwMCB0ZXh0LXdoaXRlIGdhcC0xIG1heC13LTE2IHB4LTIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29QbHVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5ld0ZvbGRlcihmb2xkZXIuX2lkKX0+TmV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNVwiPntyZW5kZXJGb2xkZXJTdHJ1Y3R1cmUoZm9sZGVyLl9pZCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSlcclxuICAgIH1cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0yeGwgbXQtMTBcIj5Mb2FkaW5nLi4uLjwvcD5cclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS0xIG10LTIgXCIgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5Gb2xkZXIgU3RydWN0dXJlIFZpZXdlcjwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPltOb3RlOiBUaGUgbmV3IGJ1dHRvbiBpcyBhdmFpbGFibGUgd2hlbiB5b3UgZXhwYW5kIHRoZSBmb2xkZXIuXTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIGZvbnQtc2VtaWJvbGQgbWF4LXctM3hsIG14LWF1dG8gcC01XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTVcIj5Gb2xkZXIgc3RydWN0dXJlIHZpZXc8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1heC13LTE2IG14LWF1dG8gXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctc2xhdGUtNTAwIHRleHQtd2hpdGUgZ2FwLTEgbWF4LXctMTYgbXgtYXV0byBwLTEgbS01XCI+IDxHb1BsdXM+PC9Hb1BsdXM+PGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+bmV3PC9idXR0b24+PC9kaXY+Ki99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGljayAmJiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dG9nZ2xlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJOYW1lPXtmb2xkZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9sZGVyTmFtZT17c2V0Rm9sZGVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgcGItNSBoLVs0NTBweF0gb3ZlcmZsb3cteS1hdXRvJz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAge3JlbmRlckZvbGRlclN0cnVjdHVyZShudWxsKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGRlcjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZEtleWJvYXJkQXJyb3dSaWdodCIsIlJ4Q3Jvc3NDaXJjbGVkIiwiR29QbHVzIiwiUmVhY3QiLCJNb2RhbCIsImNyZWF0ZUZvbGRlciIsImRlbGV0ZUZvbGRlciIsImdldEZvbGRlcnMiLCJGb2xkZXIiLCJjbGljayIsInNldENsaWNrIiwiZm9sZGVyTmFtZSIsInNldEZvbGRlck5hbWUiLCJmb2xkZXJOYW1lcyIsInNldEZvbGRlck5hbWVzIiwicGFyZW50SWQiLCJzZXRQYXJlbnRJZCIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZ2dsZU1vZGFsIiwiZmV0Y2hGb2xkZXIiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiaGFuZGxlRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZU5ld0ZvbGRlciIsImhhbmRsZURlbGV0ZSIsImlkIiwiYWxlcnQiLCJyZW5kZXJGb2xkZXJTdHJ1Y3R1cmUiLCJmaWx0ZXIiLCJmb2xkZXIiLCJwYXJlbnQiLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJuYW1lIiwib25DbGljayIsIl9pZCIsInAiLCJoMSIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwiaGFuZGxlU3VibWl0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/folder/page.tsx\n"));

/***/ })

});