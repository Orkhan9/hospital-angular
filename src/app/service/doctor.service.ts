import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Doctor} from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(environment.baseUrl+"/doctor");
  }
  getDoctor(id?){
    return this.http.get<Doctor>(environment.baseUrl+"/doctor/"+id)
  }
}
