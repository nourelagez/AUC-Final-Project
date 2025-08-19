import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: any[] = [];
cart: any[] = [];
  constructor(private _HttpClient:HttpClient) { }
  //HttpClient
  //Get , Post , Put ,Patch , Delete
  
    getCategory():Observable<any>{
      let res=this._HttpClient.get('https://dummyjson.com/products/category-list');
      return res;
    }

    getProducts(catergory:any):Observable<any>{
      let res=this._HttpClient.get(`https://dummyjson.com/products/category/${catergory}`);
      return res;
    }
   
    getSingleProduct(id:number):Observable<any>{
       let res=this._HttpClient.get(`https://dummyjson.com/products/${id}`);
       return res;
    }

    login(data:any):Observable<any>{
      let res=this._HttpClient.post('https://dummyjson.com/user/login',data);
      return res;
    }
    islogined=new BehaviorSubject(false);
    addToCart(item: any) {
    // Check if item already in cart
    const existing = this.cart.find(i => i.id === item.id);
    if (existing) {
      existing.qty++;
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(i => i.id !== item.id);
  }
}
