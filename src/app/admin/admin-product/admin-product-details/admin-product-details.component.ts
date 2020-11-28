import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {IProduct} from '../../../models/product';

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }
  product:IProduct;
  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    this.productService.getProductbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(product=>{
        this.product=product,
          error=>console.log(error)
      })
  }
}
