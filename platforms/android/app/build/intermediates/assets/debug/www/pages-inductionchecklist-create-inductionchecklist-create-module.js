(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inductionchecklist-create-inductionchecklist-create-module"],{

/***/ "./src/app/models/inductionchecklist.ts":
/*!**********************************************!*\
  !*** ./src/app/models/inductionchecklist.ts ***!
  \**********************************************/
/*! exports provided: Inductionchecklist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inductionchecklist", function() { return Inductionchecklist; });
var Inductionchecklist = /** @class */ (function () {
    function Inductionchecklist() {
    }
    return Inductionchecklist;
}());



/***/ }),

/***/ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/inductionchecklist-create/inductionchecklist-create.module.ts ***!
  \*************************************************************************************/
/*! exports provided: InductionchecklistCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InductionchecklistCreatePageModule", function() { return InductionchecklistCreatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inductionchecklist_create_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inductionchecklist-create.page */ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _inductionchecklist_create_page__WEBPACK_IMPORTED_MODULE_5__["InductionchecklistCreatePage"]
    }
];
var InductionchecklistCreatePageModule = /** @class */ (function () {
    function InductionchecklistCreatePageModule() {
    }
    InductionchecklistCreatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_inductionchecklist_create_page__WEBPACK_IMPORTED_MODULE_5__["InductionchecklistCreatePage"]]
        })
    ], InductionchecklistCreatePageModule);
    return InductionchecklistCreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- student-create.html -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Create Induction Checklist</ion-title>\n    <ion-button slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Location</ion-label>\n    <ion-input [(ngModel)]=\"data.location\" placeholder=\"Enter Location\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Manager</ion-label>\n    <ion-input [(ngModel)]=\"data.manager\" placeholder=\"Enter Manager\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Position</ion-label>\n    <ion-input [(ngModel)]=\"data.position\" placeholder=\"Enter Position\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Workplace</ion-label>\n    <ion-input [(ngModel)]=\"data.workplace\" placeholder=\"Enter Workplace\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Competencies</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.competencies\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Permits</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.permits\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Reporting Incidents</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.reporting_incidents\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Work Safety</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.workplace_safety\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Safe Work Method</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.safe_work_method\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Specialised Equipment</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.specialised_equipment\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>PPE Equipment</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.ppe_equipment\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Assembly Points</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.assembly_points\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Medical Facility</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.medical_facility\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Emergency Services</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.emergency_services\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Emergency Communication</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.emergency_communication\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Fire Fighting</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.firefighting\"></ion-checkbox>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-button (click)=\"submitForm()\">Add\n    </ion-button>\n  </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZHVjdGlvbmNoZWNrbGlzdC1jcmVhdGUvaW5kdWN0aW9uY2hlY2tsaXN0LWNyZWF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.ts ***!
  \***********************************************************************************/
/*! exports provided: InductionchecklistCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InductionchecklistCreatePage", function() { return InductionchecklistCreatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_inductionchecklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/inductionchecklist */ "./src/app/models/inductionchecklist.ts");
/* harmony import */ var _services_inductionchecklist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inductionchecklist.service */ "./src/app/services/inductionchecklist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InductionchecklistCreatePage = /** @class */ (function () {
    function InductionchecklistCreatePage(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = new _models_inductionchecklist__WEBPACK_IMPORTED_MODULE_1__["Inductionchecklist"]();
    }
    InductionchecklistCreatePage.prototype.ngOnInit = function () {
    };
    InductionchecklistCreatePage.prototype.submitForm = function () {
        var _this = this;
        this.apiService.createItem(this.data).subscribe(function (response) {
            _this.router.navigate(['home-results']);
        });
    };
    InductionchecklistCreatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inductionchecklist-create',
            template: __webpack_require__(/*! ./inductionchecklist-create.page.html */ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.html"),
            styles: [__webpack_require__(/*! ./inductionchecklist-create.page.scss */ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_inductionchecklist_service__WEBPACK_IMPORTED_MODULE_2__["InductionchecklistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InductionchecklistCreatePage);
    return InductionchecklistCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inductionchecklist-create-inductionchecklist-create-module.js.map