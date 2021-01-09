import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroComponent } from './erro/erro.component';
import { MenuModule } from "./menu/menu.module";

import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
