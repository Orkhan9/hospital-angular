import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../../../models/doctor';
import {DoctorService} from '../../../../service/doctor.service';

@Component({
  selector: 'app-main-doctor',
  templateUrl: './main-doctor.component.html',
  styleUrls: ['./main-doctor.component.css']
})
export class MainDoctorComponent implements OnInit {
  doctors:Doctor[];
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.getAllDoctors()
  }

  getAllDoctors(){
    this.doctorService.getAllDoctors()
      .subscribe(doctors=>{
      this.doctors=doctors,
        error=>console.log(error);
    })
  }


}
