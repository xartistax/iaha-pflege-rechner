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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var survey_core_defaultV2_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core/defaultV2.min.css */ \"(app-pages-browser)/./node_modules/.pnpm/survey-core@1.11.13/node_modules/survey-core/defaultV2.min.css\");\n/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../survey */ \"(app-pages-browser)/./survey/index.ts\");\n/* harmony import */ var survey_core_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! survey-core/themes */ \"(app-pages-browser)/./node_modules/.pnpm/survey-core@1.11.13/node_modules/survey-core/themes/index.js\");\n/* harmony import */ var survey_core_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(survey_core_themes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! survey-core */ \"(app-pages-browser)/./node_modules/.pnpm/survey-core@1.11.13/node_modules/survey-core/survey.core.js\");\n/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! survey-react-ui */ \"(app-pages-browser)/./node_modules/.pnpm/survey-react-ui@1.11.13_react-dom@18.3.1_react@18.3.1__react@18.3.1_survey-core@1.11.13/node_modules/survey-react-ui/survey-react-ui.js\");\n/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_classes_PflegeRechner_PflegeRechnerCalculations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/classes/PflegeRechner/PflegeRechnerCalculations */ \"(app-pages-browser)/./utils/classes/PflegeRechner/PflegeRechnerCalculations.ts\");\n/* harmony import */ var _utils_classes_PflegeRechner_PflegeRechnerFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/classes/PflegeRechner/PflegeRechnerFields */ \"(app-pages-browser)/./utils/classes/PflegeRechner/PflegeRechnerFields.ts\");\n/* harmony import */ var _survey_ResultsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../survey/ResultsTable */ \"(app-pages-browser)/./survey/ResultsTable.tsx\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/.pnpm/@mui+material@6.1.0_@emotion+react@11.13.3_@types+react@18.3.5_react@18.3.1__@emotion+styled@_42czr4sp5u73p6ghh3lgvsr42m/node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const survey = new survey_core__WEBPACK_IMPORTED_MODULE_5__.Model(_survey__WEBPACK_IMPORTED_MODULE_3__.surveyJson);\n    survey.applyTheme(survey_core_themes__WEBPACK_IMPORTED_MODULE_4__.PlainLightPanelless);\n    // State to track survey completion and store log data\n    const [surveyCompleted, setSurveyCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [calculatedResults, setCalculatedResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    survey.onComplete.add((sender, options)=>{\n        const surveyData = sender.data;\n        // Perform calculations\n        _utils_classes_PflegeRechner_PflegeRechnerCalculations__WEBPACK_IMPORTED_MODULE_7__.PflegeRechnerCalculations.iahaCalculation(surveyData);\n        // Update state with calculation results\n        setCalculatedResults(_utils_classes_PflegeRechner_PflegeRechnerFields__WEBPACK_IMPORTED_MODULE_8__.PflegeRechnerFields.fields.calculationResults);\n        setSurveyCompleted(true);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true); // This triggers when the component mounts (on client-side)\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        id: \"SurveyMain\",\n        maxWidth: \"md\",\n        sx: {\n            mt: 3\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            children: [\n                isClient && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(survey_react_ui__WEBPACK_IMPORTED_MODULE_6__.Survey, {\n                    model: survey\n                }, void 0, false, {\n                    fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 30\n                }, this),\n                surveyCompleted && calculatedResults && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    mt: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            variant: \"h6\",\n                            gutterBottom: true,\n                            children: \"Survey Results\"\n                        }, void 0, false, {\n                            fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_survey_ResultsTable__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            results: calculatedResults\n                        }, void 0, false, {\n                            fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/demianfuglistaler/Projects/iaha-pflege-rechner/src/app/page.tsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"qC4B/OsKFsKzczmrg/Dd5mQzdA8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDWjtBQUN5QztBQUN2QjtBQUNyQjtBQUNLO0FBRWdFO0FBQ2I7QUFDdkM7QUFDTTtBQUUzRCxTQUFTYTs7SUFDTCxNQUFNQyxTQUFTLElBQUlULDhDQUFLQSxDQUFDRiwrQ0FBVUE7SUFDbkNXLE9BQU9DLFVBQVUsQ0FBQ1gsbUVBQW1CQTtJQUVyQyxzREFBc0Q7SUFDdEQsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNnQixtQkFBbUJDLHFCQUFxQixHQUFHakIsK0NBQVFBLENBQWdDO0lBQzFGLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBR3pDWSxPQUFPUSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUFpQ0M7UUFFcEQsTUFBTUMsYUFBYUYsT0FBT0csSUFBSTtRQUU5Qix1QkFBdUI7UUFDdkJwQiw2R0FBeUJBLENBQUNxQixlQUFlLENBQUNGO1FBRTFDLHdDQUF3QztRQUN4Q1AscUJBQXFCWCxpR0FBbUJBLENBQUNxQixNQUFNLENBQUNDLGtCQUFrQjtRQUNsRWIsbUJBQW1CO0lBQ3ZCO0lBSUFoQixnREFBU0EsQ0FBQztRQUNOb0IsWUFBWSxPQUFPLDJEQUEyRDtJQUNoRixHQUFHLEVBQUU7SUFJUCxxQkFDSSw4REFBQ1gscUdBQVNBO1FBQUNxQixJQUFHO1FBQWFDLFVBQVM7UUFBS0MsSUFBSTtZQUFFQyxJQUFJO1FBQUc7a0JBQ2xELDRFQUFDdkIscUdBQUdBOztnQkFFQ1MsMEJBQVksOERBQUNkLG1EQUFNQTtvQkFBQzZCLE9BQU9yQjs7Ozs7O2dCQUczQkUsbUJBQW1CRSxtQ0FDaEIsOERBQUNQLHFHQUFHQTtvQkFBQ3VCLElBQUk7O3NDQUNMLDhEQUFDdEIscUdBQVVBOzRCQUFDd0IsU0FBUTs0QkFBS0MsWUFBWTtzQ0FBQzs7Ozs7O3NDQUd0Qyw4REFBQzVCLDREQUFZQTs0QkFBQzZCLFNBQVNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRL0M7R0FsRFNMO0tBQUFBO0FBb0RULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJzdXJ2ZXktY29yZS9kZWZhdWx0VjIubWluLmNzc1wiO1xuaW1wb3J0IHsgQ2FsY3VsYXRpb25SZXN1bHRzVHlwZSwgc3VydmV5SnNvbiwgU3VydmV5UmVzdWx0IH0gZnJvbSBcIi4uLy4uL3N1cnZleVwiO1xuaW1wb3J0IHsgUGxhaW5MaWdodFBhbmVsbGVzcyB9IGZyb20gXCJzdXJ2ZXktY29yZS90aGVtZXNcIjtcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSBcInN1cnZleS1jb3JlXCI7XG5pbXBvcnQgeyBTdXJ2ZXkgfSBmcm9tIFwic3VydmV5LXJlYWN0LXVpXCI7XG5pbXBvcnQgeyBfRmllbGRzLCBfQ2FsY3VsYXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NsYXNzZXMvUGZsZWdlUmVjaG5lclwiO1xuaW1wb3J0IHsgIFBmbGVnZVJlY2huZXJDYWxjdWxhdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2xhc3Nlcy9QZmxlZ2VSZWNobmVyL1BmbGVnZVJlY2huZXJDYWxjdWxhdGlvbnNcIjtcbmltcG9ydCB7IFBmbGVnZVJlY2huZXJGaWVsZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY2xhc3Nlcy9QZmxlZ2VSZWNobmVyL1BmbGVnZVJlY2huZXJGaWVsZHNcIjtcbmltcG9ydCBSZXN1bHRzVGFibGUgZnJvbSBcIi4uLy4uL3N1cnZleS9SZXN1bHRzVGFibGVcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBzdXJ2ZXkgPSBuZXcgTW9kZWwoc3VydmV5SnNvbik7XG4gICAgc3VydmV5LmFwcGx5VGhlbWUoUGxhaW5MaWdodFBhbmVsbGVzcyk7XG5cbiAgICAvLyBTdGF0ZSB0byB0cmFjayBzdXJ2ZXkgY29tcGxldGlvbiBhbmQgc3RvcmUgbG9nIGRhdGFcbiAgICBjb25zdCBbc3VydmV5Q29tcGxldGVkLCBzZXRTdXJ2ZXlDb21wbGV0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjYWxjdWxhdGVkUmVzdWx0cywgc2V0Q2FsY3VsYXRlZFJlc3VsdHNdID0gdXNlU3RhdGU8Q2FsY3VsYXRpb25SZXN1bHRzVHlwZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgICBzdXJ2ZXkub25Db21wbGV0ZS5hZGQoKHNlbmRlcjogeyBkYXRhOiBTdXJ2ZXlSZXN1bHQ7IH0sIG9wdGlvbnM6IGFueSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHN1cnZleURhdGEgPSBzZW5kZXIuZGF0YSBhcyBTdXJ2ZXlSZXN1bHQ7XG5cbiAgICAgICAgLy8gUGVyZm9ybSBjYWxjdWxhdGlvbnNcbiAgICAgICAgUGZsZWdlUmVjaG5lckNhbGN1bGF0aW9ucy5pYWhhQ2FsY3VsYXRpb24oc3VydmV5RGF0YSk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgc3RhdGUgd2l0aCBjYWxjdWxhdGlvbiByZXN1bHRzXG4gICAgICAgIHNldENhbGN1bGF0ZWRSZXN1bHRzKFBmbGVnZVJlY2huZXJGaWVsZHMuZmllbGRzLmNhbGN1bGF0aW9uUmVzdWx0cyk7XG4gICAgICAgIHNldFN1cnZleUNvbXBsZXRlZCh0cnVlKTtcbiAgICB9KTtcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc0NsaWVudCh0cnVlKTsgLy8gVGhpcyB0cmlnZ2VycyB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzIChvbiBjbGllbnQtc2lkZSlcbiAgICAgIH0sIFtdKTtcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGlkPVwiU3VydmV5TWFpblwiIG1heFdpZHRoPVwibWRcIiBzeD17eyBtdDogMyAgfX0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIHsvKiBSZW5kZXIgU3VydmV5ICovfVxuICAgICAgICAgICAgICAgIHtpc0NsaWVudCAmJiA8U3VydmV5IG1vZGVsPXtzdXJ2ZXl9IC8+fVxuXG4gICAgICAgICAgICAgICAgey8qIENvbmRpdGlvbmFsbHkgcmVuZGVyIHRoZSByZXN1bHRzIHRhYmxlIG9ubHkgYWZ0ZXIgdGhlIHN1cnZleSBpcyBjb21wbGV0ZWQgKi99XG4gICAgICAgICAgICAgICAge3N1cnZleUNvbXBsZXRlZCAmJiBjYWxjdWxhdGVkUmVzdWx0cyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cnZleSBSZXN1bHRzIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3VsdHNUYWJsZSByZXN1bHRzPXtjYWxjdWxhdGVkUmVzdWx0c30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN1cnZleUpzb24iLCJQbGFpbkxpZ2h0UGFuZWxsZXNzIiwiTW9kZWwiLCJTdXJ2ZXkiLCJQZmxlZ2VSZWNobmVyQ2FsY3VsYXRpb25zIiwiUGZsZWdlUmVjaG5lckZpZWxkcyIsIlJlc3VsdHNUYWJsZSIsIkNvbnRhaW5lciIsIkJveCIsIlR5cG9ncmFwaHkiLCJIb21lIiwic3VydmV5IiwiYXBwbHlUaGVtZSIsInN1cnZleUNvbXBsZXRlZCIsInNldFN1cnZleUNvbXBsZXRlZCIsImNhbGN1bGF0ZWRSZXN1bHRzIiwic2V0Q2FsY3VsYXRlZFJlc3VsdHMiLCJpc0NsaWVudCIsInNldElzQ2xpZW50Iiwib25Db21wbGV0ZSIsImFkZCIsInNlbmRlciIsIm9wdGlvbnMiLCJzdXJ2ZXlEYXRhIiwiZGF0YSIsImlhaGFDYWxjdWxhdGlvbiIsImZpZWxkcyIsImNhbGN1bGF0aW9uUmVzdWx0cyIsImlkIiwibWF4V2lkdGgiLCJzeCIsIm10IiwibW9kZWwiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwicmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});