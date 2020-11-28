import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IProduct} from '../models/product';
import {PaginatedResult} from '../models/pagination';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts(page?,itemPerPage?):Observable<PaginatedResult<IProduct[]>> {
    const paginatedResult:PaginatedResult<IProduct[]>=new PaginatedResult<IProduct[]>();
    let params=new HttpParams();
    if(page!=null && itemPerPage!=null){
      params=params.append('pageNumber',page);
      params=params.append('pageSize',itemPerPage);
    }
    return this.http.get<IProduct[]>(environment.baseUrl+"product",{observe:'response',params})
      .pipe(
        map(response=>{
          paginatedResult.result=response.body;
          if(response.headers.get('Pagination')!=null){
            paginatedResult.pagination=JSON.parse(response.headers.get('Pagination'));
          };
          return paginatedResult;
        })
      );
  }

  getProductbyId(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(environment.baseUrl+"product/"+id)
  }

  createProduct(product:FormData){
    return this.http.post(environment.baseUrl + 'product',product);
  }

  editProduct(id:number,product:FormData){
    return this.http.put(environment.baseUrl + 'product/' + id,product);
  }

  deleteProduct(id:number){
    return this.http.delete(environment.baseUrl + 'product/' + id);
  }
}
