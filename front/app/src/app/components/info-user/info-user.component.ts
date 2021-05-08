import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  @Input('userInfo') userInfo;
  constructor() { }

  ngOnInit(): void {
    console.log('usuario_info___', this.userInfo);
  }

}
