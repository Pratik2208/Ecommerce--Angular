import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  addProduct(data : Product){
    return this.http.post('http://localhost:3000/product',data);
  }

  // API to get list of products
  getProductList(){
    return this.http.get<Product[]>('http://localhost:3000/product');
  }

  deleteProduct(id : number){
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  getProduct(id : string){
    return this.http.get<Product>(`http://localhost:3000/product/${id}`);
  }

  updateProduct(product : Product){
    return this.http.put<Product>(`http://localhost:3000/product/${product.id}`, product);
  }

}
