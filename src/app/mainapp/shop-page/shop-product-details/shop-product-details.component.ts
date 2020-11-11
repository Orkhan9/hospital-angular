import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {IProduct} from '../../../models/product';
import {BasketService} from '../../../service/basket.service';

@Component({
  selector: 'app-shop-product-details',
  templateUrl: './shop-product-details.component.html',
  styleUrls: ['./shop-product-details.component.css']
})
export class ShopProductDetailsComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute
  ,private basketService:BasketService) { }
  product:IProduct;
  ngOnInit(): void {
    this.getProductbyId();
  }

  getProductbyId(){
    this.productService.getProductbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(product=>{
        this.product=product,
          error=>console.log(error)
      })
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product)
    console.log(this.product);
  }

}
