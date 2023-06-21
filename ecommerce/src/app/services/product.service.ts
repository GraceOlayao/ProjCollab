import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartAddedSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //resposible to call ang return the value of http  
  getAllProducts(): Observable<any[]>{ 
    debugger;
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
  }
  addtoCart(obj: any): Observable<any>{
    debugger;
    return this.http.post<any>("https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart", obj);
  }
  getCartItemsByCustId(custId: number){
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=1" + custId);
  }
}
