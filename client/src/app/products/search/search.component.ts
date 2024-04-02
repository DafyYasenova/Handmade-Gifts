import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {

  products: Product[] | null = null;
  isLoading: boolean = true;
  isSearching: boolean = false;

  private searchSubscription: Subscription | undefined;

  constructor(private api: ApiService, private userService: UserService) { };

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }


  onSearch(form: NgForm) {
    const { search } = form.value;
    this.isLoading = true;
    this.isSearching = true;
    console.log(search);

    this.searchSubscription = this.api.searchProduct(search).subscribe((products: Product | Product[]) => {
      if (Array.isArray(products)) {
        this.products = products;
      } else {
        this.products = [products];
      }
      this.isLoading = false;
      this.isSearching = false;
    });
  }



}
