import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products: Product[] | null= null;
  isLoading: boolean = true;
  constructor(private api: ApiService){};

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) =>{
      console.log('products:', products);

      this.products = products;
      this.isLoading = false;
    } )
  }
}
