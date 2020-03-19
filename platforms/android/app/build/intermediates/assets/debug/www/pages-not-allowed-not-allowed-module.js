(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-not-allowed-not-allowed-module"],{

/***/ "./src/app/pages/not-allowed/not-allowed.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-allowed/not-allowed.module.ts ***!
  \*********************************************************/
/*! exports provided: NotAllowedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAllowedPageModule", function() { return NotAllowedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_allowed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-allowed.page */ "./src/app/pages/not-allowed/not-allowed.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _not_allowed_page__WEBPACK_IMPORTED_MODULE_5__["NotAllowedPage"]
    }
];
var NotAllowedPageModule = /** @class */ (function () {
    function NotAllowedPageModule() {
    }
    NotAllowedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_not_allowed_page__WEBPACK_IMPORTED_MODULE_5__["NotAllowedPage"]]
        })
    ], NotAllowedPageModule);
    return NotAllowedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/not-allowed/not-allowed.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-allowed/not-allowed.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"bg-profile\" text-center padding>\n    <img src=\"assets/img/ionic4start-ico.png\">\n  </div>\n\n  <ion-card class=\"bg-white\" no-margin>\n    <ion-card-content>\n      <h1 margin-bottom>\n        <img src=\"assets/img/500.svg\">\n      </h1>\n      <p margin-bottom>\n        login with a technician account\n       </p>\n\n      \n     \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/not-allowed/not-allowed.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-allowed/not-allowed.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1hbGxvd2VkL25vdC1hbGxvd2VkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/not-allowed/not-allowed.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/not-allowed/not-allowed.page.ts ***!
  \*******************************************************/
/*! exports provided: NotAllowedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAllowedPage", function() { return NotAllowedPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotAllowedPage = /** @class */ (function () {
    function NotAllowedPage() {
    }
    NotAllowedPage.prototype.ngOnInit = function () {
    };
    NotAllowedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-allowed',
            template: __webpack_require__(/*! ./not-allowed.page.html */ "./src/app/pages/not-allowed/not-allowed.page.html"),
            styles: [__webpack_require__(/*! ./not-allowed.page.scss */ "./src/app/pages/not-allowed/not-allowed.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotAllowedPage);
    return NotAllowedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-not-allowed-not-allowed-module.js.map