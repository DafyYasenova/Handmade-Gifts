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

  addProduct(event: Event, name: string, brand: string, imageUrl: string, description: string, price: number, category: string, status: string, time: string) {
    event.preventDefault();
    console.log({ name, brand, imageUrl, description, price, category, status , time});

    this.apiService.createProduct(name, brand, imageUrl, description, price, category, status, time).subscribe((data)=> {
    // this.apiService.createProduct(name, brand, imageUrl, description, price, category, status, time).pipe(tap((data) => {
      console.log({ data })
    })
    // )
  }
}
