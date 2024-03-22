import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private apiService: ApiService) { };

  addProduct(event: Event, product: string, brand: string, imageUrl: string, description: string, price: number, category: string, status: string) {
    event.preventDefault();
    console.log({ product, brand, imageUrl, description, price, category, status });

    this.apiService.createProduct(product, brand, imageUrl, description, price, category, status).subscribe((data)=> {
    // this.apiService.createProduct(product, brand, imageUrl, description, price, category, status).pipe(tap((data) => {
      console.log({ data })
    })
    // )
  }
}
