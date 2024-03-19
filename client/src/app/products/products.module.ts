import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    GalleryComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryComponent,
    DetailsComponent,
  ]
})
export class ProductsModule { }
