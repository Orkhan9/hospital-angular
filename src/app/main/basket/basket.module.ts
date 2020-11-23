import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasketComponent} from './basket.component';
import {BasketRoutingModule} from './basket-routing.module';
import { OrderBasketComponent } from './order-basket/order-basket.component';



@NgModule({
  declarations: [BasketComponent, OrderBasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
