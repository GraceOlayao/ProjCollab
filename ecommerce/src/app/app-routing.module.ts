import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: '', redirectTo:'Home',  pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Cart', component: CartComponent},
  {path: '**', component: ErrorComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
