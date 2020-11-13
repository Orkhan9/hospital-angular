import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.baseUrl+"product");
  }

  getProductbyId(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(environment.baseUrl+"product/"+id)
  }
}
