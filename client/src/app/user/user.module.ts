import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [

    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class UserModule { }
