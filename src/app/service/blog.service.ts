import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Blog} from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAllDepartments():Observable<Blog[]>{
    return  this.http.get<Blog[]>(environment.baseUrl+'blog')
  }
}
