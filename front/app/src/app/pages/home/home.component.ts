import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IListaEstudiantes } from '../../interfaces/estudiante-interface';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { IUsuario } from '../../interfaces/usuario-interface';
import { ValidadoresService } from '../../services/validadores.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaEstudiante: IListaEstudiantes[] = [];
  closeResult = '';
  inforUsuarioComentario: IUsuario;
  listaComentarios: any[] = [];
  // @ViewChild('comentario',{static: true}) comentario:ElementRef;
  
  formulario:FormGroup;

  constructor(
    private service: AuthService,
    private usuarioService: UsuarioService,
    private modalService: NgbModal,
    private validadores: ValidadoresService,
    private fb: FormBuilder,
  ) {
    this.inicarFormComentario();
  }

  async ngOnInit() {
    this.listaEstudiante = await this.usuarioService.getUsuarios().toPromise().then();
  }

  abrirComentario(estudiante: IUsuario, content) {
    this.getComentarios(estudiante.key);
    this.inforUsuarioComentario = estudiante;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  async publicarComentario(usuario: IUsuario, comentario: string) {
    await this.usuarioService.postRegistrarComentario(usuario.key, comentario).toPromise().then();
    this.validadores._snackBar('Se ha registrado tu comentario!');
    // this.comentario.nativeElement.value = '';
    this.formulario.patchValue({
      comentario : ''
    });
    await this.getComentarios(usuario.key);
  }

  async getComentarios(key: string) {
    this.listaComentarios = [];
    await this.usuarioService.getComentarios(key).toPromise().then(
      resp => {
        const comentarios = resp;
        this.listaComentarios = resp;
        console.log('comentarios____', resp);
      }
    );
  }

  private inicarFormComentario(){
    this.formulario = this.fb.group({
      comentario : ['',[Validators.required]]
    })
  }



}
