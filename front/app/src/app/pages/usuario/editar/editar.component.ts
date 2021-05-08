import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { IUsuario } from '../../../interfaces/usuario-interface';
import { UsuarioService } from '../../../services/usuario.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidadoresService } from '../../../services/validadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  data: IUsuario;
  usuarioInfo: IUsuario;
  formulario: FormGroup;

  constructor(
    private service: AuthService,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private validadores: ValidadoresService,
    private router:Router
  ) {
    this.data = JSON.parse(localStorage.getItem('userData'));
    this.iniciarFormulario();
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarioFirebase(this.data.key).toPromise()
      .then(
        (resp: IUsuario) => {
          console.log(' subscripción ... ', resp);
          this.usuarioInfo = resp;
          this.formulario.patchValue({
            nombre: this.usuarioInfo.nombres,
            apPaterno: this.usuarioInfo.apePaterno,
            apMaterno: this.usuarioInfo.apeMaterno,
            alias: this.usuarioInfo.alias,
            sexo: this.usuarioInfo.sexo,
            telefono: this.usuarioInfo.telefono,
            fechaNac: this.usuarioInfo.fechaNac,

            sede : this.usuarioInfo.sede,
            carrera : this.usuarioInfo.carrera
          })
        }
      );
  }

  private iniciarFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apPaterno: ['', [Validators.required]],
      apMaterno: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      fechaNac: ['', [Validators.required]],
      carrera:['', [Validators.required]],
      sede:['', [Validators.required]],
    })
  }

  guardar() {

    const data: IUsuario = {
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
      .then(
        resp => {
          console.log('usuario actualizado ... ');
          this.validadores._snackBar('Los datos han sido actualizado');
          this.router.navigate(['/home']);
        }
      );
  }

}
