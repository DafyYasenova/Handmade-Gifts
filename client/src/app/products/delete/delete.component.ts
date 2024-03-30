import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';
// import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  currentId: string = '';
  product: Product = {
    name: '',
    brand: '',
    imageUrl: '',
    description: '',
    time: '',
    price: 0,
    category: '',
    status: '',

  } as Product;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
ngOnInit(): void {
  this.apiService.getOneProduct(this.currentId).subscribe((product) => {
    this.product = product;
 

  })
}


  deleteProduct() {
    this.currentId = this.route.snapshot.params['id'];

    this.apiService.getOneProduct(this.currentId).subscribe((product) => {
      this.product = product;

      this.apiService.deleteProduct(this.product, this.currentId).subscribe(
        () => {

          console.log('Product deleted successfully');

          this.router.navigate(['/products']);
        }, error => {

          console.error('Error deleting product:', error);

        });
    }

    )
  }

  cancel() {
    this.currentId = this.route.snapshot.params['id'];

    this.apiService.getOneProduct(this.currentId).subscribe((product) => {
      this.product = product

      this.apiService.deleteProduct(this.product, this.currentId);
      this.router.navigate([`/products/${this.currentId}`])
    })

  }
}

