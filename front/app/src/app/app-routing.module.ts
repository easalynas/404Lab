import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AptitudComponent } from './pages/usuario/aptitud/aptitud.component';
import { EditarComponent } from './pages/usuario/editar/editar.component';
import { InfoComponent } from './pages/usuario/info/info.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
          },
          {
            path : 'info',
            component:InfoComponent
          },
          {
            path : '**',
            redirectTo : 'info',
            pathMatch : 'full'
          }
        ],
      },
      {
        path : '**',
        redirectTo : 'home',
        pathMatch : 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
