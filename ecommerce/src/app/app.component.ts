import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  public totalItem : number = 0;
  title = 'ecommerce';
  cartProducts: any[] = [];

  constructor(
    private productServive: ProductService,
    private cartService: CartService
  ) {
    this.productServive.cartAddedSubject.subscribe((res) => {});
  }
  ngOnInit(): void {
    this.loadCart();
    this.cartService.getProducts().subscribe(response=>{
      this.totalItem = response.length;
    })
  }

  loadCart() {
    this.productServive.getCartItemsByCustId(1).subscribe((res: any) => {
      this.cartProducts = res.data;
      debugger;
    });
  }
}
