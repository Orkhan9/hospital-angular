import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {About} from '../models/about';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Bio} from '../models/bio';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private http:HttpClient) { }

  getBio():Observable<Bio>{
    return this.http.get<Bio>(environment.baseUrl+'bio')
  }

  editBio(id:number,bio:FormData){
    return this.http.put(environment.baseUrl + 'bio/' + id,bio);
  }
}
