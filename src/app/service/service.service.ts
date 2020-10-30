import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../models/service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  getAllServices():Observable<Service[]> {
    return this.http.get<Service[]>(environment.baseUrl+"service");
  }
  getService(id?){
    return this.http.get<Service>(environment.baseUrl+"service/"+id)
  }
}
