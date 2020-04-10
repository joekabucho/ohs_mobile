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

module.exports = "<!-- student-create.html -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Create Induction Checklist</ion-title>\n    <ion-button slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Location</ion-label>\n\n      <ion-select class=\"form-control\" id=\"category\"  [(ngModel)]=\"data.location\"\n      [ngModelOptions]=\"{standalone: true}\"\n      type=\"text\" (blur)=\"focus = false\"\n      (focus)=\"focus = true\"\n      >\n          <ion-select-option *ngFor=\"let jobcard of jobcardData\" [value]=\"jobcard.location\">{{jobcard.location}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Manager</ion-label>\n  \n      <ion-select class=\"form-control\" id=\"category\"  [(ngModel)]=\"data.manager\"\n      [ngModelOptions]=\"{standalone: true}\"\n      type=\"text\" (blur)=\"focus = false\"\n      (focus)=\"focus = true\"\n      >\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.name\">{{user.name}}</ion-select-option>\n          </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Position</ion-label>\n    <ion-input [(ngModel)]=\"data.position\" placeholder=\"Enter Position\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label style=\"padding-top: 10px\">Work place: </ion-label >\n      <ion-select class=\"form-control\" id=\"category\"  [(ngModel)]=\"data.workplace\"\n      [ngModelOptions]=\"{standalone: true}\"\n      type=\"text\" (blur)=\"focus = false\"\n      (focus)=\"focus = true\"\n      >\n          <ion-select-option *ngFor=\"let jobcard of jobcardData\" [value]=\"jobcard.name\">{{jobcard.name}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>have you checked the competencies and qualification of the inductees</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.competencies\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have inductees signed on and added proof of permits and qualifications</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.permits\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have you discussed and clearly stated the procedures for reporting incidents injuries and hazards</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.reporting_incidents\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have you discussed the workplace safety rules</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.workplace_safety\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Has the person(s) been taken through relevant safe work method statement for the tasks to be performed</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.safe_work_method\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Is specialized equipment required to have been trained to use the equipment</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.specialised_equipment\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Do people have correct PPE equipment e.g hard hat ,safety glasses,safety boots, long sleeved shirts,high visibility vests?</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.ppe_equipment\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have you shown peoprelativele assembly point in case of an emergecy</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.assembly_points\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have you shown people what to do in an emergency and closest medical facility?</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.medical_facility\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Do the staff have a way to contact emergecy services</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.emergency_services\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have you shown the person what to do in an emergency situation and identified the location and provision of emergency communication?</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.emergency_communication\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Have you shown the person where all relevant firefighting equipment is located?</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.firefighting\"></ion-checkbox>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-button (click)=\"submitForm()\">Add\n    </ion-button>\n  </ion-item>\n\n</ion-content>"

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
/* harmony import */ var _services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/dev */ "./src/app/config/dev.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var InductionchecklistCreatePage = /** @class */ (function () {
    function InductionchecklistCreatePage(http, apiService, router, jobService, loadingController) {
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this.jobService = jobService;
        this.loadingController = loadingController;
        this.url = _config_dev__WEBPACK_IMPORTED_MODULE_6__["dev"].connect;
        this.data = new _models_inductionchecklist__WEBPACK_IMPORTED_MODULE_1__["Inductionchecklist"]();
        this.jobcardData = [];
        this.getAllUsers();
        this.getUser();
    }
    InductionchecklistCreatePage.prototype.ngOnInit = function () {
        this.getAlljobcards();
    };
    InductionchecklistCreatePage.prototype.submitForm = function () {
        var _this = this;
        this.apiService.createItem(this.data).subscribe(function (response) {
            _this.router.navigate(['home-results']);
        });
    };
    InductionchecklistCreatePage.prototype.getAlljobcards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        this.apiService.getList().subscribe(function (response) {
                            console.log(response);
                            _this.jobcardData = response;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InductionchecklistCreatePage.prototype.getAllUsers = function () {
        var _this = this;
        this.http.get(this.url + '/api/user/getAll').subscribe(function (data) {
            _this.users = data;
        });
    };
    InductionchecklistCreatePage.prototype.getUser = function () {
        this.profile = localStorage.getItem('profile');
    };
    InductionchecklistCreatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inductionchecklist-create',
            template: __webpack_require__(/*! ./inductionchecklist-create.page.html */ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.html"),
            styles: [__webpack_require__(/*! ./inductionchecklist-create.page.scss */ "./src/app/pages/inductionchecklist-create/inductionchecklist-create.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _services_inductionchecklist_service__WEBPACK_IMPORTED_MODULE_2__["InductionchecklistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_jobcard_service__WEBPACK_IMPORTED_MODULE_4__["JobcardService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], InductionchecklistCreatePage);
    return InductionchecklistCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-inductionchecklist-create-inductionchecklist-create-module.js.map