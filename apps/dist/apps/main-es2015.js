(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calculate-minimum/calculate-minimum.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calculate-minimum/calculate-minimum.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\" class=\"calculate-minimum-form\">\n  <mat-form-field class=\"calculate-minimum-full-width\">\n    <input\n      formControlName=\"nominal\"\n      (keyup)=\"onEnter($event, formGroup.controls.nominal.value)\"\n      matInput\n      placeholder=\"Please input nominal rupiah\">\n    <mat-hint>e.g Rp 500</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input\n      [(ngModel)]=\"tmp\"\n      [ngModelOptions]=\"{standalone: true}\"\n      matInput\n      placeholder=\"Result\">\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calculate_minimum_calculate_minimum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculate-minimum/calculate-minimum.component */ "./src/app/calculate-minimum/calculate-minimum.component.ts");




const routes = [
    { path: '', component: _calculate_minimum_calculate_minimum_component__WEBPACK_IMPORTED_MODULE_3__["CalculateMinimumComponent"], },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'apps';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculate_minimum_calculate_minimum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calculate-minimum/calculate-minimum.component */ "./src/app/calculate-minimum/calculate-minimum.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _calculate_minimum_calculate_minimum_component__WEBPACK_IMPORTED_MODULE_7__["CalculateMinimumComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        schemas: []
    })
], AppModule);



/***/ }),

/***/ "./src/app/calculate-minimum/calculate-minimum.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/calculate-minimum/calculate-minimum.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calculate-minimum-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.calculate-minimum-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXZlbG9wL0Rvd25sb2Fkcy9HSVRIVUIvdGtwZGEtdGVzdC9hcHBzL3NyYy9hcHAvY2FsY3VsYXRlLW1pbmltdW0vY2FsY3VsYXRlLW1pbmltdW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0ZS1taW5pbXVtL2NhbGN1bGF0ZS1taW5pbXVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0ZS1taW5pbXVtL2NhbGN1bGF0ZS1taW5pbXVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGN1bGF0ZS1taW5pbXVtLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiAgXG4uY2FsY3VsYXRlLW1pbmltdW0tZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLmNhbGN1bGF0ZS1taW5pbXVtLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhbGN1bGF0ZS1taW5pbXVtLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/calculate-minimum/calculate-minimum.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/calculate-minimum/calculate-minimum.component.ts ***!
  \******************************************************************/
/*! exports provided: CalculateMinimumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateMinimumComponent", function() { return CalculateMinimumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.service */ "./src/app/calculate-minimum/forms.service.ts");



let CalculateMinimumComponent = class CalculateMinimumComponent {
    constructor(formService) {
        this.formService = formService;
        this.formGroup = this.formService.formGroup;
    }
    ngOnInit() {
        this.formService.ParsingCalculateMinimum().subscribe((resultParsing) => {
            console.log(resultParsing);
        });
    }
    ngOnDestroy() { }
    onEnter(event) {
        if (event.keyCode === 13 && this.formService.error !== null) {
            this.tmp = this.formService.error;
            return;
        }
        if (event.keyCode === 13) {
            this.tmp = this.formService.holdResultParsing;
            return;
        }
    }
};
CalculateMinimumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculate-minimum',
        template: __webpack_require__(/*! raw-loader!./calculate-minimum.component.html */ "./node_modules/raw-loader/index.js!./src/app/calculate-minimum/calculate-minimum.component.html"),
        styles: [__webpack_require__(/*! ./calculate-minimum.component.scss */ "./src/app/calculate-minimum/calculate-minimum.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]])
], CalculateMinimumComponent);



/***/ }),

/***/ "./src/app/calculate-minimum/forms.service.ts":
/*!****************************************************!*\
  !*** ./src/app/calculate-minimum/forms.service.ts ***!
  \****************************************************/
