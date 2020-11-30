import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Appointment} from '../models/appointment';
import {Observable} from 'rxjs';
import {Blog} from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  getAllAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(environment.baseUrl+'appointment')
  }

  getAppointmentById(id:number):Observable<Appointment>{
    return this.http.get<Appointment>(environment.baseUrl+"appointment/"+id)
  }

  createAppointment(appointment:Appointment){
    return this.http.post(environment.baseUrl + 'appointment',appointment);
  }

  deleteAppointment(id:number){
    return this.http.delete(environment.baseUrl + 'appointment/' + id);
  }
}
