import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Appointment} from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  createAppointment(appointment:Appointment){
    return this.http.post(environment.baseUrl + 'appointment',appointment);
  }
}
