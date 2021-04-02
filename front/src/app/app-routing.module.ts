import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersHistoryComponent } from './pages/orders-history/orders-history.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category/:name', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders-history', component: OrdersHistoryComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
