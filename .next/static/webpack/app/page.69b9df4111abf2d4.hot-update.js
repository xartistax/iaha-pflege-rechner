"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var survey_core_defaultV2_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core/defaultV2.min.css */ \"(app-pages-browser)/./node_modules/.pnpm/survey-core@1.11.13/node_modules/survey-core/defaultV2.min.css\");\n/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../survey */ \"(app-pages-browser)/./survey/index.ts\");\n/* harmony import */ var survey_core_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-core/themes */ \"(app-pages-browser)/./node_modules/.pnpm/survey-core@1.11.13/node_modules/survey-core/themes/index.js\");\n/* harmony import */ var survey_core_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_core_themes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! survey-core */ \"(app-pages-browser)/./node_modules/.pnpm/survey-core@1.11.13/node_modules/survey-core/survey.core.js\");\n/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! survey-react-ui */ \"(app-pages-browser)/./node_modules/.pnpm/survey-react-ui@1.11.13_react-dom@18.3.1_react@18.3.1__react@18.3.1_survey-core@1.11.13/node_modules/survey-react-ui/survey-react-ui.js\");\n/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_classes_PflegeRechner_PflegeRechnerCalculations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/classes/PflegeRechner/PflegeRechnerCalculations */ \"(app-pages-browser)/./utils/classes/PflegeRechner/PflegeRechnerCalculations.ts\");\n/* harmony import */ var _utils_classes_PflegeRechner_PflegeRechnerFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/classes/PflegeRechner/PflegeRechnerFields */ \"(app-pages-browser)/./utils/classes/PflegeRechner/PflegeRechnerFields.ts\");\n/* harmony import */ var _survey_ResultsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../survey/ResultsTable */ \"(app-pages-browser)/./survey/ResultsTable.tsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const survey = new survey_core__WEBPACK_IMPORTED_MODULE_5__.Model(_survey__WEBPACK_IMPORTED_MODULE_3__.surveyJson);\n    survey.applyTheme(survey_core_themes__WEBPACK_IMPORTED_MODULE_4__.PlainLightPanelless);\n    // State to track survey completion and store log data\n    const [surveyCompleted, setSurveyCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [calculatedResults, setCalculatedResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    survey.onComplete.add((sender, options)=>{\n        const surveyData = sender.data;\n        // Perform calculations\n        _utils_classes_PflegeRechner_PflegeRechnerCalculations__WEBPACK_IMPORTED_MODULE_7__.PflegeRechnerCalculations.iahaCalculation(surveyData);\n        // Update state with calculation results\n        setCalculatedResults(_utils_classes_PflegeRechner_PflegeRechnerFields__WEBPACK_IMPORTED_MODULE_8__.PflegeRechnerFields.fields.calculationResults);\n        setSurveyCompleted(true);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true); // This triggers when the component mounts (on client-side)\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        maxWidth: \"md\",\n        sx: {\n            mt: 3,\n            px: 20\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(survey_react_ui__WEBPACK_IMPORTED_MODULE_6__.Survey, {\n                    model: survey\n                }, void 0, false, {\n                    fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                surveyCompleted && calculatedResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    mt: 4,\n                    p: 25,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            variant: \"h6\",\n                            gutterBottom: true,\n                            children: \"Survey Results\"\n                        }, void 0, false, {\n                            fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_survey_ResultsTable__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            results: calculatedResults\n                        }, void 0, false, {\n                            fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"qC4B/OsKFsKzczmrg/Dd5mQzdA8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDWjtBQUN5QztBQUN2QjtBQUNyQjtBQUNLO0FBRWdFO0FBQ2I7QUFDdkM7QUFDTTtBQUUzRCxTQUFTYTs7SUFDTCxNQUFNQyxTQUFTLElBQUlULDhDQUFLQSxDQUFDRiwrQ0FBVUE7SUFDbkNXLE9BQU9DLFVBQVUsQ0FBQ1gsbUVBQW1CQTtJQUVyQyxzREFBc0Q7SUFDdEQsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNnQixtQkFBbUJDLHFCQUFxQixHQUFHakIsK0NBQVFBLENBQWdDO0lBQzFGLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBR3pDWSxPQUFPUSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFpQ0M7UUFFcEQsTUFBTUMsYUFBYUYsT0FBT0csSUFBSTtRQUU5Qix1QkFBdUI7UUFDdkJwQiw2R0FBeUJBLENBQUNxQixlQUFlLENBQUNGO1FBRTFDLHdDQUF3QztRQUN4Q1AscUJBQXFCWCxpR0FBbUJBLENBQUNxQixNQUFNLENBQUNDLGtCQUFrQjtRQUNsRWIsbUJBQW1CO0lBQ3ZCO0lBSUFoQixnREFBU0EsQ0FBQztRQUNOb0IsWUFBWSxPQUFPLDJEQUEyRDtJQUNoRixHQUFHLEVBQUU7SUFJUCxxQkFDSSw4REFBQ1gscUdBQVNBO1FBQUNxQixVQUFTO1FBQUtDLElBQUk7WUFBRUMsSUFBSTtZQUFJQyxJQUFJO1FBQUc7a0JBQzFDLDRFQUFDdkIscUdBQUdBOzs4QkFFQSw4REFBQ0wsbURBQU1BO29CQUFDNkIsT0FBT3JCOzs7Ozs7Z0JBR2RFLG1CQUFtQkUsbUNBQ2hCLDhEQUFDUCxxR0FBR0E7b0JBQUNzQixJQUFJO29CQUFHRyxHQUFHOztzQ0FDWCw4REFBQ3hCLHFHQUFVQTs0QkFBQ3lCLFNBQVE7NEJBQUtDLFlBQVk7c0NBQUM7Ozs7OztzQ0FHdEMsOERBQUM3Qiw0REFBWUE7NEJBQUM4QixTQUFTckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9DO0dBbERTTDtLQUFBQTtBQW9EVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwic3VydmV5LWNvcmUvZGVmYXVsdFYyLm1pbi5jc3NcIjtcbmltcG9ydCB7IENhbGN1bGF0aW9uUmVzdWx0c1R5cGUsIHN1cnZleUpzb24sIFN1cnZleVJlc3VsdCB9IGZyb20gXCIuLi8uLi9zdXJ2ZXlcIjtcbmltcG9ydCB7IFBsYWluTGlnaHRQYW5lbGxlc3MgfSBmcm9tIFwic3VydmV5LWNvcmUvdGhlbWVzXCI7XG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gXCJzdXJ2ZXktY29yZVwiO1xuaW1wb3J0IHsgU3VydmV5IH0gZnJvbSBcInN1cnZleS1yZWFjdC11aVwiO1xuaW1wb3J0IHsgX0ZpZWxkcywgX0NhbGN1bGF0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlscy9jbGFzc2VzL1BmbGVnZVJlY2huZXJcIjtcbmltcG9ydCB7ICBQZmxlZ2VSZWNobmVyQ2FsY3VsYXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NsYXNzZXMvUGZsZWdlUmVjaG5lci9QZmxlZ2VSZWNobmVyQ2FsY3VsYXRpb25zXCI7XG5pbXBvcnQgeyBQZmxlZ2VSZWNobmVyRmllbGRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NsYXNzZXMvUGZsZWdlUmVjaG5lci9QZmxlZ2VSZWNobmVyRmllbGRzXCI7XG5pbXBvcnQgUmVzdWx0c1RhYmxlIGZyb20gXCIuLi8uLi9zdXJ2ZXkvUmVzdWx0c1RhYmxlXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3Qgc3VydmV5ID0gbmV3IE1vZGVsKHN1cnZleUpzb24pO1xuICAgIHN1cnZleS5hcHBseVRoZW1lKFBsYWluTGlnaHRQYW5lbGxlc3MpO1xuXG4gICAgLy8gU3RhdGUgdG8gdHJhY2sgc3VydmV5IGNvbXBsZXRpb24gYW5kIHN0b3JlIGxvZyBkYXRhXG4gICAgY29uc3QgW3N1cnZleUNvbXBsZXRlZCwgc2V0U3VydmV5Q29tcGxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2FsY3VsYXRlZFJlc3VsdHMsIHNldENhbGN1bGF0ZWRSZXN1bHRzXSA9IHVzZVN0YXRlPENhbGN1bGF0aW9uUmVzdWx0c1R5cGUgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKChzZW5kZXI6IHsgZGF0YTogU3VydmV5UmVzdWx0OyB9LCBvcHRpb25zOiBhbnkpID0+IHtcblxuICAgICAgICBjb25zdCBzdXJ2ZXlEYXRhID0gc2VuZGVyLmRhdGEgYXMgU3VydmV5UmVzdWx0O1xuXG4gICAgICAgIC8vIFBlcmZvcm0gY2FsY3VsYXRpb25zXG4gICAgICAgIFBmbGVnZVJlY2huZXJDYWxjdWxhdGlvbnMuaWFoYUNhbGN1bGF0aW9uKHN1cnZleURhdGEpO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIHN0YXRlIHdpdGggY2FsY3VsYXRpb24gcmVzdWx0c1xuICAgICAgICBzZXRDYWxjdWxhdGVkUmVzdWx0cyhQZmxlZ2VSZWNobmVyRmllbGRzLmZpZWxkcy5jYWxjdWxhdGlvblJlc3VsdHMpO1xuICAgICAgICBzZXRTdXJ2ZXlDb21wbGV0ZWQodHJ1ZSk7XG4gICAgfSk7XG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SXNDbGllbnQodHJ1ZSk7IC8vIFRoaXMgdHJpZ2dlcnMgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyAob24gY2xpZW50LXNpZGUpXG4gICAgICB9LCBbXSk7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgbXQ6IDMgLCBweDogMjAgfX0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgU3VydmV5ICovfVxuICAgICAgICAgICAgICAgIDxTdXJ2ZXkgbW9kZWw9e3N1cnZleX0gLz5cblxuICAgICAgICAgICAgICAgIHsvKiBDb25kaXRpb25hbGx5IHJlbmRlciB0aGUgcmVzdWx0cyB0YWJsZSBvbmx5IGFmdGVyIHRoZSBzdXJ2ZXkgaXMgY29tcGxldGVkICovfVxuICAgICAgICAgICAgICAgIHtzdXJ2ZXlDb21wbGV0ZWQgJiYgY2FsY3VsYXRlZFJlc3VsdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Qm94IG10PXs0fSBwPXsyNX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VydmV5IFJlc3VsdHMgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzdWx0c1RhYmxlIHJlc3VsdHM9e2NhbGN1bGF0ZWRSZXN1bHRzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VydmV5SnNvbiIsIlBsYWluTGlnaHRQYW5lbGxlc3MiLCJNb2RlbCIsIlN1cnZleSIsIlBmbGVnZVJlY2huZXJDYWxjdWxhdGlvbnMiLCJQZmxlZ2VSZWNobmVyRmllbGRzIiwiUmVzdWx0c1RhYmxlIiwiQ29udGFpbmVyIiwiQm94IiwiVHlwb2dyYXBoeSIsIkhvbWUiLCJzdXJ2ZXkiLCJhcHBseVRoZW1lIiwic3VydmV5Q29tcGxldGVkIiwic2V0U3VydmV5Q29tcGxldGVkIiwiY2FsY3VsYXRlZFJlc3VsdHMiLCJzZXRDYWxjdWxhdGVkUmVzdWx0cyIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJvbkNvbXBsZXRlIiwiYWRkIiwic2VuZGVyIiwib3B0aW9ucyIsInN1cnZleURhdGEiLCJkYXRhIiwiaWFoYUNhbGN1bGF0aW9uIiwiZmllbGRzIiwiY2FsY3VsYXRpb25SZXN1bHRzIiwibWF4V2lkdGgiLCJzeCIsIm10IiwicHgiLCJtb2RlbCIsInAiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwicmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});