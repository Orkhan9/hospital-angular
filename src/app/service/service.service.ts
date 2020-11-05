import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../models/service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Doctor} from '../models/doctor';

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

  createService(service:Service){
    return this.http.post(environment.baseUrl + 'service',service);
  }

  editService(service:Service){
    return this.http.put(environment.baseUrl + 'service/' + service.id,service);

  }

  deleteService(id:number){
    return this.http.delete(environment.baseUrl + 'service/' + id);
  }

  getServiceById(id:number):Observable<Service>{
    return this.http.get<Service>(environment.baseUrl+"service/"+id)
  }
}
