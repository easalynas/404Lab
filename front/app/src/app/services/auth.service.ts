// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicesService } from './services.service';
import { map } from 'rxjs/operators';
import { IUsuarioStorage, IUsuarioLogin, IUsuario } from '../interfaces/usuario-interface';
import { of, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

const apiUrlFirebase = environment.apiEndPointAppSocial;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: IUsuarioStorage; // Por default NULL

  constructor(
    private service: ServicesService,
    private http: HttpClient
  ) {
    this.leerToken();
  }

  private async usuarioLogin(correo: string, password: string) : Promise<Observable<IUsuario>>  {
    return  this.http.get<IUsuario>(`${apiUrlFirebase}/usuarios.json`).pipe(
      map( data => this.buscarUsuario(data,correo,password) )
    );
  }
  private buscarUsuario(data:object,correo:string,password:string) : IUsuario{
    let objUsuario:IUsuario = null;
    if (data === null) { return null; } 
    Object.keys(data).forEach(key => {
      const usuario:IUsuario = data[key];
      if(usuario.correo === correo && usuario.password === password){
        objUsuario = usuario;
        objUsuario.key = key;
      }
    });
    return objUsuario;
  }

  async entrar(correo: string, password: string): Promise<boolean> {
    const usuario = await (await this.usuarioLogin(correo, password)).toPromise().then();
    if(usuario){
      this.guardarStorage(usuario);
      return true;
    }else{
      return false;
    }
  }

  // guardarStorage(data: IUsuarioStorage) {
  guardarStorage(data: IUsuario) {
    this.userData = data;
    localStorage.setItem('userData', JSON.stringify(data));

    let hoy = new Date();
    hoy.setSeconds(3600); // Expira en 1h
    localStorage.setItem('expira', hoy.getTime().toString());

  }
  leerToken() {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
    } else {
      this.userData = null;
    }
    // console.log('validando...');
    return this.userData;
  }
  esAutenticado() {
    // if (this.userData.length < 2) {
    if (!this.userData) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    console.log('exp1', expira);
    console.log('exp2', new Date().getTime());

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }

  }
  salir() {
    localStorage.removeItem('userData');
  }
}
