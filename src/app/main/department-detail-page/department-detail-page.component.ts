import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../service/doctor.service';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../../models/doctor';
import {DepartmentService} from '../../service/department.service';
import {Department} from '../../models/department';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-department-detail-page',
  templateUrl: './department-detail-page.component.html',
  styleUrls: ['./department-detail-page.component.css']
})
export class DepartmentDetailPageComponent implements OnInit {

  constructor(private departmentService:DepartmentService,
              private activatedRoute:ActivatedRoute,
              private toastr:ToastrService) { }
  department:Department;
  ngOnInit(): void {
    this.getDepartmentById();
  }

  getDepartmentById(){
    this.departmentService.getDepartmentbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(department=>{
        this.department=department;
      },
      error => {this.toastr.error(error)})
  }

}
