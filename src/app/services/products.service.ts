import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);

  constructor() {}

  getproductData() {
    return this.http.get<any>(`${apiUrls.productServiceApi}getall`);
  }

  //by searchquery
  searchProduct(query: string) {
    console.log('searchProductqueryByservice', query);
    return this.http.get<any>(`${apiUrls.productServiceApi}?name=${query}`);
  }
  //by id
  getProductById(id: string) {
    return this.http.get<any>(`${apiUrls.productServiceApi}detail/${id}`);
  }
}
