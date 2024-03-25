import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  http = inject(HttpClient);
  // public cartAddsubject = new BehaviorSubject<boolean>(false);
  public cartAddsubject = new Subject<boolean>();

  constructor() {}

  addToCarts(id: any) {
    console.log('id from service', id);

    return this.http.post<any>(`${apiUrls.cartServiceApi}addToCart`, id);
  }

  // getAllCarts(userId:any) {
  //   console.log("getAllCarts userId",userId);
    
  //   return this.http.get<any>(`${apiUrls.cartServiceApi}getCart/${userId}`);
  // }

  getAllCarts(userId:any) {
    console.log("getAllCarts userId",userId);
    
    return this.http.get<any>(`${apiUrls.cartServiceApi}getCart?userId=${userId}`);
  }

  deleteCarts(cartId:any) {
    console.log("deleteCarts ->  cartId:-",cartId);
    
    return this.http.delete<any>(`${apiUrls.cartServiceApi}deletecart/${cartId}`);
  }
}
