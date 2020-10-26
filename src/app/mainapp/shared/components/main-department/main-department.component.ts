import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../../../../service/department.service';
import {Department} from '../../../../models/department';

@Component({
  selector: 'app-main-department',
  templateUrl: './main-department.component.html',
  styleUrls: ['./main-department.component.css']
})
export class MainDepartmentComponent implements OnInit {
departments:Department[];
  constructor(private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.getAllDepartments()
  }

  getAllDepartments(){
    this.departmentService.getAllDepartments().subscribe(departments=>{
      this.departments=departments
      // console.log(this.doctorService);
    })
  }
}
