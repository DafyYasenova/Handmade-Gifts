import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

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

  editProduct(product: Product, id:string){
    const { apiUrl } = environment;
    const payload = product;

    return this.http.put<Product>(`${apiUrl}/data/products/${id}`, payload);
  }
}
