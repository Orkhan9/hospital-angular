import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShopPageComponent} from './shop-page.component';
import {ShopProductDetailsComponent} from './shop-product-details/shop-product-details.component';

const route:Routes=[
  {path:'',component:ShopPageComponent},
  {path:':id',component:ShopProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports :[RouterModule]
})
export class ShopRoutingModule { }
