import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [

    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule,
  ],
  exports: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
