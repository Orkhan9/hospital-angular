import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IBasket, IBasketTotals} from '../basket';
import {BasketService} from '../../../service/basket.service';

@Component({
  selector: 'app-order-basket',
  templateUrl: './order-basket.component.html',
  styleUrls: ['./order-basket.component.css']
})
export class OrderBasketComponent implements OnInit {

  basketTotals$:Observable<IBasketTotals>
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.basketTotals$=this.basketService.basketTotal$
  }



}
