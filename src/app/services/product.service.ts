import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  addproduct(product:Product):Observable<Product>{
    return this.http.post<Product>('http://localhost:3000/products',product)
  }

  getById(id:number):Observable<Product>{
    return this.http.get<Product>('http://localhost:3000/products'+'/'+id)
  }

  Update(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>('http://localhost:3000/products'+'/'+id,product)
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>('http://localhost:3000/todos'+'/'+id)
   }
}
