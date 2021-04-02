import { Component } from '@angular/core';
import { EmitterService } from './services/emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCake';
  enviando:boolean;
  


  constructor(
    private emitterService:EmitterService
  ){
      this.emitterService.setCambios().subscribe(
        (resp) => {
          this.enviando = resp;
          console.log('Recibiendo...',resp);
        }
      )
  }
}
