import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  // getAllComments():Observable<Comment[]>{
  //   return  this.http.get<Comment[]>(environment.baseUrl+'comment')
  // }

  getCommentsByBlog(id:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(environment.baseUrl+"comment/GetCommentsByBlog/"+id)
  }

  createComment(comment:Comment){
    return this.http.post(environment.baseUrl + 'comment',comment);
  }

  deleteComment(id:number){
    return this.http.delete(environment.baseUrl + 'comment/' + id);
  }
}
