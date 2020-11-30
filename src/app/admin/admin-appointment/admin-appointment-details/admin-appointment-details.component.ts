import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppointmentService} from '../../../service/appointment.service';
import {Appointment} from '../../../models/appointment';

@Component({
  selector: 'app-admin-appointment-details',
  templateUrl: './admin-appointment-details.component.html',
  styleUrls: ['./admin-appointment-details.component.css']
})
export class AdminAppointmentDetailsComponent implements OnInit {

  constructor(private appointmentService:AppointmentService,private activatedRoute:ActivatedRoute) { }
  appointment:Appointment;
  ngOnInit(): void {
    this.getAppointmentById();
  }

  getAppointmentById(){
    this.appointmentService.getAppointmentById(+this.activatedRoute.snapshot.params.id)
      .subscribe(appointment=>{
        this.appointment=appointment,
          error=>console.log(error)
      })
  }

}
