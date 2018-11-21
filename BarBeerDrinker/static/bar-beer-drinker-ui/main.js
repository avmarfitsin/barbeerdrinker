(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beerslist/beerslist.component */ "./src/app/beerslist/beerslist.component.ts");
/* harmony import */ var _barslist_barslist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barslist/barslist.component */ "./src/app/barslist/barslist.component.ts");
/* harmony import */ var _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinkerslist/drinkerslist.component */ "./src/app/drinkerslist/drinkerslist.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shifts/shifts.component */ "./src/app/shifts/shifts.component.ts");
/* harmony import */ var _insights_insights_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./insights/insights.component */ "./src/app/insights/insights.component.ts");
/* harmony import */ var _beerlikes_beerlikes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beerlikes/beerlikes.component */ "./src/app/beerlikes/beerlikes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beerlikes',
        pathMatch: 'full',
        component: _beerlikes_beerlikes_component__WEBPACK_IMPORTED_MODULE_11__["BeerlikesComponent"]
    },
    {
        path: 'shifts',
        pathMatch: 'full',
        component: _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_9__["ShiftsComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _barslist_barslist_component__WEBPACK_IMPORTED_MODULE_6__["BarslistComponent"]
    },
    {
        path: 'transactions',
        pathMatch: 'full',
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__["TransactionsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_7__["DrinkerslistComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_5__["BeerslistComponent"]
    },
    {
        path: 'insights',
        pathMatch: 'full',
        component: _insights_insights_component__WEBPACK_IMPORTED_MODULE_10__["InsightsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/transactions\">Transactions</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/shifts\">Shifts</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/insights\">Frequents-Graph</a>\n         </li>\n         <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/beerlikes\">Beer-Graph</a>\n         </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beerslist/beerslist.component */ "./src/app/beerslist/beerslist.component.ts");
/* harmony import */ var _barslist_barslist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./barslist/barslist.component */ "./src/app/barslist/barslist.component.ts");
/* harmony import */ var _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drinkerslist/drinkerslist.component */ "./src/app/drinkerslist/drinkerslist.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shifts/shifts.component */ "./src/app/shifts/shifts.component.ts");
/* harmony import */ var _insights_insights_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./insights/insights.component */ "./src/app/insights/insights.component.ts");
/* harmony import */ var _beerlikes_beerlikes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./beerlikes/beerlikes.component */ "./src/app/beerlikes/beerlikes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__["BeerDetailsComponent"],
                _beerslist_beerslist_component__WEBPACK_IMPORTED_MODULE_9__["BeerslistComponent"],
                _barslist_barslist_component__WEBPACK_IMPORTED_MODULE_10__["BarslistComponent"],
                _drinkerslist_drinkerslist_component__WEBPACK_IMPORTED_MODULE_11__["DrinkerslistComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_12__["TransactionsComponent"],
                _shifts_shifts_component__WEBPACK_IMPORTED_MODULE_13__["ShiftsComponent"],
                _insights_insights_component__WEBPACK_IMPORTED_MODULE_14__["InsightsComponent"],
                _beerlikes_beerlikes_component__WEBPACK_IMPORTED_MODULE_15__["BeerlikesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n    <h1 class=\"display-4\">{{ barName }}</h1>\r\n    <p class=\"bar-details\" *ngIf=\"barDetails\">\r\n    {{ barDetails?.address }} <span *ngIf=\"barDetails.address && barDetails.state\">| </span>{{barDetails?.state}}\r\n    <br>\r\n    </p>\r\n    </div>\r\n   </div>\r\n   \r\n<div class=\"container\">\r\n    <h2 class=\"text-center font-weight-light\">Beers Served</h2>\r\n    <br>\r\n    <p-table [value]=\"menu\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Beer</th>\r\n                <th>Brewery</th>\r\n                <th>Price</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-item>\r\n            <tr>\r\n                <td><a routerLink=\"/beers/{{ item.beer }}\">{{ item.beer }}</a></td>\r\n                <td>{{ item.Brewery }}</td>\r\n                <td>{{ item.price }}</td>\r\n            </tr>\r\n        </ng-template>    \r\n    </p-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
            });
        }, function (error) {
            if (error.status === 404) {
                alert('Bar not found');
            }
            else {
                console.error(error.status + ' - ' + error.body);
                alert('An error occurred on the server. Please check the browser console.');
            }
        });
        barService.getMenu(this.barName).subscribe(function (data) {
            _this.menu = data;
        });
    }
    ;
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
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


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/barslist/barslist.component.css":
/*!*************************************************!*\
  !*** ./src/app/barslist/barslist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnNsaXN0L2JhcnNsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/barslist/barslist.component.html":
/*!**************************************************!*\
  !*** ./src/app/barslist/barslist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-center font-weight-heavy\">Bars</h2>\n  <p-table [value]=\"bars\">\n      <ng-template pTemplate=\"header\">\n      <tr>\n      <th>Name</th>\n      <th>License</th>\n      <th>Address</th>\n      <th>State</th>\n      <th>Open time(AM)</th>\n      <th>Close time(AM)</th>\n      </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n      <td>\n      <a routerLink=\"/bars/{{ bar.name }}\">\n      {{ bar.name }}\n      </a>\n      </td>\n      <td>{{ bar.License }}</td>\n      <td>{{ bar.address }}</td>\n      <td>{{ bar.state }}</td>\n      <td>{{ bar.open_time }}</td>\n      <td>{{ bar.close_time }}</td>\n      </tr>\n      </ng-template>\n     </p-table>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/barslist/barslist.component.ts":
/*!************************************************!*\
  !*** ./src/app/barslist/barslist.component.ts ***!
  \************************************************/
