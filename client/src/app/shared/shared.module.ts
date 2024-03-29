import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective,
    SlicePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EmailDirective,
    SlicePipe,
  ]
})
export class SharedModule { }
