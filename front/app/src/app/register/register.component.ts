import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuarioRegistro } from '../interfaces/interface-usuario';
import { ServicesService } from '../services/services.service';
import { UsuarioService } from '../services/usuario.service';
import { ValidadoresService } from '../services/validadores.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService,
    private usuarioService: UsuarioService
  ) {
    this.iniciarFormulario();
  }

  ngOnInit() {

  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apPaterno: ['', [Validators.required]],
      apMaterno: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      passw1: ['', [Validators.required]],
      passw2: ['', [Validators.required]]
    }, {
      validators: this.validadores.compararPassword('passw1', 'passw2')
    })
  }

  registrar() {
    if (this.formulario.invalid) {
      this.validadores._snackBar('Verifique los campos obligatorios', 'error');
      this.validadores.markFormGroupTouched(this.formulario);
      return;
    }
    const data: IUsuarioRegistro = {
      Nombres: this.formulario.get('nombre').value,
      Apepat: this.formulario.get('apPaterno').value,
      Apemat: this.formulario.get('apMaterno').value,
      Alias: this.formulario.get('alias').value,
      Email: this.formulario.get('correo').value,
      Password: this.formulario.get('passw1').value,
      Sexo: this.formulario.get('sexo').value,
    };
    this.usuarioService.registrar(data).toPromise()
    .then((resp) => {
      console.log('success : ' , resp);
    })
    .catch((error) =>  console.log('error___', error))
  }

  get validarCampos() {
    return (campo: any) => {
      return this.formulario.get(campo).invalid && this.formulario.get(campo).touched;
    }
  }

}
