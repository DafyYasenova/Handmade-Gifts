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
    // console.log(this.http.get(`${apiUrl}/products`));

    // return this.http.get<Product[]>(`${apiUrl}/products`);

    return this.http.get<{ [key: string]: Product }>(`${apiUrl}/products`).pipe(
      map(response => {
        return Object.values(response)
      })
    )
  }
getOneProduct(id:string){

  const { apiUrl} = environment;

  return this.http.get<Product>(`${apiUrl}/products/${id}`)
}
  createProduct(product: string, brand: string, imageUrl: string, description: string, price: number, category: string, status: string, time:string) {
    const { apiUrl } = environment;
    const payload = {
      product,
      brand,
      imageUrl,
      description,
      price,
      category,
      status,
      time
    }

    return this.http.post<Product>(`${apiUrl}/products`, payload)
  }
}
