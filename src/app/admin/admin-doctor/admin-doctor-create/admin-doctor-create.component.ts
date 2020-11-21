import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../../service/doctor.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {Doctor} from '../../../models/doctor';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';
import {HttpClient} from '@angular/common/http';
import {FileService} from '../../../service/file.service';

@Component({
  selector: 'app-admin-doctor-create',
  templateUrl: './admin-doctor-create.component.html',
  styleUrls: ['./admin-doctor-create.component.css']
})
export class AdminDoctorCreateComponent implements OnInit {
  form: FormGroup;
  departments:Department[];
  photo:string;
  constructor(private doctorService:DoctorService,private route:Router
              ,private toastr: ToastrService,private departmentService:DepartmentService
              ,private http:HttpClient
              ,private fileService:FileService) { }

  ngOnInit(): void {
    this.formCreate();
    this.getDepartments();

  }

  formCreate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      profession:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      facebook:new FormControl('',[Validators.required]),
      departmentId:new FormControl('',[Validators.required])
    });
  }


  getDepartments(){
    this.departmentService.getAllDepartments()
      .subscribe(departments=>{
        this.departments=departments,
          error=>console.log(error)
      })
  }

  fileToUpload: File = null;

  handleFileInput(event) {
    this.fileToUpload=event.target.files[0];
    this.fileService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    if(this.form.valid){

      let doctor=new Doctor();
      doctor.name=this.form.value.name;
      doctor.profession=this.form.value.profession;
      doctor.description=this.form.value.description;
      doctor.facebook=this.form.value.facebook;
      doctor.photoUrl=this.photo;
      doctor.departmentId=+this.form.value.departmentId;
      this.doctorService.createDoctor(doctor).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/doctor']);
        this.toastr.success('Doctor is created');
      },error=>this.toastr.error(error));
    }
  }

  get _name(){
    return this.form.get('name');
  }

  get _profession(){
    return this.form.get('profession');
  }

  get _description(){
    return this.form.get('description');
  }

  get _facebook(){
    return this.form.get('facebook');
  }

  get _departmentId(){
    return this.form.get('departmentId');
  }

  get _photoUrl(){
    return this.form.get('photoUrl');
  }


}

//fileupload base64
// if(event.target.files){
//   const formData = new FormData();
//   formData.append('file[]',event.target.files[0]);
//   let reader=new FileReader();
//   let file=event.target.files[0];
//   reader.readAsDataURL(file);
//   reader.onload=()=>{
//     this.photo=(<string>reader.result).split(',')[1];
//   }
//   this.fileService.createFile(file).subscribe(x=> {
//     console.log(x);
//   },error=>this.toastr.error(error));
//   console.log(file);
// }
