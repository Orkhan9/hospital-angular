import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Appointment} from '../../models/appointment';
import {AppointmentService} from '../../service/appointment.service';
import {Department} from '../../models/department';

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.component.html',
  styleUrls: ['./admin-appointment.component.css']
})
export class AdminAppointmentComponent implements OnInit {

  appointments:Appointment[];

  constructor(private appointmentService:AppointmentService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllAppointments();
  }


  getAllAppointments(){
    this.appointmentService.getAllAppointments()
      .subscribe(appointments=>{
        this.appointments=appointments,
          error=>console.log(error)
      })
  }

  onDelete(appointment:Appointment) {
    this.appointmentService.deleteAppointment(appointment.id)
      .subscribe(x=>{
        this.getAllAppointments();
        this.toastr.warning(appointment.name + ' is deleted');
      },error => console.log(error))
  }

}
