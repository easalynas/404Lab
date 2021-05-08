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
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, validadores, usuarioService, router) {
        this.fb = fb;
        this.validadores = validadores;
        this.usuarioService = usuarioService;
        this.router = router;
        this.iniciarFormulario();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.iniciarFormulario = function () {
        this.formulario = this.fb.group({
            nombre: ['', [forms_1.Validators.required]],
            apPaterno: ['', [forms_1.Validators.required]],
            apMaterno: ['', [forms_1.Validators.required]],
            alias: ['', [forms_1.Validators.required]],
            sexo: ['', [forms_1.Validators.required]],
            correo: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
            passw1: ['', [forms_1.Validators.required]],
            passw2: ['', [forms_1.Validators.required]]
        }, {
            validators: this.validadores.compararPassword('passw1', 'passw2')
        });
    };
    RegisterComponent.prototype.registrar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, usuario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.formulario.invalid) {
                            this.validadores._snackBar('Verifique los campos obligatorios', 'error');
                            this.validadores.markFormGroupTouched(this.formulario);
                            return [2 /*return*/];
                        }
                        data = {
                            Nombres: this.formulario.get('nombre').value,
                            Apepat: this.formulario.get('apPaterno').value,
                            Apemat: this.formulario.get('apMaterno').value,
                            Alias: this.formulario.get('alias').value,
                            Email: this.formulario.get('correo').value,
                            Password: this.formulario.get('passw1').value,
                            Sexo: this.formulario.get('sexo').value
                        };
                        usuario = {
                            alias: this.formulario.get('alias').value,
                            apePaterno: this.formulario.get('apPaterno').value,
                            apeMaterno: this.formulario.get('apMaterno').value,
                            correo: this.formulario.get('correo').value,
                            nombres: this.formulario.get('nombre').value,
                            password: this.formulario.get('passw1').value,
                            sexo: this.formulario.get('sexo').value
                        };
                        return [4 /*yield*/, this.usuarioService.registrarFirebase(usuario).toPromise().then()];
                    case 1:
                        _a.sent();
                        this.validadores._snackBar('En buena hora se ha registrado! Es momento de iniciar');
                        this.router.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "validarCampos", {
        get: function () {
            var _this = this;
            return function (campo) {
                return _this.formulario.get(campo).invalid && _this.formulario.get(campo).touched;
            };
        },
        enumerable: false,
        configurable: true
    });
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
