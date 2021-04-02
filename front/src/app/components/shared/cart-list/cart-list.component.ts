import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output()
  propagar = new EventEmitter<boolean>();

  @Input('mostrar') mostrar: boolean;

  constructor() {
    
  }

  ngOnInit(): void {
    console.log('recibe ...', this.mostrar);
  }

  closeCartSidebar() {
    this.propagar.emit(false);
    this.mostrar = false
  }

}
