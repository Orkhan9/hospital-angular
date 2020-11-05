import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../models/doctor';
import {DoctorService} from '../../service/doctor.service';
import {ToastrService} from 'ngx-toastr';
import {Service} from '../../models/service';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.css']
})
export class AdminServiceComponent implements OnInit {

  services:Service[];

  constructor(private serviceService:ServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllService();
  }


  getAllService(){
    this.serviceService.getAllServices()
      .subscribe(services=>{
        this.services=services,
          error=>console.log(error)
      })
  }


  onDelete(service:Service) {
    this.serviceService.deleteService(service.id)
      .subscribe(x=>{
        this.getAllService();
          this.toastr.warning(service.name + ' is deleted');
      },error => console.log(error))
  }

}
