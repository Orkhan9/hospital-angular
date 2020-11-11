import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/product';
import {BasketService} from '../../../service/basket.service';

@Component({
  selector: 'app-shop-product-item',
  templateUrl: './shop-product-item.component.html',
  styleUrls: ['./shop-product-item.component.css']
})
export class ShopProductItemComponent implements OnInit {
@Input() product:IProduct;
  constructor(private basketService:BasketService) {}

  ngOnInit(): void {
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product)
  }
}
