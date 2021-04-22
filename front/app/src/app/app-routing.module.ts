import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AptitudComponent } from './pages/usuario/aptitud/aptitud.component';
import { EditarComponent } from './pages/usuario/editar/editar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path : 'user',
        children:[
          {
            path : 'edit',
            component : EditarComponent
          },
          {
            path :'aptitud',
            component: AptitudComponent
          }
        ]
      },
      {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
