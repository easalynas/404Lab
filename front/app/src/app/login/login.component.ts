import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidadoresService } from '../services/validadores.service';
import { AuthService } from '../services/auth.service';
import { IUsuarioLogin } from '../interfaces/usuario-interface';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fg: FormGroup;




  constructor(
    private router: Router,
    private form: FormBuilder,
    private validadores: ValidadoresService,
    private authService: AuthService,
    private service: ServicesService
  ) {
    this.iniciarFormulario();
  }

  ngOnInit(): void {

  }

  iniciarFormulario() {
    this.fg = this.form.group({
      correo: ['', [Validators.required, Validators.pattern('[a-zA-A0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')]],
      password: ['', [Validators.required]],
    });
  }

  async entrar() {
    if (this.fg.invalid) {
      this.validadores.markFormGroupTouched(this.fg);
      this.validadores._snackBar(`Verifique los campos requeridos`);
      return;
    }
    const user = await this.authService.entrar(this.fg.get('correo').value, this.fg.get('password').value);
    if(user){
      this.router.navigate(['/home']);
    }else{
      this.validadores._snackBar(`El correo y/o la contraseña no existen`);
    }
  }

  get validarCampos() {
    return (campo: any) => {
      return this.fg.get(campo).invalid && this.fg.get(campo).touched;
    }
  }

}
