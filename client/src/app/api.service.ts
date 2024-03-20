import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const { apiUrl } = environment;
    // console.log(this.http.get(`${apiUrl}/products`));

    return this.http.get<Product[]>(`${apiUrl}/products`);

  }
}
