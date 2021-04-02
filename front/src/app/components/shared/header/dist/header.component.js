"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.contador = 0;
    };
    HeaderComponent.prototype.ngAfterContentChecked = function () {
        if (this.envioHome) {
            this.contador++;
        }
    };
    HeaderComponent.prototype.navegar = function (action) {
        $(".category-menu").removeClass("show");
        this.router.navigate(['/category', action]);
    };
    HeaderComponent.prototype.showCart = function () {
        this.showCartSidebar = true;
        // .... Agregar mas logica aqui
    };
    HeaderComponent.prototype.accion = function (event) {
        this.showCartSidebar = false;
        console.log('event...', event);
    };
    __decorate([
        core_1.Input('envioHome')
    ], HeaderComponent.prototype, "envioHome");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
