(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verification-image-verification-image-module"],{

/***/ "./src/app/pages/verification-image/verification-image.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/verification-image/verification-image.module.ts ***!
  \***********************************************************************/
/*! exports provided: VerificationImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationImagePageModule", function() { return VerificationImagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verification_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-image.page */ "./src/app/pages/verification-image/verification-image.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _verification_image_page__WEBPACK_IMPORTED_MODULE_5__["VerificationImagePage"]
    }
];
var VerificationImagePageModule = /** @class */ (function () {
    function VerificationImagePageModule() {
    }
    VerificationImagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_verification_image_page__WEBPACK_IMPORTED_MODULE_5__["VerificationImagePage"]]
        })
    ], VerificationImagePageModule);
    return VerificationImagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/verification-image/verification-image.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/verification-image/verification-image.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Upload Verification Image</ion-title>\n    <ion-button slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\"></div>  \n    <div class=\"form-group\">\n      <ion-item>\n\n      <ion-input\n      [(ngModel)]=\"file\"\n      [ngModelOptions]=\"{standalone: true}\"\n      class=\"form-control\"\n      type=\"file\"\n      id=\"file\"\n      (change)=\"handleFileInput($event.target.files)\"></ion-input>\n\n      </ion-item>\n    \n\n      \n      <ion-item>\n\n         \n            <ion-label style=\"padding-top: 10px\">Upload For: </ion-label >\n            <ion-select class=\"form-control\" id=\"category\"  [(ngModel)]=\"user\"\n            [ngModelOptions]=\"{standalone: true}\"\n            type=\"text\" (blur)=\"focus = false\"\n            (focus)=\"focus = true\"\n            >\n                <ion-select-option *ngFor=\"let user of users\" [value]=\"user._id\">{{user.name}}</ion-select-option>\n            </ion-select>\n       \n          </ion-item>\n\n          <ion-item>\n          <ion-input\n           [(ngModel)]=\"amount\"\n           [ngModelOptions]=\"{standalone: true}\"\n           class=\"form-control\"\n           placeholder=\"number\"\n           type=\"text\" (blur)=\"focus = false\"\n           (focus)=\"focus = true\" ></ion-input>\n          </ion-item>\n           <ion-item>\n\n           <ion-label style=\"padding-top: 10px\">Site name: </ion-label >\n            <ion-select class=\"form-control\" id=\"category\"  [(ngModel)]=\"filename\"\n            [ngModelOptions]=\"{standalone: true}\"\n            type=\"text\" (blur)=\"focus = false\"\n            (focus)=\"focus = true\"\n            >\n                <ion-select-option *ngFor=\"let jobcard of jobcardData\" [value]=\"jobcard.name\">{{jobcard.name}}</ion-select-option>\n            </ion-select>\n       </ion-item>\n      <ion-button class=\"btn btn-primary\" id=\"signup\" (click)=\"upload()\" style=\"width: 140px; margin-left: 40%; margin-bottom: 10px;\">Upload</ion-button>\n\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/verification-image/verification-image.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/verification-image/verification-image.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi1pbWFnZS92ZXJpZmljYXRpb24taW1hZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/verification-image/verification-image.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/verification-image/verification-image.page.ts ***!
  \*********************************************************************/
/*! exports provided: VerificationImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationImagePage", function() { return VerificationImagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/dev */ "./src/app/config/dev.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_jobcard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/jobcard.service */ "./src/app/services/jobcard.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var VerificationImagePage = /** @class */ (function () {
    function VerificationImagePage(http, apiService, loadingController) {
        this.http = http;
        this.apiService = apiService;
        this.loadingController = loadingController;
        this.fileToUpload = null;
        this.url = _config_dev__WEBPACK_IMPORTED_MODULE_1__["dev"].connect;
        this.getAllUsers();
        this.getUser();
    }
    VerificationImagePage.prototype.ngOnInit = function () {
        this.getAlljobcards();
    };
    VerificationImagePage.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    VerificationImagePage.prototype.upload = function () {
        var _this = this;
        this.postFile(this.fileToUpload, ('/' + this.fileToUpload.name)).subscribe(function (data) {
            console.log(data);
            alert('Image was uploaded successfully for verification');
            _this.user = '';
            _this.amount = '';
            _this.filename = '';
            _this.fileToUpload = null;
            _this.file = '';
        });
    };
    VerificationImagePage.prototype.postFile = function (fileToUpload, filename) {
        var formData = new FormData();
        formData.append('sampleFile', fileToUpload, filename);
        formData.append('user', this.user.toString());
        formData.append('uploadedby', this.profile);
        formData.append('amount', this.amount.toString());
        formData.append('namefile', this.filename.toString());
        return this.http
            .post(this.url + '/api/files', formData);
    };
    VerificationImagePage.prototype.getAllUsers = function () {
        var _this = this;
        this.http.get(this.url + '/api/user/getAll').subscribe(function (data) {
            _this.users = data;
        });
    };
    VerificationImagePage.prototype.getUser = function () {
        this.profile = localStorage.getItem('profile');
    };
    VerificationImagePage.prototype.getAlljobcards = function () {
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
    VerificationImagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verification-image',
            template: __webpack_require__(/*! ./verification-image.page.html */ "./src/app/pages/verification-image/verification-image.page.html"),
            styles: [__webpack_require__(/*! ./verification-image.page.scss */ "./src/app/pages/verification-image/verification-image.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_jobcard_service__WEBPACK_IMPORTED_MODULE_3__["JobcardService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], VerificationImagePage);
    return VerificationImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-verification-image-verification-image-module.js.map