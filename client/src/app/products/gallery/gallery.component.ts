import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products: Product[] | null= null;
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService){};

get isLoggedIn(): boolean {
  return this.userService.isLogged;
}

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) =>{
      console.log('products:', products);

      this.products = products;
      this.isLoading = false;
    } )
  }
}
