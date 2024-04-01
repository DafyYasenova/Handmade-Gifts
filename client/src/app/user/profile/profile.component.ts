
import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  http: any;
  products: Product[] | null = null;

  userId = localStorage.getItem('userId');
  username = localStorage.getItem('username');
  email = localStorage.getItem('email');
  isLoading: boolean = true;

  constructor(private apiService: ApiService, private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  
  ngOnInit(): void {
    if (this.userId) {
      this.apiService.getMyProducts(this.userId).subscribe((products) => {
        console.log(products)
        this.products = products;
      });
      this.isLoading = false;
    }
  }

}
