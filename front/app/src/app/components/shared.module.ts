import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { InfoUserComponent } from './info-user/info-user.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    InfoUserComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule ,
  ],
  exports :[
    HeaderComponent,
    SidebarComponent,
    InfoUserComponent
  ]
})
export class SharedModule { }
