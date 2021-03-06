import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { AllprodComponent } from './allprod/allprod.component';
import { ErroComponent } from './erro/erro.component';

import { RouterModule } from "@angular/router";
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ShopComponent, HomeComponent, ContactComponent, AboutComponent, DetailComponent, AllprodComponent, ErroComponent, FilterComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ShopComponent, HomeComponent, ContactComponent, AboutComponent, DetailComponent, AllprodComponent, ErroComponent]
})
export class MenuModule { }
