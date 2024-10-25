import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../../datatype';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  constructor(private http:HttpClient) { }
  addProduct(data:Products){
    return this.http.post('http://localhost:3000/products',data)
  }

  getProductList(){
    return this.http.get<Products[]>('http://localhost:3000/products')
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProductById(id:string){
    return this.http.get<Products>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product:Products){
    return this.http.put<Products>(`http://localhost:3000/products/${product.id}`,product)
  }

  popularProducts(){
    return this.http.get<Products[]>('http://localhost:3000/products?_limit=3')
  }
}
