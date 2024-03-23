import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  product = {} as Product;

constructor(private apiService: ApiService){}

ngOnInit(): void {
  this.apiService.getOneProduct('123').subscribe((product)=> {
   this.product= product;
    console.log("product details:", product)
    console.log("id",this.product.name)
  })
}
}
