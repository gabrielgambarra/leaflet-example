(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-map></app-map>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\n    <div class=\"map-frame\">\n        <div id=\"map\"></div>\n    </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'leaflet-example';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_marker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/marker.service */ "./src/app/services/marker.service.ts");
/* harmony import */ var _services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/pop-up.service */ "./src/app/services/pop-up.service.ts");
/* harmony import */ var _services_shape_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/shape.service */ "./src/app/services/shape.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                _services_marker_service__WEBPACK_IMPORTED_MODULE_7__["MarkerService"],
                _services_pop_up_service__WEBPACK_IMPORTED_MODULE_8__["PopUpService"],
                _services_shape_service__WEBPACK_IMPORTED_MODULE_9__["ShapeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 30px;\n}\n\n.map-frame {\n  border: 2px solid black;\n  height: 100%;\n}\n\n#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dhYnJpZWwvw4FyZWEgZGUgVHJhYmFsaG8vd29yay1zcGFjZS9sZWFmbGV0LWV4YW1wbGUvc3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiAzMHB4O1xufVxuXG4ubWFwLWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiIsIi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLm1hcC1mcmFtZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_marker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/marker.service */ "./src/app/services/marker.service.ts");
/* harmony import */ var _services_shape_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shape.service */ "./src/app/services/shape.service.ts");





var iconRetinaUrl = 'assets/marker-icon-2x.png';
var iconUrl = 'assets/marker-icon.png';
var shadowUrl = 'assets/marker-shadow.png';
var iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"].prototype.options.icon = iconDefault;
var MapComponent = /** @class */ (function () {
    function MapComponent(markerService, shapeService) {
        this.markerService = markerService;
        this.shapeService = shapeService;
    }
    MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initMap();
        this.markerService.makeCapitalMarkers(this.map);
        // this.markerService.makeCapitalCircleMarkers(this.map);
        this.shapeService.getStateShapes().subscribe(function (states) {
            _this.states = states;
            _this.initStatesLayer();
        });
    };
    MapComponent.prototype.initStatesLayer = function () {
        var _this = this;
        var stateLayer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.states, {
            style: function (feature) { return ({
                weight: 3,
                opacity: 0.5,
                color: '#008f68',
                fillOpacity: 0.8,
                fillColor: '#6DB65B'
            }); },
            onEachFeature: function (feature, layer) { return (layer.on({
                mouseover: function (e) { return (_this.highlightFeature(e)); },
                mouseout: function (e) { return (_this.resetFeature(e)); },
            })); }
        });
        this.map.addLayer(stateLayer);
    };
    MapComponent.prototype.highlightFeature = function (e) {
        var layer = e.target;
        layer.setStyle({
            weight: 10,
            opacity: 1.0,
            color: '#DFA612',
            fillOpacity: 1.0,
            fillColor: '#FAE042',
        });
    };
    MapComponent.prototype.resetFeature = function (e) {
        var layer = e.target;
        layer.setStyle({
            weight: 3,
            opacity: 0.5,
            color: '#008f68',
            fillOpacity: 0.8,
            fillColor: '#6DB65B'
        });
    };
    MapComponent.prototype.initMap = function () {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map', {
            center: [39.8282, -98.5795],
            zoom: 3
        });
        var tiles = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    };
    MapComponent.ctorParameters = function () { return [
        { type: _services_marker_service__WEBPACK_IMPORTED_MODULE_3__["MarkerService"] },
        { type: _services_shape_service__WEBPACK_IMPORTED_MODULE_4__["ShapeService"] }
    ]; };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/marker.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/marker.service.ts ***!
  \********************************************/
/*! exports provided: MarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pop_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pop-up.service */ "./src/app/services/pop-up.service.ts");





var MarkerService = /** @class */ (function () {
    function MarkerService(http, popupService) {
        this.http = http;
        this.popupService = popupService;
        this.capitals = '/assets/data/usa-capitals.geojson';
    }
    MarkerService.ScaledRadius = function (val, maxVal) {
        return 20 * (val / maxVal);
    };
    MarkerService.prototype.makeCapitalMarkers = function (map) {
        var _this = this;
        this.http.get(this.capitals).subscribe(function (res) {
            var e_1, _a;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](res.features), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    var lat = c.geometry.coordinates[0];
                    var lon = c.geometry.coordinates[1];
                    var marker = leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"]([lon, lat]);
                    marker.bindPopup(_this.popupService.makeCapitalPopup(c));
                    marker.addTo(map);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    // Circle by population
    // makeCapitalCircleMarkers(map: L.map): void {
    //   this.http.get(this.capitals).subscribe((res: any) => {
    //     const maxVal = Math.max(...res.features.map(x => x.properties.population), 0);
    //     for (const c of res.features) {
    //       const lat = c.geometry.coordinates[0];
    //       const lon = c.geometry.coordinates[1];
    //       const circle = L.circleMarker([lon, lat],
    //         {
    //           radius: MarkerService.ScaledRadius(c.properties.population, maxVal)
    //         }
    //       );
    //       circle.bindPopup(this.popupService.makeCapitalPopup(c));
    //       circle.addTo(map);
    //     }
    //   });
    // }
    MarkerService.prototype.makeCapitalCircleMarkers = function (map) {
        var _this = this;
        this.http.get(this.capitals).subscribe(function (res) {
            var e_2, _a;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](res.features), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var c = _c.value;
                    var lat = c.geometry.coordinates[0];
                    var lon = c.geometry.coordinates[1];
                    var circle = leaflet__WEBPACK_IMPORTED_MODULE_3__["circleMarker"]([lon, lat]);
                    circle.bindPopup(_this.popupService.makeCapitalPopup(c));
                    circle.addTo(map);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    };
    MarkerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _pop_up_service__WEBPACK_IMPORTED_MODULE_4__["PopUpService"] }
    ]; };
    MarkerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MarkerService);
    return MarkerService;
}());



/***/ }),

/***/ "./src/app/services/pop-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/pop-up.service.ts ***!
  \********************************************/
/*! exports provided: PopUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpService", function() { return PopUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopUpService = /** @class */ (function () {
    function PopUpService() {
    }
    PopUpService.prototype.makeCapitalPopup = function (data) {
        return "" +
            ("<div>Capital: " + data.properties.name + "</div>") +
            ("<div>State: " + data.properties.state + "</div>");
    };
    PopUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PopUpService);
    return PopUpService;
}());



/***/ }),

/***/ "./src/app/services/shape.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/shape.service.ts ***!
  \*******************************************/
/*! exports provided: ShapeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeService", function() { return ShapeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ShapeService = /** @class */ (function () {
    function ShapeService(http) {
        this.http = http;
    }
    ShapeService.prototype.getStateShapes = function () {
        return this.http.get('/assets/data/usa-states-border.geojson');
    };
    ShapeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ShapeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShapeService);
    return ShapeService;
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

module.exports = __webpack_require__(/*! /home/gabriel/Área de Trabalho/work-space/leaflet-example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map