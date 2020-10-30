import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../../models/doctor';
import {DoctorService} from '../../../service/doctor.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-doctor-details',
  templateUrl: './admin-doctor-details.component.html',
  styleUrls: ['./admin-doctor-details.component.css']
})
export class AdminDoctorDetailsComponent implements OnInit {

  constructor(private doctorService:DoctorService,private activatedRoute:ActivatedRoute) { }
  doctor:Doctor;
  ngOnInit(): void {
    this.getDoctorbyId();
  }

  getDoctorbyId(){
    this.doctorService.getDoctorbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(doctor=>{
        this.doctor=doctor,
          error=>console.log(error)
      })
  }
}
