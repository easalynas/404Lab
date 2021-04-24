"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, validadores, usuarioService) {
        this.fb = fb;
        this.validadores = validadores;
        this.usuarioService = usuarioService;
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
        if (this.formulario.invalid) {
            this.validadores._snackBar('Verifique los campos obligatorios', 'error');
            this.validadores.markFormGroupTouched(this.formulario);
            return;
        }
        var data = {
            Nombres: this.formulario.get('nombre').value,
            Apepat: this.formulario.get('apPaterno').value,
            Apemat: this.formulario.get('apMaterno').value,
            Alias: this.formulario.get('alias').value,
            Email: this.formulario.get('correo').value,
            Password: this.formulario.get('passw1').value,
            Sexo: this.formulario.get('sexo').value
        };
        this.usuarioService.registrar(data).toPromise()
            .then(function (resp) {
            console.log('success : ', resp);
        })["catch"](function (error) { return console.log('error___', error); });
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
