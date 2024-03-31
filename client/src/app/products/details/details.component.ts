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

  product = {} as Product;

  productId: string = '';
  userId = localStorage.getItem('userId');
  productOwnerId: string = ''
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {


    const productId = this.activatedRoute.snapshot.params['id'];

    this.apiService.getOneProduct(productId).subscribe((product) => {
      this.product = product;
      this.productId = product._id  as unknown as string;
      this.productOwnerId = product._ownerId as unknown as string;

    })

  }
}
