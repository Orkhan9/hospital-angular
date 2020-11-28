import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {IProduct} from '../../models/product';
import {ProductService} from '../../service/product.service';
import {PaginatedResult, Pagination} from '../../models/pagination';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  pageNumber;
  pageSize=6;
  products:IProduct[];
  pagination:Pagination;
  constructor(private productService:ProductService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts(this.pageNumber,this.pageSize)
      .subscribe(products=>{
        this.products=products.result;
        this.pagination=products.pagination;
        console.log(this.pagination);
      })
  }


  onDelete(product:IProduct) {
    this.productService.deleteProduct(product.id)
      .subscribe(x=>{
        this.getAllProducts();
        this.toastr.warning(product.name + ' is deleted');
      },error => console.log(error))
  }

}
