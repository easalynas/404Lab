"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./pages/home/home.component");
var pages_component_1 = require("./pages/pages.component");
var aptitud_component_1 = require("./pages/usuario/aptitud/aptitud.component");
var editar_component_1 = require("./pages/usuario/editar/editar.component");
var info_component_1 = require("./pages/usuario/info/info.component");
var register_component_1 = require("./register/register.component");
var auth_guard_1 = require("./services/auth.guard");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            {
                path: 'home',
                component: home_component_1.HomeComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: 'user',
                children: [
                    {
                        path: 'edit',
                        component: editar_component_1.EditarComponent
                    },
                    {
                        path: 'aptitud',
                        component: aptitud_component_1.AptitudComponent
                    },
                    {
                        path: 'info',
                        component: info_component_1.InfoComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'info',
                        pathMatch: 'full'
                    }
                ],
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: '**',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
