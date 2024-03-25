import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { IMAGE_URL_PATTERN } from 'src/app/constants';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  imageUrlPattern = IMAGE_URL_PATTERN;
  constructor(private apiService: ApiService, private router: Router) { };

  addProduct(form: NgForm) {

    if (form.invalid) {
      return;
    }


    Object.keys(form.value).forEach(key => {
      if (typeof form.value[key] === 'string') {
        form.value[key] = form.value[key].trim();
      }
    });


    this.apiService.createProduct(form.value).subscribe((data) => {

      this.router.navigate(['/products'])
    })
    console.log(form.value);


  }
  // addProduct(event: Event, name: string, brand: string, imageUrl: string, description: string, price: number, category: string, status: string, time: string) {
  //   event.preventDefault();
  //   console.log({ name, brand, imageUrl, description, price, category, status , time});

  //   this.apiService.createProduct(name, brand, imageUrl, description, price, category, status, time).subscribe((data)=> {
  //   // this.apiService.createProduct(name, brand, imageUrl, description, price, category, status, time).pipe(tap((data) => {
  //     console.log({ data })
  //   })
  //   // )
  // }
}
