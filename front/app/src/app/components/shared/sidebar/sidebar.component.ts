import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salir(){
    this.authService.salir();
    this.router.navigateByUrl('/login');
  }

}