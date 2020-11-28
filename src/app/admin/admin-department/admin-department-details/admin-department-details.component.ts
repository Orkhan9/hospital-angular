import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../../service/department.service';
import {ActivatedRoute} from '@angular/router';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-admin-department-details',
  templateUrl: './admin-department-details.component.html',
  styleUrls: ['./admin-department-details.component.css']
})
export class AdminDepartmentDetailsComponent implements OnInit {

  constructor(private departmentService:DepartmentService,private activatedRoute:ActivatedRoute) { }
  department:Department;
  ngOnInit(): void {
    this.getDepartmentById();
  }

  getDepartmentById(){
    this.departmentService.getDepartmentbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(department=>{
        this.department=department,
          error=>console.log(error)
      })
  }

}
