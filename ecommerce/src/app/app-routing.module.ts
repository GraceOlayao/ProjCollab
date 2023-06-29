import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', redirectTo:'Log',  pathMatch: 'full'},
  {path:'Log', component: LoginComponent},
  {path:'Sign', component: SignComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Product', component: ProductsComponent},
  {path: 'Cart', component: CartComponent},
  {path: '**', component: ErrorComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
