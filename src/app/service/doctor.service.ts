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
    return this.http.get<Doctor[]>(environment.baseUrl+"doctor");
  }

  getDoctorbyId(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(environment.baseUrl+"doctor/"+id)
  }

  getDoctorByDepartment(id:number):Observable<Doctor[]>{
    return this.http.get<Doctor[]>(environment.baseUrl+"doctor/GetDoctorByDepartment/"+id)
  }

  createDoctor(doctor:FormData){
    return this.http.post(environment.baseUrl + 'doctor',doctor);
  }

  editDoctor(id:number,doctor:FormData){
    return this.http.put(environment.baseUrl + 'doctor/' + id,doctor);

  }

  deleteDoctor(id:number){
    return this.http.delete(environment.baseUrl + 'doctor/' + id);
  }
}
