(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-incident-create-incident-create-module"],{

/***/ "./src/app/models/incident.ts":
/*!************************************!*\
  !*** ./src/app/models/incident.ts ***!
  \************************************/
/*! exports provided: Incident */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Incident", function() { return Incident; });
var Incident = /** @class */ (function () {
    function Incident() {
    }
    return Incident;
}());



/***/ }),

/***/ "./src/app/pages/incident-create/incident-create.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/incident-create/incident-create.module.ts ***!
  \*****************************************************************/
/*! exports provided: IncidentCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCreatePageModule", function() { return IncidentCreatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incident_create_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incident-create.page */ "./src/app/pages/incident-create/incident-create.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _incident_create_page__WEBPACK_IMPORTED_MODULE_5__["IncidentCreatePage"]
    }
];
var IncidentCreatePageModule = /** @class */ (function () {
    function IncidentCreatePageModule() {
    }
    IncidentCreatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_incident_create_page__WEBPACK_IMPORTED_MODULE_5__["IncidentCreatePage"]]
        })
    ], IncidentCreatePageModule);
    return IncidentCreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/incident-create/incident-create.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/incident-create/incident-create.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- student-create.html -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Create Incident</ion-title>\n    <ion-button slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n \n  <ion-item>\n    <ion-label>Serious injury</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.serious_injury\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Serious incident</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.serious_incident\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>first aid</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.first_aid\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>medical aid</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.medical_aid\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>potentially serious incident</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.potential_serious\"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>production loss</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.production_loss\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>date reported</ion-label>\n    <ion-datetime [(ngModel)]=\"data.date_time_reported\" placeholder=\"Enter date reported\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>worker job title</ion-label>\n    <ion-input [(ngModel)]=\"data.worker_job_title\" placeholder=\"Enter worker job title\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Date of incident</ion-label>\n    <ion-datetime [(ngModel)]=\"data.date_of_incident\" placeholder=\"Enter Date of incident\"></ion-datetime>\n  </ion-item>\n  <h3>Incident reported to</h3>\n  <ion-item>\n    <ion-label>first aider</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.first_aider\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Supervisor</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.supervisor\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Another Worker</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.another_worker\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>OHS committee member</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.ohs_committee_member\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>OHS representative</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.ohs_representative\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Employer</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.employer\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Prime contractor</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.prime_contractor\"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Any other person</ion-label>\n    <ion-checkbox [(ngModel)]=\"data.other_person\"></ion-checkbox>\n  </ion-item>\n \n\n\n\n  <ion-item>\n    <ion-button (click)=\"submitForm()\">Add\n    </ion-button>\n  </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/incident-create/incident-create.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/incident-create/incident-create.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luY2lkZW50LWNyZWF0ZS9pbmNpZGVudC1jcmVhdGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/incident-create/incident-create.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/incident-create/incident-create.page.ts ***!
  \***************************************************************/
/*! exports provided: IncidentCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentCreatePage", function() { return IncidentCreatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_incident__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/incident */ "./src/app/models/incident.ts");
/* harmony import */ var _services_incidents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/incidents.service */ "./src/app/services/incidents.service.ts");
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




var IncidentCreatePage = /** @class */ (function () {
    function IncidentCreatePage(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = new _models_incident__WEBPACK_IMPORTED_MODULE_1__["Incident"]();
    }
    IncidentCreatePage.prototype.ngOnInit = function () {
    };
    IncidentCreatePage.prototype.submitForm = function () {
        var _this = this;
        this.apiService.createItem(this.data).subscribe(function (response) {
            _this.router.navigate(['home-results']);
        });
    };
    IncidentCreatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident-create',
            template: __webpack_require__(/*! ./incident-create.page.html */ "./src/app/pages/incident-create/incident-create.page.html"),
            styles: [__webpack_require__(/*! ./incident-create.page.scss */ "./src/app/pages/incident-create/incident-create.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_incidents_service__WEBPACK_IMPORTED_MODULE_2__["IncidentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IncidentCreatePage);
    return IncidentCreatePage;
}());



/***/ }),

/***/ "./src/app/services/incidents.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/incidents.service.ts ***!
  \***********************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// api.service.ts




var IncidentService = /** @class */ (function () {
    function IncidentService(http) {
        this.http = http;
        // API path
        this.base_path = 'http://13.59.82.69:8000/api/incident';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    IncidentService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    // Create a new item
    IncidentService.prototype.createItem = function (item) {
        return this.http
            .post(this.base_path, JSON.stringify(item), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Get single student data by ID
    IncidentService.prototype.getItem = function (_id) {
        return this.http
            .get(this.base_path + '/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Get students data
    IncidentService.prototype.getList = function () {
        return this.http
            .get(this.base_path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Update item by id
    IncidentService.prototype.updateItem = function (_id, item) {
        return this.http
            .put(this.base_path + '/' + _id, JSON.stringify(item), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Delete item by id
    IncidentService.prototype.deleteItem = function (_id) {
        return this.http
            .delete(this.base_path + '/' + _id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    IncidentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IncidentService);
    return IncidentService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-incident-create-incident-create-module.js.map