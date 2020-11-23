import {v4 as uuidv4} from 'uuid'
import {JwtHelperService} from '@auth0/angular-jwt';

export interface IBasket {
  id: string;
  basketItems: IBasketItem[];
}

export interface IBasketItem {
  id: any;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
  userId:number;
}

export class Basket implements IBasket{

  jwtHelper=new JwtHelperService();
  basketItems: IBasketItem[] = [];
  id = this.jwtHelper.decodeToken(localStorage.getItem('token')).unique_name;
}

export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
