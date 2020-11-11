import { Component, OnInit } from '@angular/core';
import {IBasket, IBasketItem} from './basket';
import {BasketService} from '../../service/basket.service';
import {Observable} from 'rxjs';
import {IProduct} from '../../models/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService) { }
  product:IProduct[];
  ngOnInit(): void {
    this.basket$=this.basketService.basket$;


  }


  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }

}
