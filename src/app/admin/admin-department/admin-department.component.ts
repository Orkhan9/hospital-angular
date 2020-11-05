import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../models/doctor';
import {DoctorService} from '../../service/doctor.service';
import {ToastrService} from 'ngx-toastr';
import {Department} from '../../models/department';
import {DepartmentService} from '../../service/department.service';

@Component({
  selector: 'app-admin-department',
  templateUrl: './admin-department.component.html',
  styleUrls: ['./admin-department.component.css']
})
export class AdminDepartmentComponent implements OnInit {
  departments:Department[];

  constructor(private departmentService:DepartmentService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllDepartments();
  }


  getAllDepartments(){
    this.departmentService.getAllDepartments()
      .subscribe(departments=>{
        this.departments=departments,
          error=>console.log(error)
      })
  }


  onDelete(department:Department) {
    this.departmentService.deleteDepartment(department.id)
      .subscribe(x=>{
        this.getAllDepartments();
        this.toastr.warning(department.name + ' is deleted');
      },error => console.log(error))
  }

}
