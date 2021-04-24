"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ValidadoresService = void 0;
var core_1 = require("@angular/core");
var ValidadoresService = /** @class */ (function () {
    function ValidadoresService(snackBar) {
        this.snackBar = snackBar;
    }
    ValidadoresService.prototype.compararPassword = function (pass1, pass2) {
        return function (formGroup) {
            var pass1Control = formGroup.controls[pass1];
            var pass2Control = formGroup.controls[pass2];
            if (pass1Control.value === pass2Control.value) {
                pass2Control.setErrors(null);
            }
            else {
                pass2Control.setErrors({ noEsIgual: true });
            }
        };
    };
    ValidadoresService.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ValidadoresService.prototype._snackBar = function (txt, style, duration) {
        if (!style) {
            style = 'dark';
        }
        if (!duration) {
            duration = 10000;
        }
        this.snackBar.open(txt, 'Cerrar', {
            duration: duration,
            panelClass: style + "-snackbar",
            verticalPosition: 'bottom'
        });
    };
    ValidadoresService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ValidadoresService);
    return ValidadoresService;
}());
exports.ValidadoresService = ValidadoresService;
