import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {IProduct} from '../../models/product';
import {ProductService} from '../../service/product.service';
import {PaginatedResult, Pagination} from '../../models/pagination';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  pageNumber;
  pageSize=6;
  products:IProduct[];
  pagination:Pagination;
  constructor(private productService:ProductService
              ,private toastr:ToastrService
              ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProducts()
    // this.route.data.subscribe(data=>{
    //   this.products=data['product'].result;
    // })
  }


  pageChanged(event:any):void{
    this.pagination.currentPage=event.page;
  }

  getAllProducts(){
    this.productService.getAllProducts(this.pageNumber,this.pageSize)
      .subscribe(products=>{
        this.products=products.result;
        this.pagination=products.pagination;
        console.log(this.pagination);
      })
  }

  // getAllProducts2(){
  //   this.productService.getAllProducts(this.pagination.currentPage,this.pagination.itemPerPage)
  //     .subscribe((response:PaginatedResult<IProduct[]>)=>{
  //       this.products=response.result;
  //       this.pagination=response.pagination;
  //     },
  //       error => this.toastr.error(error));
  // }

}
