(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"login auth-page\">\n\n  <div class=\"auth-content\">\n    <!-- Logo -->\n    <div padding-horizontal text-center>\n      <div class=\"logo\"></div>\n      <h3 no-margin>\n        <ion-text color=\"light\" class=\"fw700\">\n          <ion-text color=\"secondary\">Register</ion-text>\n        </ion-text>\n      </h3>\n    </div>\n\n    <!-- Register form -->\n    <form [formGroup]=\"onRegisterForm\" class=\"list-form\">\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"text\" formControlName=\"fullName\"    [(ngModel)]=\"sname\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('fullName').touched && onRegisterForm.get('fullName').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"mail\" item-start></ion-icon>\n          Email\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"email\" formControlName=\"email\"  [(ngModel)]=\"semail\"></ion-input>\n      </ion-item>\n      <p ion-text class=\"text08\" *ngIf=\"onRegisterForm.get('email').touched && onRegisterForm.get('email').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n\n      <ion-item no-padding class=\"animated fadeInUp\">\n        <ion-label position=\"floating\">\n          <ion-icon name=\"lock\" item-start></ion-icon>\n          Password\n        </ion-label>\n        <ion-input color=\"secondary\" type=\"password\" formControlName=\"password\"  [(ngModel)]=\"spassword\"></ion-input>\n      </ion-item>\n      <p ion-text color=\"warning\" class=\"text08\" *ngIf=\"onRegisterForm.get('password').touched && onRegisterForm.get('password').hasError('required')\">\n        <ion-text color=\"warning\">\n          This field is required\n        </ion-text>\n      </p>\n    </form>\n\n    <div margin-top>\n      <ion-button icon-left size=\"medium\" expand=\"full\" shape=\"round\" color=\"dark\" (click)=\"signUp()\" [disabled]=\"!onRegisterForm.valid\"\n        tappable>\n        <ion-icon name=\"log-in\"></ion-icon>\n        Sign Up\n      </ion-button>\n\n     \n\n     \n\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span (click)=\"goToLogin()\" tappable>\n        <ion-text color=\"light\">\n          <strong>I have an account!</strong>\n        </ion-text>\n      </span>\n    </div>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(135deg, var(--ion-color-dark), var(--ion-color-primary)) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wcm9qZWN0cy9PSFMvb2hzX21vYmlsZS9pb25pYzQtc3RhcnQtdGhlbWUtbWFzdGVyL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1RkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1pb24tY29sb3ItZGFyayksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSlcbiAgfVxufVxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1kYXJrKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpKSA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _config_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/dev */ "./src/app/config/dev.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, menuCtrl, loadingCtrl, formBuilder, http, router, notificationservice) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.notificationservice = notificationservice;
        this.srole = 'User';
        this.sdepartment = 'User';
        this.url = _config_dev__WEBPACK_IMPORTED_MODULE_5__["dev"].connect;
    }
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    RegisterPage.prototype.ngOnInit = function () {
        this.onRegisterForm = this.formBuilder.group({
            'fullName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])]
        });
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        var signUpButton = document.getElementById('signUp');
        var signInButton = document.getElementById('signIn');
        var container = document.getElementById('container');
        signUpButton.addEventListener('click', function () {
            console.log("Clicked signup");
            container.classList.add('right-panel-active');
        });
        signInButton.addEventListener('click', function () {
            console.log("Clicked signin");
            container.classList.remove('right-panel-active');
        });
    };
    RegisterPage.prototype.signUpp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            duration: 2000
                        })];
                    case 1:
                        loader = _a.sent();
                        loader.present();
                        loader.onWillDismiss().then(function () {
                            _this.navCtrl.navigateRoot('/home-results');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // // //
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.navigateRoot('/');
    };
    RegisterPage.prototype.signIn = function () {
        var _this = this;
        if (this.email === undefined || this.password === undefined ||
            this.email === '' || this.password === '' ||
            this.email == null || this.password == null) {
            this.notification = true;
            this.wrongdetails = false;
        }
        else if (!this.email.includes('@')) {
            this.error = 'An error occured not a valid email address.';
            this.wrongdetails = true;
            this.notification = false;
        }
        else if (!this.email.includes('.')) {
            this.error = 'An error occured not a valid email addresss .';
            this.wrongdetails = true;
            this.notification = false;
        }
        else if (this.email.includes('@') && this.email.includes('.')) {
            var payload = {
                email: this.email,
                password: this.password
            };
            this.http.post(this.url + '/api/user/login', payload).subscribe(function (data) {
                if (data) {
                    _this.saveUserDetails(data);
                    // tslint:disable-next-line:triple-equals
                    if (data.role === 'job_author') {
                        _this.router.navigateByUrl('list-jobcard');
                    }
                    if (data.role === 'technician') {
                        _this.router.navigateByUrl('contact-us');
                    }
                    if (data.role === 'pm_hod') {
                        _this.router.navigateByUrl('pm-dashboard');
                    }
                    if (data.role === 'ohs_officer') {
                        _this.router.navigateByUrl('ohs');
                    }
                    if (data.role === 'noc_officer') {
                        _this.router.navigateByUrl('noc-dashboard');
                    }
                }
            }, function (error) {
                // console.log("An error occured");
                alert('Login error, you sure you used the right credentials?');
            });
        }
    };
    RegisterPage.prototype.verify = function () {
        var container = document.getElementById('container');
        if (this.semail === undefined || this.spassword === undefined || this.sname === undefined) {
            this.snotification = true;
        }
        else if (!this.semail.includes('@')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        }
        else if (!this.semail.includes('.')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        }
        else {
            var payload = {
                email: this.semail,
                role: this.srole,
                password: this.spassword,
                department: this.sdepartment,
                name: this.sname,
            };
            this.http.post(this.url + '/api/user/verify', payload).subscribe(function (data) {
                if (data) {
                    // this.toast.success("Use the code sent to your email to finalize the account creation", "Registration Message!");
                    document.getElementById('code').style.display = 'block';
                    document.getElementById('verify').style.display = 'none';
                    document.getElementById('signup').style.display = 'block';
                    alert("Use the code sent to your email to finalize the account creation");
                }
            }, function (error) {
                alert("An error occured.");
                //  (document.getElementById('sger') as HTMLElement).style.display = 'block';
            });
        }
    };
    RegisterPage.prototype.signUp = function () {
        var container = document.getElementById('container');
        if (this.semail === undefined || this.spassword === undefined || this.sname === undefined) {
            this.snotification = true;
        }
        else if (!this.semail.includes('@')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        }
        else if (!this.semail.includes('.')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        }
        else {
            var payload = {
                email: this.semail,
                role: this.srole,
                password: this.spassword,
                department: this.sdepartment,
                name: this.sname,
                code: this.scode
            };
            console.log(payload);
            this.http.post(this.url + '/api/user/register', payload).subscribe(function (data) {
                if (data) {
                    console.log(data);
                    container.classList.remove('right-panel-active');
                }
            });
        }
    };
    RegisterPage.prototype.saveUserDetails = function (user) {
        localStorage.setItem('profile', user._id.toString());
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map