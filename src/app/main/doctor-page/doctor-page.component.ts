import { Component, OnInit } from '@angular/core';
import {PaginatedResult, Pagination} from '../../models/pagination';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../../models/doctor';
import {DoctorService} from '../../service/doctor.service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  doctors:Doctor[];
  pagination:Pagination;
  constructor(private doctorService:DoctorService
    ,private toastr:ToastrService
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.doctors=data['doctors'].result;
      this.pagination=data['doctors'].pagination;
    })
  }

  pageChanged(event:any):void{
    this.pagination.currentPage=event.page;
    this.getAllPaginatedDoctors()
  }

  getAllPaginatedDoctors(){
    this.doctorService.getAllPaginatedDoctors(this.pagination.currentPage,this.pagination.itemsPerPage)
      .subscribe((res:PaginatedResult<Doctor[]>)=>{
        this.doctors=res.result;
        this.pagination=res.pagination;
      },error => this.toastr.error('error'))
  }
}
