import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { CartService } from '../services/cart.service';
import { subscribeOn } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : any;
  filterCategory : any;

  constructor(private productService: ProductService, private cartService: CartService){
    this.products=[
      {
        "category":"top",
        "id":1,
        "name":"Scoop Neck",
        "discountedPrice": 400,
        "origPrice": 500,
        image: ["assets/1.jpg"]
      },
      {
        "category":"top",
        "id":2,
        "name":"Sabrina",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/2.jpg"]
      },
      {
        "category":"top",
        "id":3,
        "name":"Button-Up Rib-Knit",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/3.jpg"]
      },
      {
        "category":"top",
        "id":4,
        "name":"Tank Tops",
        "discountedPrice": 560,
        "origPrice": 700,
        image: ["assets/4.jpg"]
      },
      {
        "category":"top",
        "id":5,
        "name":"Ribbed Knit Top",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/5.jpg"]
      },
      {
        "category":"top",
        "id":6,
        "name":"Color Block Knitted",
        "discountedPrice": 560,
        "origPrice": 700,
        image: ["assets/6.jpg"]
      },
      {
        "category":"top",
        "id":7,
        "name":"Draw String Top",
        "discountedPrice": 520,
        "origPrice": 650,
        image: ["assets/7.jpg"]
      },
      {
        "category":"top",
        "id":8,
        "name":"String Cami Top",
        "discountedPrice": 320,
        "origPrice": 400,
        image: ["assets/8.jpg"]
      },
      {
        "category":"shorts",
        "id":9,
        "name":"Solid Denim Shorts",
        "discountedPrice": 300,
        "origPrice": 400,
        image: ["assets/9s.jpg"]
      },
      {
        "category":"shorts",
        "id":10,
        "name":"Rolled Denim Shorts",
        "discountedPrice": 400,
        "origPrice": 500,
        image: ["assets/10.jpg"]
      },
      {
        "category":"shorts",
        "id":11,
        "name":"Rollup Denim Shorts",
        "discountedPrice": 320,
        "origPrice": 380,
        image: ["assets/11.jpg"]
      },
      {
        "category":"shorts",
        "id":12,
        "name":"Straight Leg Shorts",
        "discountedPrice": 220,
        "origPrice": 350,
        image: ["assets/12.jpg"]
      },
      {
        "category":"accesories",
        "id":13,
        "name":"Cool Tone Sunglasses",
        "discountedPrice": 150,
        "origPrice": 200,
        image: ["assets/j1.jpg"]
      },
      {
        "category":"accesories",
        "id":14,
        "name":"Strawberry Hat",
        "discountedPrice": 170,
        "origPrice": 250,
        image: ["assets/j2.jpg"]
      },
      {
        "category":"accesories",
        "id":15,
        "name":"Country Hair Band",
        "discountedPrice": 200,
        "origPrice": 280,
        image: ["assets/j3.jpg"]
      },
      {
        "category":"accesories",
        "id":16,
        "name":"Elegant HeadBand",
        "discountedPrice": 200,
        "origPrice": 300,
        image: ["assets/j4.jpg"]
      }
    ]

  }

  ngOnInit(){

    this.productService.getAllProducts().subscribe(response=>{
      this.filterCategory = response;
      console.log(this.products);
    });
  }

  addtoCart(item:any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.products.filter((a:any) => {
      if(a.category == category || category == ''){
        return a;
      }
    });
  }
}
