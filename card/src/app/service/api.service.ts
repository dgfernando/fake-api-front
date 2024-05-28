import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //  URL = "https://api.escuelajs.co/api/v1/products";
      URL = "http://localhost:3000/products";

  getProducts(){
    return this.http.get(this.URL);
  }

  getProduct(id:any){
    return this.http.get(`${this.URL}/${id}`)
  }

  putProduct(product: any){
    return this.http.put(`${this.URL}/${product.id}`, product)
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.URL}/${id}`)
  }

  postProduct(product: any){
    return this.http.post(`${this.URL}/`, product)
  }
}
