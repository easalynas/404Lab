import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IUsuarioRegistro, IUsuario } from '../interfaces/usuario-interface';
import { ServicesService } from './services.service';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrlFirebase = environment.apiEndPointAppSocial;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private service: ServicesService,
    private http: HttpClient
  ) { }



  getUsuarioFirebase(uid: any) {
    return this.http.get(`${apiUrlFirebase}/usuarios/${uid}.json`);
  }

  getUsuarios() {
    return this.http.get(`${apiUrlFirebase}/usuarios.json`)
      .pipe(
        map(this.formatearLista)
      );
  }
  private formatearLista(data: object) {
    let usuarios: IUsuario[] = [];
    if (data === null) { return []; }
    Object.keys(data).forEach(key => {
      const usuario: IUsuario = data[key];
      usuario.key = key;
      usuarios.push(usuario);
    });
    return usuarios;
  }
  registrar(data: IUsuarioRegistro) {
    return this.service.postQuery(data, `Persona`);
  }
  postActualizarUsuario(usuario: IUsuario) {
    let usuTmp = {
      ...usuario
    }
    delete usuTmp.key;
    return this.http.put(`${apiUrlFirebase}/usuarios/${usuario.key}.json`, usuTmp);
  }
  registrarFirebase(data: IUsuario) {
    return this.http.post(`${apiUrlFirebase}/usuarios.json`, data)
      .pipe(
        map(
          (resp: any) => {
            return data;
          })
      );
  }
  postRegistrarComentario(key: string, comentario: string) {
    const data = {
      key: key,
      comentario: comentario
    }
    return this.http.post(`${apiUrlFirebase}/comentarios.json`, data)
      .pipe(
        map(
          (resp: any) => {
            return data;
          })
      );
  }
  getComentarios(key: string) {
    return this.http.get(`${apiUrlFirebase}/comentarios.json`)
      .pipe(
        map(data => this.buscarComentario(data, key))
      );
  }

  private buscarComentario(data: object, keyUser: string) {
    let comentarios: any[] = [];
    if (data === null) { return []; }
    Object.keys(data).forEach(key => {
      if (data[key].key === keyUser) {
        const comment: any = data[key].comentario;
        comentarios.push(comment);
      }
    });
    return comentarios;
  }

}
