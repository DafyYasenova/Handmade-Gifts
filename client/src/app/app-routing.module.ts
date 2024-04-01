import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { GalleryComponent } from './products/gallery/gallery.component';
import { DetailsComponent } from './products/details/details.component';
import { CreateComponent } from './products/create/create.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './core/error/error.component';
import { EditComponent } from './products/edit/edit.component';

import { SearchComponent } from './products/search/search.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  
  
  { path: 'products', component: GalleryComponent },
  { path: 'products/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'products/:id/edit', component: EditComponent , canActivate: [AuthGuard]},
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, },

  {path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
