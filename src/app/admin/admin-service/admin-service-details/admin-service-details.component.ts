import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceService} from '../../../service/service.service';
import {Service} from '../../../models/service';

@Component({
  selector: 'app-admin-service-details',
  templateUrl: './admin-service-details.component.html',
  styleUrls: ['./admin-service-details.component.css']
})
export class AdminServiceDetailsComponent implements OnInit {

  constructor(private serviceService:ServiceService,private activatedRoute:ActivatedRoute) { }
  service:Service;
  ngOnInit(): void {
    this.getServiceById();
  }

  getServiceById(){
    this.serviceService.getServiceById(+this.activatedRoute.snapshot.params.id)
      .subscribe(service=>{
        this.service=service,
          error=>console.log(error)
      })
  }

}
