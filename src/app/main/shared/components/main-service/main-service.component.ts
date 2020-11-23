import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../models/service';
import {ServiceService} from '../../../../service/service.service';
import {log} from 'util';

@Component({
  selector: 'app-main-service',
  templateUrl: './main-service.component.html',
  styleUrls: ['./main-service.component.css']
})
export class MainServiceComponent implements OnInit {
  services:Service[]=[];
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.getAllServices()
  }

  getAllServices(){
    this.serviceService.getAllServices()
      .subscribe(services=>{
        this.services=services,
          error=>console.log(error);
      })
  }

}
