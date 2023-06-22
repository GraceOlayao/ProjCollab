import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : any

  constructor(private productService: ProductService, private cartService: CartService){
    this.products=[
      {
        "id":1,
        "name":"Scoop Neck",
        "discountedPrice": 400,
        "origPrice": 500,
        image: ["assets/1.jpg"]
      },
      {
        "id":2,
        "name":"Sabrina",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/2.jpg"]
      },
      {
        "id":3,
        "name":"Button-Up Rib-Knit",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/3.jpg"]
      },
      {
        "id":4,
        "name":"Tank Tops",
        "discountedPrice": 560,
        "origPrice": 700,
        image: ["assets/4.jpg"]
      },
      {
        "id":5,
        "name":"Ribbed Knit Top",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/5.jpg"]
      },
      {
        "id":6,
        "name":"Color Block Knitted",
        "discountedPrice": 560,
        "origPrice": 700,
        image: ["assets/6.jpg"]
      },
      {
        "id":7,
        "name":"Draw String Top",
        "discountedPrice": 520,
        "origPrice": 650,
        image: ["assets/7.jpg"]
      },
      {
        "id":8,
        "name":"String Cami Top",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/8.jpg"]
      }
    ]

  }

  ngOnInit(){}
  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

}
