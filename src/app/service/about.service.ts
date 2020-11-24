import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {About} from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  getAbout():Observable<About>{
    return this.http.get<About>(environment.baseUrl+'about')
  }

  editAbout(id:number,about:FormData){
    return this.http.put(environment.baseUrl + 'about/' + id,about);
  }
}
