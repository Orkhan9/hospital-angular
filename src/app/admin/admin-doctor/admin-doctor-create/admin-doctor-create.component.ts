import {Component, OnInit, ViewChild} from '@angular/core';
import {DoctorService} from '../../../service/doctor.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-doctor-create',
  templateUrl: './admin-doctor-create.component.html',
  styleUrls: ['./admin-doctor-create.component.css']
})
export class AdminDoctorCreateComponent implements OnInit {


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

  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;
  departments:Department[];

  constructor(private doctorService:DoctorService,
              private route:Router,
              private toastr: ToastrService,
              private departmentService:DepartmentService,
              private http:HttpClient,
              private fb: FormBuilder
              ) { }

  ngOnInit(): void {
    this.formCreate();
    this.getDepartments();
  }

  formCreate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      profession: ['',[Validators.required]],
      description: ['',[Validators.required]],
      facebook: ['',[Validators.required]],
      departmentId: ['',[Validators.required]]
    });
  }


  getDepartments(){
    this.departmentService.getAllDepartments()
      .subscribe(departments=>{
        this.departments=departments,
          error=>console.log(error)
      })
  }


  onSubmit() {
    if(this.file.nativeElement.files.length < 1){
      this.toastr.error('Photo is required,please select photo');
      return;
    }
    if(this.form.valid){
      this.formData.append('Name', this._name.value);
      this.formData.append('Profession', this._profession.value);
      this.formData.append('Description', this._description.value);
      this.formData.append('Facebook', this._facebook.value);
      this.formData.append('DepartmentId', this._departmentId.value);
      this.doctorService.createDoctor(this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/doctor']);
        this.toastr.success('Doctor is created');
      },error=>this.toastr.error(error));
    }
  }


  fileInput(event: Event) {
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Photo', event.target.files[0]);
    }
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
