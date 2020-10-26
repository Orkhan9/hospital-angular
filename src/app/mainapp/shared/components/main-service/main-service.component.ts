import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../models/service';
import {ServiceService} from '../../../../service/service.service';

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent implements OnInit {
  services:Service[]=[];
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.getAllservice()
  }

  getAllservice(){
    this.serviceService.getAllServices().subscribe(service=>{
      this.services=service
    })
  }
}
