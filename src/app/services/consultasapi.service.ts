import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultasapiService {
  pag: number = 1;
  constructor(private http: HttpClient) {}
  getCategory() {
    return this.http.get(`https://api.escuelajs.co/api/v1/categories`);
  }
  getProductsByCategory(id: number, pag: number) {
    return this.http.get(
      `https://api.escuelajs.co/api/v1/categories/${id}/products?offset=0&limit=10`
    );
  }
  getSingleProduct(id: number) {
    return this.http.get(` https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
