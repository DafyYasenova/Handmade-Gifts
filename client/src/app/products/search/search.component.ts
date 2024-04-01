import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  products: Product[] | null = null;
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) { };

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    // this.api.getLatestProduct().subscribe((products) => {
    //   console.log('products:', products);

    //   // this.products = products;
    //   this.isLoading = false;
    // })

    // this.api.getLatestProduct().subscribe(
    //   (products: Product[]) => {
    //     this.products = products;
    //     console.log('products:', products);
    //     this.isLoading = false;
    //   },
      // (error) => {
      //   console.error('Error fetching latest products:', error);
      //   this.isLoading = false; // Ensure that isLoading is set to false even in case of error
      // }
    // );

  }

  onSearch(form :NgForm){
    const { search } = form.value;
    this.isLoading = true;


    this.api.searchProduct(search).subscribe((products) => {

      // this.products = products;
        console.log(products)
     
        this.isLoading = false;
      })
    }
  


}
