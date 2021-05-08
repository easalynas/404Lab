"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditarComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditarComponent = /** @class */ (function () {
    function EditarComponent(service, usuarioService, fb, validadores, router) {
        this.service = service;
        this.usuarioService = usuarioService;
        this.fb = fb;
        this.validadores = validadores;
        this.router = router;
        this.data = JSON.parse(localStorage.getItem('userData'));
        this.iniciarFormulario();
    }
    EditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.getUsuarioFirebase(this.data.key).toPromise()
            .then(function (resp) {
            console.log(' subscripción ... ', resp);
            _this.usuarioInfo = resp;
            _this.formulario.patchValue({
                nombre: _this.usuarioInfo.nombres,
                apPaterno: _this.usuarioInfo.apePaterno,
                apMaterno: _this.usuarioInfo.apeMaterno,
                alias: _this.usuarioInfo.alias,
                sexo: _this.usuarioInfo.sexo,
                telefono: _this.usuarioInfo.telefono,
                fechaNac: _this.usuarioInfo.fechaNac,
                sede: _this.usuarioInfo.sede,
                carrera: _this.usuarioInfo.carrera
            });
        });
    };
    EditarComponent.prototype.iniciarFormulario = function () {
        this.formulario = this.fb.group({
            nombre: ['', [forms_1.Validators.required]],
            apPaterno: ['', [forms_1.Validators.required]],
            apMaterno: ['', [forms_1.Validators.required]],
            alias: ['', [forms_1.Validators.required]],
            sexo: ['', [forms_1.Validators.required]],
            telefono: ['', [forms_1.Validators.required]],
            fechaNac: ['', [forms_1.Validators.required]],
            carrera: ['', [forms_1.Validators.required]],
            sede: ['', [forms_1.Validators.required]]
        });
    };
    EditarComponent.prototype.guardar = function () {
        var _this = this;
        var data = {
            key: this.data.key,
            alias: this.formulario.get('alias').value,
            apeMaterno: this.formulario.get('apMaterno').value,
            apePaterno: this.formulario.get('apPaterno').value,
            fechaNac: this.formulario.get('fechaNac').value,
            nombres: this.formulario.get('nombre').value,
            sexo: this.formulario.get('sexo').value,
            telefono: this.formulario.get('telefono').value,
            correo: this.data.correo,
            password: this.data.password,
            sede: this.formulario.get('sede').value,
            carrera: this.formulario.get('carrera').value
        };
        this.usuarioService.postActualizarUsuario(data).toPromise()
            .then(function (resp) {
            console.log('usuario actualizado ... ');
            _this.validadores._snackBar('Los datos han sido actualizado');
            _this.router.navigate(['/home']);
        });
    };
    EditarComponent = __decorate([
        core_1.Component({
            selector: 'app-editar',
            templateUrl: './editar.component.html',
            styleUrls: ['./editar.component.css']
        })
    ], EditarComponent);
    return EditarComponent;
}());
exports.EditarComponent = EditarComponent;
