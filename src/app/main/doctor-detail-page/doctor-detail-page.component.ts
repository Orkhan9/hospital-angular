import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../service/doctor.service';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../../models/doctor';

@Component({
  selector: 'app-doctor-detail-page',
  templateUrl: './doctor-detail-page.component.html',
  styleUrls: ['./doctor-detail-page.component.css']
})
export class DoctorDetailPageComponent implements OnInit {

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
