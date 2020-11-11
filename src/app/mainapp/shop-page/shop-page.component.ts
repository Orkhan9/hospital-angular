import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../models/doctor';
import {DoctorService} from '../../service/doctor.service';
import {ToastrService} from 'ngx-toastr';
import {IProduct} from '../../models/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  products:IProduct[];

  constructor(private productService:ProductService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(products=>{
      this.products=products,
        error=>console.log(error);
    })
  }

}
