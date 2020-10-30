import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../service/doctor.service';
import {Doctor} from '../../models/doctor';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.css']
})
export class AdminDoctorComponent implements OnInit {
  doctors:Doctor[];

  constructor(private doctorService:DoctorService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }


  getAllDoctors(){
    this.doctorService.getAllDoctors()
      .subscribe(doctors=>{
        this.doctors=doctors,
          error=>console.log(error)
      })
  }


  onDelete(doctor:Doctor) {
    this.doctorService.deleteDoctor(doctor.id)
      .subscribe(x=>{
        this.getAllDoctors();
        this.toastr.warning(doctor.name + ' is deleted');
      },error => console.log(error))
  }
}
