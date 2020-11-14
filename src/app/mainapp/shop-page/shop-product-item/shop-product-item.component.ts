import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/product';
import {BasketService} from '../../../service/basket.service';
import {AuthService} from '../../../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-shop-product-item',
  templateUrl: './shop-product-item.component.html',
  styleUrls: ['./shop-product-item.component.css']
})
export class ShopProductItemComponent implements OnInit {
@Input() product:IProduct;
  constructor(private basketService:BasketService
              ,private authService:AuthService
              ,private toastr:ToastrService) {}

  ngOnInit(): void {
  }

  addItemToBasket(){
    if(this.authService.loggedIn()){
      this.basketService.addItemToBasket(this.product)
    }else{
      this.toastr.warning('For shopping please go to Login')
    }
  }

}
