import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {BasketService} from '../../service/basket.service';
import {AuthService} from '../../service/auth.service';
import {ToastrService} from 'ngx-toastr';
import {IProduct} from '../../models/product';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  constructor(private productService:ProductService
    ,private activatedRoute:ActivatedRoute
    ,private basketService:BasketService
    ,private authService:AuthService
    ,private toastrService:ToastrService) { }
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
    if(this.authService.loggedIn()){
      this.basketService.addItemToBasket(this.product)
    }else{
      this.toastrService.warning('For shopping please go to Login')
    }
  }

}
