(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-toolbox-create-toolbox-create-module"],{

/***/ "./src/app/models/tooboxtalks.ts":
/*!***************************************!*\
  !*** ./src/app/models/tooboxtalks.ts ***!
  \***************************************/
/*! exports provided: Toolboxtalks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolboxtalks", function() { return Toolboxtalks; });
var Toolboxtalks = /** @class */ (function () {
    function Toolboxtalks() {
    }
    return Toolboxtalks;
}());



/***/ }),

/***/ "./src/app/pages/toolbox-create/toolbox-create.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbox-create/toolbox-create.module.ts ***!
  \***************************************************************/
/*! exports provided: ToolboxCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxCreatePageModule", function() { return ToolboxCreatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _toolbox_create_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbox-create.page */ "./src/app/pages/toolbox-create/toolbox-create.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _toolbox_create_page__WEBPACK_IMPORTED_MODULE_5__["ToolboxCreatePage"]
    }
];
var ToolboxCreatePageModule = /** @class */ (function () {
    function ToolboxCreatePageModule() {
    }
    ToolboxCreatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_toolbox_create_page__WEBPACK_IMPORTED_MODULE_5__["ToolboxCreatePage"]]
        })
    ], ToolboxCreatePageModule);
    return ToolboxCreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/toolbox-create/toolbox-create.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbox-create/toolbox-create.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- student-create.html -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Create Toolbox Talks</ion-title>\n    <ion-button slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <h3>Critical H2S Areas</h3>\n  <ion-item>\n    <ion-label>Is there a resource Plan</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.resource_plan\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>have you taken necessary Precautions</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.necessary_proc\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Is the presence Gas monitor</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.gov_monitor\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>have you undergone H2S training</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.h2s_training\" ></ion-checkbox>\n  </ion-item>\n  <h3>PPE</h3>\n   <p>Tick if these equipment is there ignore if not</p>\n  <ion-item>\n    <ion-label>Hard hat and safety glasses</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.hard_hat\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>CSA approved boots</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.boots\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cover Walls</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.coverwalls\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Hearing protection,Dusk masks</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.hearing_protection\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Other PPE</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.other_ppe\" ></ion-checkbox>\n  </ion-item>\n  <h3>Communication</h3>\n  <p>Tick if you have information on the following</p>\n  <ion-item>\n    <ion-label>Scope of work</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.scope\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Material Storage and Handling</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.material\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Traffic Control</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.traffic_control\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Mobile Phones</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.mobile_phones\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Incident Reporting</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.incident_reporting\" ></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Smoking</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.smoking\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Speed Limits</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.speed_limits\" ></ion-checkbox>\n  </ion-item>\n  <h3>First Aid Kits</h3>\n  <p>Tick if the site has the following equipment</p>\n  <ion-item>\n    <ion-label>First Aid Kit</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.first_aid_kit\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Emergency</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.emergency\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Regulatory Requests</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.regulatory_requests\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Fire Permit</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.fire_permit\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Task Hazard</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.task_hazard\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Site Work Permit</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.site_work_permit\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Ground disturbance</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.ground_disturbance\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Other Permit Forms</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.other_permit_forms\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Fire Extinguisher</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.fire_extinguishers\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Prestat Check</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.prestat_check\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Back Up Alarm</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.back_up_alarm\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Positive Air Shafts</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.positive_air_shafts\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>People Onboard</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.people_onboard\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Wall Heads</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.wall_heads\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Others On Site</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.others_on_site\" ></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>3rd Party Support</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.third_party_support\" ></ion-checkbox>\n  </ion-item>\n \n \n\n \n  <ion-item>\n    <ion-button (click)=\"submitForm()\">Add\n    </ion-button>\n  </ion-item>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/toolbox-create/toolbox-create.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/toolbox-create/toolbox-create.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rvb2xib3gtY3JlYXRlL3Rvb2xib3gtY3JlYXRlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/toolbox-create/toolbox-create.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/toolbox-create/toolbox-create.page.ts ***!
  \*************************************************************/
/*! exports provided: ToolboxCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxCreatePage", function() { return ToolboxCreatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tooboxtalks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/tooboxtalks */ "./src/app/models/tooboxtalks.ts");
/* harmony import */ var _services_toolboxtalks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/toolboxtalks.service */ "./src/app/services/toolboxtalks.service.ts");
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




var ToolboxCreatePage = /** @class */ (function () {
    function ToolboxCreatePage(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = new _models_tooboxtalks__WEBPACK_IMPORTED_MODULE_1__["Toolboxtalks"]();
    }
    ToolboxCreatePage.prototype.ngOnInit = function () {
    };
    ToolboxCreatePage.prototype.submitForm = function () {
        var _this = this;
        this.apiService.createItem(this.data).subscribe(function (response) {
            _this.router.navigate(['home-results']);
        });
    };
    ToolboxCreatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbox-create',
            template: __webpack_require__(/*! ./toolbox-create.page.html */ "./src/app/pages/toolbox-create/toolbox-create.page.html"),
            styles: [__webpack_require__(/*! ./toolbox-create.page.scss */ "./src/app/pages/toolbox-create/toolbox-create.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_toolboxtalks_service__WEBPACK_IMPORTED_MODULE_2__["ToolboxTalkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToolboxCreatePage);
    return ToolboxCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-toolbox-create-toolbox-create-module.js.map