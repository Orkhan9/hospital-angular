import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Doctor} from '../models/doctor';
import {Department} from '../models/department';

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

  getAllDepartments(){
    return this.http.get<Department[]>(environment.baseUrl + 'doctor/departments')
  }

  // getAllDepartments():Observable<Department[]>{
  //   return  this.http.get<Department[]>(environment.baseUrl+'department')
  // }

  createDoctor(doctor:Doctor){
    return this.http.post(environment.baseUrl + 'doctor',doctor);
  }

  editDoctor(doctor:Doctor){
    return this.http.put(environment.baseUrl + 'doctor/' + doctor.id,doctor);

  }

  deleteDoctor(id:number){
    return this.http.delete(environment.baseUrl + 'doctor/' + id);
  }
}
