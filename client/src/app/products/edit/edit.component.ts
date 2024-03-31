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
export class EditComponent implements OnInit {

  isOwner: boolean = false;
  currentId: string = '';
  originalProduct: Product = {
    name: '',
    brand: '',
    imageUrl: '',
    description: '',
    time: '',
    price: 0,
    category: '',
    status: '',
    _id: '',
    _createdOn: '',
    _updatedOn: '',
  };
  productId: string = '';
  userId = localStorage.getItem('userId');
  productOwnerId: string = '';

  product: Product = { ...this.originalProduct };
  imageUrlPattern = IMAGE_URL_PATTERN;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentId = this.route.snapshot.params['id'];

    this.apiService.getOneProduct(this.currentId).subscribe((product) => {
      this.originalProduct = product;
      this.product = { ...this.originalProduct };
  
      this.product = product;
      this.productId = product._id as unknown as string;
      this.productOwnerId = product._ownerId as unknown as string;
      

      if (this.userId === this.productOwnerId) {
        this.isOwner = true;
      } else{
        this.router.navigate(['/404'])
      }
    });
  }
  

  editProduct(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    // Актуализира this.product с новите стойности от формата
    const updatedProduct = {
      ...this.product,
      // Това ще присвои новите стойности от формата върху this.product  
      ...form.value
    };
    if (this.isOwner) {
      this.apiService.editProduct(updatedProduct, this.currentId).subscribe({
        next: (product) => {
          console.log('Product edited successfully:', product); this.router.navigate(['/products', this.currentId]);
        }, error: (error) => {
          console.error('Error editing product:', error);
        }
      });
    }else{
      this.router.navigate(['/products'])
    }

  }
}



