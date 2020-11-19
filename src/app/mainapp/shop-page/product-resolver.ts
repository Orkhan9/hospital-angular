import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {IProduct} from '../../models/product';
import {Injectable} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ToastrService} from 'ngx-toastr';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()

export class ProductResolver implements Resolve<IProduct[]>{
  pageNumber=1;
  pageSize=5;

  constructor(private productService:ProductService
              ,private router:Router
              ,private toastrService:ToastrService) {
  }

  resolve(route:ActivatedRouteSnapshot):Observable<IProduct[]>{
    return this.productService.getAllProducts(this.pageNumber,this.pageSize)
      .pipe(
        catchError(err => {
          this.toastrService.error('data is not loaded');
          return of(null);
        })
      )
  }
}
