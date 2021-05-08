import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-aptitud',
  templateUrl: './aptitud.component.html',
  styleUrls: ['./aptitud.component.css']
})
export class AptitudComponent implements OnInit {

  constructor(
    private service: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
