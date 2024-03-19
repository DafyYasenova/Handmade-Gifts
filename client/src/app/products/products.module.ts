import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    GalleryComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryComponent,
    DetailsComponent,
    CreateComponent,
  ]
})
export class ProductsModule { }
