import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AptitudComponent } from './pages/usuario/aptitud/aptitud.component';
import { EditarComponent } from './pages/usuario/editar/editar.component';
import { InfoComponent } from './pages/usuario/info/info.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'user',
        children: [
          {
            path: 'edit',
            component: EditarComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'aptitud',
            component: AptitudComponent,
            canActivate:[AuthGuard]
          },
          {
            path: 'info',
            component: InfoComponent,
            canActivate:[AuthGuard]
          },
          {
            path: '**',
            redirectTo: 'info',
            pathMatch: 'full'
          }
        ],
        canActivate:[AuthGuard]
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
