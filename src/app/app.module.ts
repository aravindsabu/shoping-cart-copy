import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcartComponent } from './addcart/addcart.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:AddcartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
