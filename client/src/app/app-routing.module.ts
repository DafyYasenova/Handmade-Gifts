import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GalleryComponent } from './products/gallery/gallery.component';
import { DetailsComponent } from './products/details/details.component';
import { CreateComponent } from './products/create/create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },


  { path: 'products', component: GalleryComponent },
  { path: 'products/:id', component: DetailsComponent },
  // { path: 'products/:id/edit', component: EditComponent },
  { path: 'create', component: CreateComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', redirectTo: '/404' },
  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