/*! exports provided: BarslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarslistComponent", function() { return BarslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarslistComponent = /** @class */ (function () {
    function BarslistComponent(barService) {
        this.barService = barService;
    }
    BarslistComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    BarslistComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    BarslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-barslist',
            template: __webpack_require__(/*! ./barslist.component.html */ "./src/app/barslist/barslist.component.html"),
            styles: [__webpack_require__(/*! ./barslist.component.css */ "./src/app/barslist/barslist.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarslistComponent);
    return BarslistComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ beerName }}</h1>\n    <p class=\"beer-details\" *ngIf=\"brewery\">\n      Brewed by <i>{{ brewery }}</i>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            _this.beerService.getBeerBrewery(_this.beerName).subscribe(function (data) {
                _this.brewery = data;
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beerlikes/beerlikes.component.css":
/*!***************************************************!*\
  !*** ./src/app/beerlikes/beerlikes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJsaWtlcy9iZWVybGlrZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beerlikes/beerlikes.component.html":
/*!****************************************************!*\
  !*** ./src/app/beerlikes/beerlikes.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n </div> \n"

/***/ }),

/***/ "./src/app/beerlikes/beerlikes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/beerlikes/beerlikes.component.ts ***!
  \**************************************************/
/*! exports provided: BeerlikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerlikesComponent", function() { return BeerlikesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerlikesComponent = /** @class */ (function () {
    function BeerlikesComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeerLikes().subscribe(function (data) {
            console.log(data);
            var beers = [];
            var counts = [];
            data.forEach(function (beer) {
                beers.push(beer.beer);
                counts.push(beer.likescount);
            });
            //use the line below to render the graph
            _this.renderChart(beers, counts);
        });
    }
    BeerlikesComponent.prototype.renderChart = function (beers, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beers Liked By Customers'
            },
            xAxis: {
                categories: beers,
                title: { text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BeerlikesComponent.prototype.ngOnInit = function () {
    };
    BeerlikesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beerlikes',
            template: __webpack_require__(/*! ./beerlikes.component.html */ "./src/app/beerlikes/beerlikes.component.html"),
            styles: [__webpack_require__(/*! ./beerlikes.component.css */ "./src/app/beerlikes/beerlikes.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeerlikesComponent);
    return BeerlikesComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
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


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beers');
    };
    BeersService.prototype.getBarsSelling = function (beer) {
        return this.http.get('/api/bars-selling/${beer}');
    };
    BeersService.prototype.getBeerLikes = function () {
        return this.http.get('/api/beerlikes');
    };
    BeersService.prototype.getBeerBrewery = function (beer) {
        if (beer) {
            return this.http.get('/api/beer-brewery/${beer}');
        }
        return this.http.get('/api/beer-brewery');
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beerslist/beerslist.component.css":
/*!***************************************************!*\
  !*** ./src/app/beerslist/beerslist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzbGlzdC9iZWVyc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beerslist/beerslist.component.html":
/*!****************************************************!*\
  !*** ./src/app/beerslist/beerslist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"text-center font-weight-heavy\">Beers</h2>\n  <p-table [value]=\"beers\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/beers/{{ beer.beer }}\">{{ beer.Beer }}</a></td>\n        <td>{{ beer.Brewery }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/beerslist/beerslist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/beerslist/beerslist.component.ts ***!
  \**************************************************/
/*! exports provided: BeerslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerslistComponent", function() { return BeerslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerslistComponent = /** @class */ (function () {
    function BeerslistComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        });
    }
    BeerslistComponent.prototype.ngOnInit = function () {
    };
    BeerslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beerslist',
            template: __webpack_require__(/*! ./beerslist.component.html */ "./src/app/beerslist/beerslist.component.html"),
            styles: [__webpack_require__(/*! ./beerslist.component.css */ "./src/app/beerslist/beerslist.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeerslistComponent);
    return BeerslistComponent;
}());



/***/ }),

/***/ "./src/app/drinkerslist.service.ts":
/*!*****************************************!*\
  !*** ./src/app/drinkerslist.service.ts ***!
  \*****************************************/
/*! exports provided: DrinkerslistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerslistService", function() { return DrinkerslistService; });
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


var DrinkerslistService = /** @class */ (function () {
    function DrinkerslistService(http) {
        this.http = http;
    }
    DrinkerslistService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinkers');
    };
    DrinkerslistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkerslistService);
    return DrinkerslistService;
}());



