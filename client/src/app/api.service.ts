import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';
import { Observable, map } from 'rxjs';

import { Like } from './types/likes';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  userId = localStorage.getItem('userId');

  getProducts(): Observable<Product[]> {
    const { apiUrl } = environment;

    return this.http.get<{ [key: string]: Product }>(`${apiUrl}/data/products`).pipe(
      map(response => {
        return Object.values(response)
      })
    )
  }


  getOneProduct(id: string) {

    const { apiUrl } = environment;

    return this.http.get<Product>(`${apiUrl}/data/products/${id}`)
  }


  createProduct(product: Product) {
    const { apiUrl } = environment;
    const payload = product;

    return this.http.post<Product>(`${apiUrl}/data/products`, payload)
  }


  editProduct(product: Product, id: string) {
    const { apiUrl } = environment;
    const payload = product;

    console.log('payload', payload)
    return this.http.put<Product>(`${apiUrl}/data/products/${id}`, payload);
  }


  deleteProduct(product: Product, id: string) {
    const { apiUrl } = environment;
    const payload = product;

    return this.http.delete<Product>(`${apiUrl}/data/products/${id}`);
  }


  getMyProducts(userId: string): Observable<Product[]> {
    const { apiUrl } = environment;
    return this.http.get<{ [key: string]: Product }>(`${apiUrl}/data/products?where=_ownerId%3D%22${userId}%22`).pipe(
      map(response => {
        return Object.values(response)
      })
    )
  }

  searchProduct(search: string) {

    const { apiUrl } = environment;

    return this.http.get<Product>(`${apiUrl}/data/products?where=name%20LIKE%20%22${search}%22`);
  }

  addLike(userId: string, productId: string) :Observable<Like>{
    const { apiUrl } = environment;
    const like : Like = { userId, productId };
    console.log(like)
    return this.http.post<Like>(`${apiUrl}/data/likes`, like);
  }

  
 
  getAllLikes(): Observable<Like[]> {
    const { apiUrl } = environment;
 
    return this.http.get<Like[]>(`${apiUrl}/data/likes`).pipe(
      map(response => {
        return Object.values(response)
      })
    )
  }
 
 
}

