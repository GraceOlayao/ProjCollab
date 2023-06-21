import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'ecommerce';
  cartProducts:any[] = [];
  constructor(private productServive: ProductService){
    this.productServive.cartAddedSubject.subscribe(res=>{
    })
  }
ngOnInit(): void {
  this.loadCart();
}


  loadCart(){
    this.productServive.getCartItemsByCustId(1).subscribe((res: any)=>{
      this.cartProducts = res.data;
      debugger;
    })
  }
}
