"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioService = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var environment_prod_1 = require("../../environments/environment.prod");
var apiUrlFirebase = environment_prod_1.environment.apiEndPointAppSocial;
var UsuarioService = /** @class */ (function () {
    function UsuarioService(service, http) {
        this.service = service;
        this.http = http;
    }
    UsuarioService.prototype.getUsuarioFirebase = function (uid) {
        return this.http.get(apiUrlFirebase + "/usuarios/" + uid + ".json");
    };
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get(apiUrlFirebase + "/usuarios.json")
            .pipe(operators_1.map(this.formatearLista));
    };
    UsuarioService.prototype.formatearLista = function (data) {
        var usuarios = [];
        if (data === null) {
            return [];
        }
        Object.keys(data).forEach(function (key) {
            var usuario = data[key];
            usuario.key = key;
            usuarios.push(usuario);
        });
        return usuarios;
    };
    UsuarioService.prototype.registrar = function (data) {
        return this.service.postQuery(data, "Persona");
    };
    UsuarioService.prototype.postActualizarUsuario = function (usuario) {
        var usuTmp = __assign({}, usuario);
        delete usuTmp.key;
        return this.http.put(apiUrlFirebase + "/usuarios/" + usuario.key + ".json", usuTmp);
    };
    UsuarioService.prototype.registrarFirebase = function (data) {
        return this.http.post(apiUrlFirebase + "/usuarios.json", data)
            .pipe(operators_1.map(function (resp) {
            return data;
        }));
    };
    UsuarioService.prototype.postRegistrarComentario = function (key, comentario) {
        var data = {
            key: key,
            comentario: comentario
        };
        return this.http.post(apiUrlFirebase + "/comentarios.json", data)
            .pipe(operators_1.map(function (resp) {
            return data;
        }));
    };
    UsuarioService.prototype.getComentarios = function (key) {
        var _this = this;
        return this.http.get(apiUrlFirebase + "/comentarios.json")
            .pipe(operators_1.map(function (data) { return _this.buscarComentario(data, key); }));
    };
    UsuarioService.prototype.buscarComentario = function (data, keyUser) {
        var comentarios = [];
        if (data === null) {
            return [];
        }
        Object.keys(data).forEach(function (key) {
            if (data[key].key === keyUser) {
                var comment = data[key].comentario;
                comentarios.push(comment);
            }
        });
        return comentarios;
    };
    UsuarioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
