import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';

const routes: Routes = [
  {
    path: "**",
    pathMatch: "full", //default route
    component: HomeComponent
  },
  {
    path: 'products', //url name for HomeComponent
    component: HomeComponent
  },{
    path: 'cart', //url name for CartComponent
    component: CartComponent
  },{
    path: 'sale', //url name for SaleComponent
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
