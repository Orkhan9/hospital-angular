import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import {ShopPageComponent} from './shop-page.component';
import {ShopProductDetailsComponent} from './shop-product-details/shop-product-details.component';
import { ShopProductItemComponent } from './shop-product-item/shop-product-item.component';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ShopPageComponent,
    ShopProductDetailsComponent,
    ShopProductItemComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    PaginationModule,
    FormsModule
  ]
})
export class ShopModule { }
