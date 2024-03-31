import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';




@NgModule({
  declarations: [
    GalleryComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
 
  ],
  imports: [
    CommonModule, RouterModule, SharedModule, FormsModule,
  ],
  exports: [
    GalleryComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
   
  ]
})
export class ProductsModule { }
