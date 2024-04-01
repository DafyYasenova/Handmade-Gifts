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

  getLatestProduct(){
    // const { apiUrl } = environment;
    // return this.http.get(`${apiUrl}/products?sortBy=_createdOn%20desc&offset=0&pageSize=3`).pipe(
    //   map(response =>{
    //     return Object.values(response)
    //   })
    // );
  }
  // getMyProducts(userId: string): Observable<Product[]> {
  //   return this.getProducts().pipe(
  //     map((products: Product[]) => products.filter(product => product._ownerId === userId))
  //   );
  // }

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

    console.log('payload',payload)
    return this.http.put<Product>(`${apiUrl}/data/products/${id}`, payload);
  }

  deleteProduct(product: Product, id:string){
    const { apiUrl } = environment;
    const payload = product;

    return this.http.delete<Product>(`${apiUrl}/data/products/${id}`);
  }

  searchProduct(){

    // const { apiUrl } = environment;
    // const payload = product;
    // return this.http.get<Product>(`${apiUrl}?where=name%20LIKE%20%22${''}%22`);
  }
}
