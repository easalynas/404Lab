"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/shared/header/header.component");
var footer_component_1 = require("./components/shared/footer/footer.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var orders_history_component_1 = require("./pages/orders-history/orders-history.component");
var category_component_1 = require("./pages/category/category.component");
var cart_list_component_1 = require("./components/shared/cart-list/cart-list.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                orders_history_component_1.OrdersHistoryComponent,
                category_component_1.CategoryComponent,
                cart_list_component_1.CartListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
