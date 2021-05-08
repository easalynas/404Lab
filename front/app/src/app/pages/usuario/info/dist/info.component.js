"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoComponent = void 0;
var core_1 = require("@angular/core");
var InfoComponent = /** @class */ (function () {
    function InfoComponent(service, usuarioService) {
        this.service = service;
        this.usuarioService = usuarioService;
        this.data = JSON.parse(localStorage.getItem('userData'));
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('data___' , this.data);
        this.usuarioService.getUsuarioFirebase(this.data.key).toPromise()
            .then(function (resp) {
            console.log(' subscripción ... ', resp);
            _this.usuarioInfo = resp;
        });
    };
    InfoComponent.prototype.eliminarCuenta = function () {
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: 'app-info',
            templateUrl: './info.component.html',
            styleUrls: ['./info.component.css']
        })
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
