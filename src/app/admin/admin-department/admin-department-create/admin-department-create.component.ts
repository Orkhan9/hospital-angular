import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';

@Component({
  selector: 'app-admin-department-create',
  templateUrl: './admin-department-create.component.html',
  styleUrls: ['./admin-department-create.component.css']
})
export class AdminDepartmentCreateComponent implements OnInit {

  form: FormGroup;
  constructor(private departmentService:DepartmentService,private route:Router
    ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
    });
  }



  // selectFile(event) {
  //   if(event.target.files.length>0){
  //     this.file=event.target.files
  //     //this.http.post("https://localhost:5001/api/fileupload",this.file).subscribe(x=>console.log(x))
  //   }
  // }

  onSubmit() {
    if(this.form.valid){

      let department=new Department();
      department.name=this.form.value.name;
      department.description=this.form.value.description;
      this.departmentService.createDepartment(department).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/department']);
        this.toastr.success('Department is created');
      },error=>this.toastr.error(error));
    }
  }

  get _name(){
    return this.form.get('name');
  }

  get _description(){
    return this.form.get('description');
  }
}
