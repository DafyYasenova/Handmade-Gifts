import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private api: ApiService){};

  ngOnInit(): void {
    this.api.getProducts().subscribe(products =>{
      console.log('products:', products)
    } )
  }
}
