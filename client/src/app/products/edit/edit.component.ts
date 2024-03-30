import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IMAGE_URL_PATTERN } from 'src/app/constants';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
currentId:string = '';
product = {} as Product;
  imageUrlPattern = IMAGE_URL_PATTERN;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { };

  ngOnInit(): void {
    this.currentId = this.route.snapshot.params['id'];
    console.log(this.currentId)
    this.apiService.getOneProduct(this.currentId).subscribe((product) =>{
      this.product = product;
    })
  }
  editProduct(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.apiService.editProduct(this.product, this.currentId).subscribe((data) =>{
      console.log('Product edited successfully:', data);
      this.router.navigate([`/products/${this.currentId}`])
    })
  }
 
}
