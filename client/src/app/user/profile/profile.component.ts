import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/types/product';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  http: any;

  userId = localStorage.getItem('userId');
  
  getMyProducts(userId: string): Observable<Product[]> {
    // userId = localStorage.getItem('userId')
       const { apiUrl } = environment;
       
       return this.http.getProducts(`${apiUrl}/data/products`).pipe(
         map(response => {
           
          console.log(response)
          //  const myProducts = Object.values(response).filter(product => product._ownerId === userId);
          //  return myProducts;
         })
         );
       
   }
}
