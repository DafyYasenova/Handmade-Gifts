import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
 
}
