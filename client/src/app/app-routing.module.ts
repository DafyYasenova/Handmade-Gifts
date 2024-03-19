import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GalleryComponent } from './products/gallery/gallery.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: HomeComponent},
  {path: 'about', component: AboutComponent},


  {path: 'gallery', component: GalleryComponent},  
  // {path: 'create', component: CreateComponent},  

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},

  { path: '**', redirectTo: '/404' },
  { path: '404', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
