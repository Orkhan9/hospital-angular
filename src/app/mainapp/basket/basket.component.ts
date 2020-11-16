import { Component, OnInit } from '@angular/core';
import {IBasket, IBasketItem} from './basket';
import {BasketService} from '../../service/basket.service';
import {Observable} from 'rxjs';
import {IProduct} from '../../models/product';
import {AuthService} from '../../service/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  jwtHelper=new JwtHelperService();
  basket$: Observable<IBasket>;
  constructor(private basketService: BasketService
              ,private authService:AuthService) { }
  product:IProduct[];
  ngOnInit(): void {
    if(this.authService.loggedIn()){
      if(parseInt(this.jwtHelper.decodeToken(localStorage.getItem('token')).nameid))
      this.basket$=this.basketService.basket$;
    }
    console.log(this.basket$);
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
