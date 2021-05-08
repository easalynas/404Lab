"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var environment_prod_1 = require("../../environments/environment.prod");
var apiUrlFirebase = environment_prod_1.environment.apiEndPointAppSocial;
var AuthService = /** @class */ (function () {
    function AuthService(service, http) {
        this.service = service;
        this.http = http;
        this.leerToken();
    }
    AuthService.prototype.usuarioLogin = function (correo, password) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(apiUrlFirebase + "/usuarios.json").pipe(operators_1.map(function (data) { return _this.buscarUsuario(data, correo, password); }))];
            });
        });
    };
    AuthService.prototype.buscarUsuario = function (data, correo, password) {
        var objUsuario = null;
        if (data === null) {
            return null;
        }
        Object.keys(data).forEach(function (key) {
            var usuario = data[key];
            if (usuario.correo === correo && usuario.password === password) {
                objUsuario = usuario;
                objUsuario.key = key;
            }
        });
        return objUsuario;
    };
    AuthService.prototype.entrar = function (correo, password) {
        return __awaiter(this, void 0, Promise, function () {
            var usuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioLogin(correo, password)];
                    case 1: return [4 /*yield*/, (_a.sent()).toPromise().then()];
                    case 2:
                        usuario = _a.sent();
                        if (usuario) {
                            this.guardarStorage(usuario);
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // guardarStorage(data: IUsuarioStorage) {
    AuthService.prototype.guardarStorage = function (data) {
        this.userData = data;
        localStorage.setItem('userData', JSON.stringify(data));
        var hoy = new Date();
        hoy.setSeconds(3600); // Expira en 1h
        localStorage.setItem('expira', hoy.getTime().toString());
    };
    AuthService.prototype.leerToken = function () {
        if (localStorage.getItem('userData')) {
            this.userData = JSON.parse(localStorage.getItem('userData'));
        }
        else {
            this.userData = null;
        }
        // console.log('validando...');
        return this.userData;
    };
    AuthService.prototype.esAutenticado = function () {
        // if (this.userData.length < 2) {
        if (!this.userData) {
            return false;
        }
        var expira = Number(localStorage.getItem('expira'));
        var expiraDate = new Date();
        expiraDate.setTime(expira);
        console.log('exp1', expira);
        console.log('exp2', new Date().getTime());
        if (expiraDate > new Date()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.salir = function () {
        localStorage.removeItem('userData');
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
