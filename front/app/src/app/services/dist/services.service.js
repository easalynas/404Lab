"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicesService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var apiUrl = environment_1.environment.apiEndPoint;
var apiUrlFirebase = environment_1.environment.apiEndPointAppSocial;
var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
    }
    ServicesService.prototype.getQuery = function (query, respType) {
        //query = `${apiUrl}/${query}`;
        query = "/" + query;
        var headers = new http_1.HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Content-Type': 'application/json'
        });
        if (!respType) {
            respType = 'json';
        }
        return this.http.get(query, { headers: headers, responseType: respType })
            .pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ServicesService.prototype.postQuery = function (body, file, respType) {
        var headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        if (!respType) {
            respType = 'json';
        }
        //const url = `${apiUrl}/${file}`;
        var url = "/api/" + file;
        return this.http.post(url, body, { headers: headers, responseType: respType })
            .pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ServicesService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Ocurrió un Error:', error.error.message);
        }
        else {
            console.error("C\u00F3digo devuelto de backend " + error.status + "," + ("cuerpor era: " + error.error));
        }
        return rxjs_1.throwError("Algo malo ha sucedido. Por favor int\u00E9ntelo m\u00E1s tarde (error: " + error.status + ")");
    };
    ServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServicesService);
    return ServicesService;
}());
exports.ServicesService = ServicesService;
