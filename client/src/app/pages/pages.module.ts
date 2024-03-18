import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ErrorComponent,
  ]
})
export class PagesModule { }
