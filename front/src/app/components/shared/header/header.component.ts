import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openMenu: boolean;
  showCartSidebar: boolean;
  @Input('envioHome') envioHome: boolean;
  contador: number;

  constructor(
    private router: Router
  ) {

  }



  ngOnInit(): void {
    this.contador = 0;
  }
  ngAfterContentChecked(): void {
    if (this.envioHome) {
      this.contador++;
    }
  }


  navegar(action: string) {

    $(".category-menu").removeClass("show");  // temporal ...

    this.router.navigate(['/category', action]);
  }


  showCart() {
    this.showCartSidebar = true;
    // .... Agregar mas logica aqui
  }

  accion(event) {
    this.showCartSidebar = false;
    console.log('event...', event);
  }

}
