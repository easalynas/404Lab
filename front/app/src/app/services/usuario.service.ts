import { Injectable } from '@angular/core';
import { IUsuarioRegistro } from '../interfaces/interface-usuario';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private service:ServicesService
  ) { }

  registrar(data:IUsuarioRegistro){
    return this.service.postQuery(data,`Persona`);
  }
}
