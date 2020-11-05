import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {DoctorService} from '../../../service/doctor.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';
import {HttpClient} from '@angular/common/http';
import {Doctor} from '../../../models/doctor';
import {ServiceService} from '../../../service/service.service';
import {Service} from '../../../models/service';

@Component({
  selector: 'app-admin-service-create',
  templateUrl: './admin-service-create.component.html',
  styleUrls: ['./admin-service-create.component.css']
})
export class AdminServiceCreateComponent implements OnInit {

  form: FormGroup;
  constructor(private route:Router
    ,private toastr: ToastrService,private serviceService:ServiceService
    ,private http:HttpClient) { }

  ngOnInit(): void {
    this.formCreate();

  }

  formCreate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      shortDesc:new FormControl('',[Validators.required])
    });
  }

  onSubmit() {
    if(this.form.valid){

      let service=new Service();
      service.name=this.form.value.name;
      service.description=this.form.value.description;
      service.shortDesc=this.form.value.shortDesc;

      console.log(service);
      this.serviceService.createService(service).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/service']);
        this.toastr.success('Service is created');
      },error=>this.toastr.error(error));
    }
  }

  get _name(){
    return this.form.get('name');
  }

  get _description(){
    return this.form.get('description');
  }

  get _shortDesc(){
    return this.form.get('shortDesc');
  }

}
