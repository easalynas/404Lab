import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Output() addCartCreated = new EventEmitter<boolean>();

  data: any;

  constructor(
    private serviceEmitter:EmitterService
  ) { }

  ngOnInit(): void {
  }

  agregarCarrito(){
    console.log('click...');
    // this.addCartCreated.emit(true);
    this.serviceEmitter.changeFilter();
  }

}
