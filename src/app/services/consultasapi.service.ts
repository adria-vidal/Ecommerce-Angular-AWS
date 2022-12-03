import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasapiService {

  constructor(private http: HttpClient) { }
  getCategory(){
    return this.http.get(`https://api.escuelajs.co/api/v1/categories`);
  }
  getProductsByCategory(id:number){
    return this.http.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
  }
  getSingleProduct(id: number){
    return this.http.get(` https://api.escuelajs.co/api/v1/products/${id}`)

  }
}
