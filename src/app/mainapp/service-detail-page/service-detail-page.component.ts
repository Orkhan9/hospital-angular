import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-detail-page',
  templateUrl: './service-detail-page.component.html',
  styleUrls: ['./service-detail-page.component.css']
})
export class ServiceDetailPageComponent implements OnInit {
service:Service;
  constructor(private serviceService:ServiceService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.getServiceById(params["id"])
    })
  }

  getServiceById(id){
    this.serviceService.getService(id).subscribe(service=>this.service=service)
  }

}
