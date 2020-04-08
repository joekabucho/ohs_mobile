(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-upload-image-upload-module"],{

/***/ "./src/app/pages/image-upload/image-upload.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/image-upload/image-upload.module.ts ***!
  \***********************************************************/
/*! exports provided: ImageUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadPageModule", function() { return ImageUploadPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_upload_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-upload.page */ "./src/app/pages/image-upload/image-upload.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _image_upload_page__WEBPACK_IMPORTED_MODULE_5__["ImageUploadPage"]
    }
];
var ImageUploadPageModule = /** @class */ (function () {
    function ImageUploadPageModule() {
    }
    ImageUploadPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_image_upload_page__WEBPACK_IMPORTED_MODULE_5__["ImageUploadPage"]]
        })
    ], ImageUploadPageModule);
    return ImageUploadPageModule;
}());



/***/ }),

/***/ "./src/app/pages/image-upload/image-upload.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/image-upload/image-upload.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Create Verification Image</ion-title>\n    <ion-button slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding\"></div>\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\" style=\"position: fixed;\">\n    <ion-fab-button (click)=\"takePicture()\">\n      <ion-ripple-effect></ion-ripple-effect>\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/image-upload/image-upload.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/image-upload/image-upload.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/image-upload/image-upload.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/image-upload/image-upload.page.ts ***!
  \*********************************************************/
/*! exports provided: ImageUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadPage", function() { return ImageUploadPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageUploadPage = /** @class */ (function () {
    function ImageUploadPage(file, uploadService, camera) {
        this.file = file;
        this.uploadService = uploadService;
        this.camera = camera;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
    }
    ImageUploadPage.prototype.ngOnInit = function () {
    };
    ImageUploadPage.prototype.ngAfterViewInit = function () {
    };
    ImageUploadPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            var formData = new FormData();
            formData.append('name', 'Hello');
            formData.append('file', imgBlob, file.name);
            _this.uploadService.uploadFile(formData).subscribe(function (dataRes) {
                console.log(dataRes);
            });
        };
        reader.readAsArrayBuffer(file);
    };
    ImageUploadPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                    console.log(file);
                    _this.readFile(file);
                });
            });
        }, function (err) {
            alert("unable to take image try again later");
        });
    };
    ImageUploadPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-upload',
            template: __webpack_require__(/*! ./image-upload.page.html */ "./src/app/pages/image-upload/image-upload.page.html"),
            styles: [__webpack_require__(/*! ./image-upload.page.scss */ "./src/app/pages/image-upload/image-upload.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"], _services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]])
    ], ImageUploadPage);
    return ImageUploadPage;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.uploadFile = function (formData) {
        return this.http.post('https://example.com/upload.php', formData);
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-upload-image-upload-module.js.map