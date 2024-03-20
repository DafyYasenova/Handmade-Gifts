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

  getProducts():Observable<Product[]>{
    const { apiUrl } = environment;
    // console.log(this.http.get(`${apiUrl}/products`));

    // return this.http.get<Product[]>(`${apiUrl}/products`);

    return this.http.get<{[key:string]:Product}>(`${apiUrl}/products`).pipe(
      map(response =>{
        return Object.values(response)
      })
    )
  }
}
