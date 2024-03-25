import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    PagesModule,
    HttpClientModule,
    UserModule,
    ProductsModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
