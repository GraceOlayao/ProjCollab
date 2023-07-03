import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SaleComponent } from './pages/sale/sale.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  exports: [RouterModule],

  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SaleComponent,
    ProductsComponent,
    ErrorComponent,
    HeaderComponent,
    LoginComponent,
    SignComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