/*! exports provided: FormsService, TypeRupiah */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeRupiah", function() { return TypeRupiah; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FormsService = class FormsService {
    constructor() {
        this.collectionRupiah = [
            {
                nominal: 100000,
                title: 'Rp100000',
            },
            {
                nominal: 50000,
                title: 'Rp50000',
            },
            {
                nominal: 20000,
                title: 'Rp20000',
            },
            {
                nominal: 10000,
                title: 'Rp10000',
            },
            {
                nominal: 5000,
                title: 'Rp5000',
            },
            {
                nominal: 2000,
                title: 'Rp2000',
            },
            {
                nominal: 1000,
                title: 'Rp1000',
            },
            {
                nominal: 500,
                title: 'Rp500',
            },
            {
                nominal: 100,
                title: 'Rp100',
            },
            {
                nominal: 50,
                title: 'Rp50',
            },
        ];
        this.remains = null;
        this.holdResultParsing = null;
        this.error = null;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nominal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
    }
    ParsingCalculateMinimum() {
        return this.formGroup.controls.nominal.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])((resultChange) => {
            this.error = null;
            const modifResult = this.filterConditionRupiah(resultChange);
            if (modifResult) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(modifResult);
            }
            this.error = 'invalid option';
            return resultChange;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])((resultChange) => {
            let collectionRupiahWithCount = this.collectionRupiah.map((value) => {
                value.count = 0;
                return value;
            });
            collectionRupiahWithCount = this.calculateCount(collectionRupiahWithCount, resultChange);
            this.holdResultParsing = this.forceSetCalculateMinimumToString(collectionRupiahWithCount);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(collectionRupiahWithCount);
        }));
    }
    forceSetCalculateMinimumToString(objectTypeRupiah) {
        let result = objectTypeRupiah.map((value) => {
            const forceSet = value.count + 'x ' + value.title;
            return forceSet;
        }).join(', ');
        if (this.remains) {
            result += ',left ' + this.remains.title;
        }
        return result;
    }
    calculateCount(objectRupiah, dividen) {
        objectRupiah = objectRupiah
            .filter((value) => {
            return dividen / value.nominal > 1;
        }).map((value) => {
            value.count = Math.floor(dividen / value.nominal);
            if (value.count > 0) {
                dividen = Math.floor(dividen % value.nominal);
            }
            console.log('>', value);
            return value;
        }).filter((value) => {
            return value.count > 0;
        });
        this.remains = null;
        if (dividen > 0) {
            this.remains = {
                nominal: dividen,
                title: 'Rp' + dividen,
            };
        }
        return objectRupiah;
    }
    filterConditionRupiah(inputParameter) {
        let resultClean = null;
        let result = null;
        if (typeof inputParameter === 'string') {
            const resultCleanWithoutDot = inputParameter.replace(/\./g, '');
            resultClean = resultCleanWithoutDot;
            if (resultClean.indexOf('Rp') > 0 && resultClean.split('Rp').length > 1) {
                return null;
            }
            if (resultClean.indexOf(',00') > -1) {
                if (resultClean.indexOf(',00') !== (resultClean.length - 3)) {
                    return null;
                }
                const resultCleanExtraZero = resultClean.replace(',00', '');
                resultClean = resultCleanExtraZero;
            }
            if (resultClean.search(',') > -1) {
                return null;
            }
            if (resultClean.split('Rp').length > 0) {
                const resultCleanWithoutRp = resultClean.split('Rp').filter((value) => {
                    return value !== 'Rp';
                }).join('');
                resultClean = resultCleanWithoutRp;
            }
            let isInvalidSeperator = true;
            const resultCleanWithoutSpaceSeparator = resultClean.split('').filter((value, index) => {
                if (value === ' ') {
                    isInvalidSeperator = index > 0 ? false : true;
                    return false;
                }
                if (value === ',') {
                    isInvalidSeperator = false;
                    return false;
                }
                return true;
            }).join('');
            resultClean = resultCleanWithoutSpaceSeparator;
            if (!isInvalidSeperator || resultClean.length === 0) {
                return null;
            }
            result = typeof resultClean === 'string' ? parseInt(resultClean, null) : resultClean;
        }
        if (typeof inputParameter === 'number') {
            result = Math.floor(inputParameter);
        }
        return result;
    }
};
FormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormsService);

class TypeRupiah {
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/develop/Downloads/GITHUB/tkpda-test/apps/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map