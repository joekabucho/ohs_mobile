(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatbot-chatbot-module"],{

/***/ "./src/app/pages/chatbot/chatbot.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatbot/chatbot.module.ts ***!
  \*************************************************/
/*! exports provided: ChatbotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPageModule", function() { return ChatbotPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatbot_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatbot.page */ "./src/app/pages/chatbot/chatbot.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _chatbot_page__WEBPACK_IMPORTED_MODULE_5__["ChatbotPage"]
    }
];
var ChatbotPageModule = /** @class */ (function () {
    function ChatbotPageModule() {
    }
    ChatbotPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_chatbot_page__WEBPACK_IMPORTED_MODULE_5__["ChatbotPage"]]
        })
    ], ChatbotPageModule);
    return ChatbotPageModule;
}());



/***/ }),

/***/ "./src/app/pages/chatbot/chatbot.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/chatbot/chatbot.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>ChatBot</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div class=\"chats\">\n      <div class=\"chatbox\">\n        <div *ngFor=\"let chat of chats\">\n          <div class=\"message sent\" *ngIf=\"chat.type!=='bot' && chat.isMe\">\n            {{chat.message}}\n            <span class=\"metadata\">\n              <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n            </span>\n          </div>\n          <div class=\"message received\"  *ngIf=\"chat.type =='bot' && !chat.isMe\">\n            {{chat.message}}\n            <span class=\"metadata\">\n              <span class=\"time\">{{chat.createdAt | date: 'HH:mm aaa'}}</span>\n            </span>\n          </div>\n        </div>\n      </div>\n      </div>\n\n  <ion-footer>\n      <p text-center *ngIf=\"sending\">sending...</p>\n      <div class=\"flex-items\" padding>\n\n          <ion-input [(ngModel)]=\"message\" name=\"message\" class=\"input_message\" placeholder=\"send message ...\"></ion-input>\n          <ion-icon (click)=\"sendMessage()\" class=\"send\" name=\"send\"></ion-icon>\n        </div>\n  </ion-footer>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/chatbot/chatbot.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/chatbot/chatbot.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-items {\n  display: flex;\n  background-color: #fff; }\n\n.icon {\n  font-size: 50px;\n  opacity: 0.5;\n  padding-left: 40px;\n  align-self: center; }\n\n.send {\n  color: #603CD7;\n  font-size: 30px; }\n\n.input_message {\n  border: 1px solid #603CD7;\n  border-radius: 15px; }\n\n.messages {\n  height: 100%;\n  position: relative; }\n\n.footer {\n  position: fixed;\n  bottom: 5%; }\n\n.chats {\n  height: 100%;\n  position: relative;\n  z-index: 0; }\n\n.chats .chatbox {\n  height: calc(100% - 80px);\n  overflow-x: hidden;\n  padding: 0 16px;\n  padding-bottom: 30px; }\n\n.joined {\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  margin: 8px 0;\n  padding: 8px; }\n\n.joined span {\n  padding: 5px; }\n\n/* Messages*/\n\n.message {\n  color: #000;\n  clear: both;\n  line-height: 18px;\n  font-size: 15px;\n  padding: 8px;\n  position: relative;\n  margin: 8px 0;\n  max-width: 85%;\n  word-wrap: break-word;\n  z-index: -1; }\n\n.message:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  border-style: solid; }\n\n.message:first-child {\n  margin: 16px 0 8px; }\n\n.message.received {\n  background: #ccc;\n  border-radius: 0px 5px 5px 5px;\n  float: left; }\n\n.message.received:after {\n  border-width: 0px 10px 10px 0;\n  border-color: transparent #ccc transparent transparent;\n  top: 0;\n  left: -10px; }\n\n.message.sent {\n  background: #e1ffc7;\n  border-radius: 5px 0px 5px 5px;\n  float: right; }\n\n.message.sent:after {\n  border-width: 0px 0 10px 10px;\n  border-color: transparent transparent transparent #e1ffc7;\n  top: 0;\n  right: -10px; }\n\n.scroll-content {\n  padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wcm9qZWN0cy9PSFMvb2hzX21vYmlsZS9zcmMvYXBwL3BhZ2VzL2NoYXRib3QvY2hhdGJvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFjO0VBQ2Qsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUV4QjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUNGLEVBQUE7O0FBQ0EsWUFBQTs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDZCQUE2QjtFQUM3QixzREFBc0Q7RUFDdEQsTUFBTTtFQUNOLFdBQVcsRUFBQTs7QUFFYjtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsNkJBQTZCO0VBQzdCLHlEQUF5RDtFQUN6RCxNQUFNO0VBQ04sWUFBWSxFQUFBOztBQUVkO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0Ym90L2NoYXRib3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtaXRlbXN7XG4gICAgZGlzcGxheTogIGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5pY29ue1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5zZW5ke1xuICAgIGNvbG9yOiAjNjAzQ0Q3O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5pbnB1dF9tZXNzYWdle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MDNDRDc7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXG59XG4ubWVzc2FnZXN7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNSU7XG59XG4uY2hhdHMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cbi5jaGF0cyAuY2hhdGJveCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmpvaW5lZCB7XG4gIGNsZWFyOiBib3RoO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uam9pbmVkIHNwYW4ge1xuICBwYWRkaW5nOiA1cHhcbn1cbi8qIE1lc3NhZ2VzKi9cbi5tZXNzYWdlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGNsZWFyOiBib3RoO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgbWF4LXdpZHRoOiA4NSU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgei1pbmRleDogLTE7XG59XG4ubWVzc2FnZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5tZXNzYWdlOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4O1xufVxuLm1lc3NhZ2UucmVjZWl2ZWQge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWVzc2FnZS5yZWNlaXZlZDphZnRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4IDEwcHggMTBweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNjY2MgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEwcHg7XG59XG4ubWVzc2FnZS5zZW50IHtcbiAgYmFja2dyb3VuZDogI2UxZmZjNztcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCA1cHggNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4ubWVzc2FnZS5zZW50OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2UxZmZjNztcbiAgdG9wOiAwO1xuICByaWdodDogLTEwcHg7XG59XG4uc2Nyb2xsLWNvbnRlbnR7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chatbot/chatbot.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/chatbot/chatbot.page.ts ***!
  \***********************************************/
/*! exports provided: ChatbotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPage", function() { return ChatbotPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/chat-service.service */ "./src/app/services/chat-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotPage = /** @class */ (function () {
    function ChatbotPage(_chat) {
        this._chat = _chat;
        this.chats = [];
    }
    ChatbotPage.prototype.ngOnInit = function () {
        this.ionViewDidLoad();
    };
    ChatbotPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // subscribe to pusher's event
        this._chat.getChannel().bind('chat', function (data) {
            if (data.type !== 'bot') {
                data.isMe = true;
            }
            ;
            _this.chats.push(data);
        });
    };
    ChatbotPage.prototype.sendMessage = function () {
        var _this = this;
        this.sending = true;
        this._chat.sendMessage(this.message)
            .subscribe(function (resp) {
            _this.message = '';
            _this.sending = false;
        }, function (err) {
            _this.sending = false;
        });
    };
    ChatbotPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatbot',
            template: __webpack_require__(/*! ./chatbot.page.html */ "./src/app/pages/chatbot/chatbot.page.html"),
            styles: [__webpack_require__(/*! ./chatbot.page.scss */ "./src/app/pages/chatbot/chatbot.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_chat_service_service__WEBPACK_IMPORTED_MODULE_1__["ChatServiceService"]])
    ], ChatbotPage);
    return ChatbotPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-chatbot-chatbot-module.js.map