/***/ }),

/***/ "./src/app/drinkerslist/drinkerslist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/drinkerslist/drinkerslist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzbGlzdC9kcmlua2Vyc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinkerslist/drinkerslist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/drinkerslist/drinkerslist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-center font-weight-heavy\">Drinkers</h2>\n    <p-table [value]=\"drinkers\" [rows]=\"10\">\n      <ng-template pTemplate=\"header\">\n        <tr>\n          <th>Name</th>\n          <th>Address</th>\n          <th>State</th>\n          <th>Phone</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-drinker>\n        <tr>\n          <td><a routerLink=\"/drinkers/{{ drinker.Name }}\">{{ drinker.Name }}</a></td>\n          <td>{{ drinker.Addr }}</td>\n          <td>{{ drinker.State }}</td>\n          <td>{{ drinker.Phone }}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n    <br><br>\n  </div>"

/***/ }),

/***/ "./src/app/drinkerslist/drinkerslist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/drinkerslist/drinkerslist.component.ts ***!
  \********************************************************/
/*! exports provided: DrinkerslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerslistComponent", function() { return DrinkerslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkerslist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkerslist.service */ "./src/app/drinkerslist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerslistComponent = /** @class */ (function () {
    function DrinkerslistComponent(drinkerService) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        });
    }
    DrinkerslistComponent.prototype.ngOnInit = function () {
    };
    DrinkerslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkerslist',
            template: __webpack_require__(/*! ./drinkerslist.component.html */ "./src/app/drinkerslist/drinkerslist.component.html"),
            styles: [__webpack_require__(/*! ./drinkerslist.component.css */ "./src/app/drinkerslist/drinkerslist.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkerslist_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerslistService"]])
    ], DrinkerslistComponent);
    return DrinkerslistComponent;
}());



/***/ }),

/***/ "./src/app/insights/insights.component.css":
/*!*************************************************!*\
  !*** ./src/app/insights/insights.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHRzL2luc2lnaHRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/insights/insights.component.html":
/*!**************************************************!*\
  !*** ./src/app/insights/insights.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n </div> \n"

/***/ }),

/***/ "./src/app/insights/insights.component.ts":
/*!************************************************!*\
  !*** ./src/app/insights/insights.component.ts ***!
  \************************************************/
/*! exports provided: InsightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsComponent", function() { return InsightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightsComponent = /** @class */ (function () {
    function InsightsComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            console.log(data);
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.bar);
                counts.push(bar.frequentCount);
            });
            //use the line below to render the graph
            _this.renderChart(bars, counts);
        });
    }
    InsightsComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: bars,
                title: { text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    InsightsComponent.prototype.ngOnInit = function () {
    };
    InsightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insights',
            template: __webpack_require__(/*! ./insights.component.html */ "./src/app/insights/insights.component.html"),
            styles: [__webpack_require__(/*! ./insights.component.css */ "./src/app/insights/insights.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightsComponent);
    return InsightsComponent;
}());



/***/ }),

/***/ "./src/app/shifts.service.ts":
/*!***********************************!*\
  !*** ./src/app/shifts.service.ts ***!
  \***********************************/
