import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  liked: boolean = false;
  product = {} as Product;

  productId: string = '';
  userId = localStorage.getItem('userId');
  productOwnerId: string = '';
  showDeleteConfirmationModal: boolean = false;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    const productId = this.activatedRoute.snapshot.params['id'];

    this.apiService.getOneProduct(productId).subscribe((product) => {
      this.product = product;
      this.productId = product._id as unknown as string;
      this.productOwnerId = product._ownerId as unknown as string;
    })
  }
    toggleLike():void {
      this.liked = !this.liked;
    }

    showDeleteModal(): void {
      this.showDeleteConfirmationModal = true;
    }    

    deleteProduct() {
      // this.productId = this.route.snapshot.params['id'];
  
      console.log('delete')
      // this.apiService.getOneProduct(this.productId).subscribe((product) => {
      //   this.product = product;
  
        this.apiService.deleteProduct(this.product, this.productId).subscribe(
          () => {
  
            console.log('Product deleted successfully');
  
            this.router.navigate(['/products']);
          }, error => {
  
            console.error('Error deleting product:', error);
  
          });
      }
  
      
    
    cancel() {
      // this.productId = this.route.snapshot.params['id'];
  
      // this.apiService.getOneProduct(this.productId).subscribe((product) => {
      //   this.product = product
  
      //   this.apiService.deleteProduct(this.product, this.productId);
      //   this.router.navigate([`/products/${this.productId}`])
      // })
      this.showDeleteConfirmationModal = false;
  
    }
  }

