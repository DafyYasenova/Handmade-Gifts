import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GalleryComponent,
    DetailsComponent,
    CreateComponent
  ],
  imports: [
    CommonModule, RouterModule, SharedModule,
  ],
  exports: [
    GalleryComponent,
    DetailsComponent,
    CreateComponent,
  ]
})
export class ProductsModule { }