/*! exports provided: ShiftsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsService", function() { return ShiftsService; });
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


var ShiftsService = /** @class */ (function () {
    function ShiftsService(http) {
        this.http = http;
    }
    ShiftsService.prototype.getShifts = function () {
        return this.http.get('/api/shifts');
    };
    ShiftsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShiftsService);
    return ShiftsService;
}());



/***/ }),

/***/ "./src/app/shifts/shifts.component.css":
/*!*********************************************!*\
  !*** ./src/app/shifts/shifts.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaWZ0cy9zaGlmdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shifts/shifts.component.html":
/*!**********************************************!*\
  !*** ./src/app/shifts/shifts.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"text-center font-weight-heavy\">Shifts</h2>\n  <p-table [value]=\"shifts\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Bartender 1</th>\n        <th>Bartender 2</th>\n        <th>Bartender 3</th>\n        <th>Bartender 4</th>\n        <th>Bartender 5</th>\n        <th>Shift start</th>\n        <th>Shift end</th>\n        <th>Shift type</th>\n\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-shifts>\n      <tr>\n        <td><a routerLink=\"/shifts/{{ shifts.bar }}\">{{ shifts.bar }}</a></td>\n        <td>{{ shifts.bartender_1 }}</td>\n        <td>{{ shifts.bartender_2 }}</td>\n        <td>{{ shifts.bartender_3 }}</td>\n        <td>{{ shifts.bartender_4 }}</td>\n        <td>{{ shifts.bartender_5 }}</td>\n        <td>{{ shifts.shift_start }}</td>\n        <td>{{ shifts.shift_end }}</td>\n        <td>{{ shifts.shift_type }}</td>\n\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/shifts/shifts.component.ts":
/*!********************************************!*\
  !*** ./src/app/shifts/shifts.component.ts ***!
  \********************************************/
/*! exports provided: ShiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsComponent", function() { return ShiftsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shifts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shifts.service */ "./src/app/shifts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShiftsComponent = /** @class */ (function () {
    function ShiftsComponent(shiftService) {
        var _this = this;
        this.shiftService = shiftService;
        this.shiftService.getShifts().subscribe(function (data) {
            _this.shifts = data;
        });
    }
    ShiftsComponent.prototype.ngOnInit = function () {
    };
    ShiftsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shifts',
            template: __webpack_require__(/*! ./shifts.component.html */ "./src/app/shifts/shifts.component.html"),
            styles: [__webpack_require__(/*! ./shifts.component.css */ "./src/app/shifts/shifts.component.css")]
        }),
        __metadata("design:paramtypes", [_shifts_service__WEBPACK_IMPORTED_MODULE_1__["ShiftsService"]])
    ], ShiftsComponent);
    return ShiftsComponent;
}());



/***/ }),

/***/ "./src/app/transactions.service.ts":
/*!*****************************************!*\
  !*** ./src/app/transactions.service.ts ***!
  \*****************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
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


var TransactionsService = /** @class */ (function () {
    function TransactionsService(http) {
        this.http = http;
    }
    TransactionsService.prototype.getTransactions = function () {
        return this.http.get('/api/transactions');
    };
    TransactionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionsService);
    return TransactionsService;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/transactions/transactions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"text-center font-weight-heavy\">Transactions</h2>\n  <p-table [value]=\"transactions\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>ID</th>\n        <th>Drinker</th>\n        <th>Bar</th>\n        <th>Beer</th>\n        <th>Item</th>\n        <th>Total</th>\n        <th>Time</th>\n\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-transactions>\n      <tr>\n        <td><a routerLink=\"/transactions/{{ transactions.id }}\">{{ transactions.id }}</a></td>\n        <td>{{ transactions.drinker }}</td>\n        <td>{{ transactions.bar }}</td>\n        <td>{{ transactions.beer }}</td>\n        <td>{{ transactions.item }}</td>\n        <td>{{ transactions.total }}</td>\n        <td>{{ transactions.time }}</td>\n\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transactions.service */ "./src/app/transactions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(transactionService) {
        var _this = this;
        this.transactionService = transactionService;
        this.transactionService.getTransactions().subscribe(function (data) {
            _this.transactions = data;
        });
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Bar Beer Drinker+ Interface</h1>\n    <p class=\"lead\">Select a function from the above menu.</p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andrew.t440s\Documents\barbeerdrinker\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map