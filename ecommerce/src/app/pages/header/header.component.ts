import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  title = 'ecommerce';
  cartProducts: any[] = [];

  constructor(private productServive: ProductService, private cartService: CartService)
  {
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

  toHome(){
    document.getElementById("")
  }
}
