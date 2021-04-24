import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  compararPassword(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  _snackBar(txt: string, style?: string, duration?: number) {
    if (!style) {
      style = 'dark';
    }
    if (!duration) {
      duration = 10000;
    }

    this.snackBar.open(txt, 'Cerrar', {
      duration: duration,
      panelClass: `${style}-snackbar`,
      verticalPosition: 'bottom',
      // horizontalPosition:'right'
    });
  }


}
