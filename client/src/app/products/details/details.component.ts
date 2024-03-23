import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product = {} as Product;

  productId: string = '';
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


    const productId = this.activatedRoute.snapshot.params['id'];

    this.apiService.getOneProduct(productId).subscribe((product) => {
      this.product = product;
      this.productId = product._id
      console.log('product', productId)
    })

  }
}
