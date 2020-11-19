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

  getAllBlogs():Observable<Blog[]>{
    return  this.http.get<Blog[]>(environment.baseUrl+'blog')
  }

  getBlogById(id:number):Observable<Blog>{
    return this.http.get<Blog>(environment.baseUrl+"blog/"+id)
  }

  createBlog(blog:Blog){
    return this.http.post(environment.baseUrl + 'blog',blog);
  }

  editBlog(blog:Blog){
    return this.http.put(environment.baseUrl + 'blog/' + blog.id,blog);

  }

  deleteBlog(id:number){
    return this.http.delete(environment.baseUrl + 'blog/' + id);
  }
}
