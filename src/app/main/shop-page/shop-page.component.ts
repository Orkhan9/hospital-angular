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

  products:IProduct[];
  pagination:Pagination;
  constructor(private productService:ProductService
              ,private toastr:ToastrService
              ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.products=data['products'].result;
      this.pagination=data['products'].pagination;
    })
  }

  pageChanged(event:any):void{
    this.pagination.currentPage=event.page;
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProducts(this.pagination.currentPage,this.pagination.itemsPerPage)
      .subscribe((res:PaginatedResult<IProduct[]>)=>{
        this.products=res.result;
        this.pagination=res.pagination;

      })
  }

}
