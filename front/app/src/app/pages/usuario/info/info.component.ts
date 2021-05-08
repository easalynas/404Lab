import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsuarioService } from '../../../services/usuario.service';
import { IUsuario } from '../../../interfaces/usuario-interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  data:IUsuario;
  usuarioInfo : IUsuario;
  constructor(
    private service: AuthService,
    private usuarioService:UsuarioService
  ) {
      this.data = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit(): void {
    // console.log('data___' , this.data);
    this.usuarioService.getUsuarioFirebase(this.data.key).toPromise()
    .then(
      (resp : IUsuario) => {
        console.log(' subscripción ... ' , resp);
        this.usuarioInfo = resp;
      }
    );
  }

  eliminarCuenta() {

  }

}
