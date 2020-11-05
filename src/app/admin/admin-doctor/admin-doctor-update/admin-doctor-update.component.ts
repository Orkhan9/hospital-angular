import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {Doctor} from '../../../models/doctor';
import {DoctorService} from '../../../service/doctor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';

@Component({
  selector: 'app-admin-doctor-update',
  templateUrl: './admin-doctor-update.component.html',
  styleUrls: ['./admin-doctor-update.component.css']
})
export class AdminDoctorUpdateComponent implements OnInit {
  form: FormGroup;
  departments:Department[];
  doctor:Doctor;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }
  constructor(private doctorService:DoctorService,private route:Router
    ,private activatedRoute:ActivatedRoute,private toastr: ToastrService
    ,private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getDepartments();
    this.getDoctorbyId();
  }

  formUpdate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      profession:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      facebook:new FormControl('',[Validators.required]),
      departmentId:new FormControl('',[Validators.required])
    });
  }

  getDoctorbyId(){
    this.doctorService.getDoctorbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(doctor=>{
        this.doctor=doctor,
          error=>console.log(error)
      })
  }

  getDepartments(){
    this.departmentService.getAllDepartments()
      .subscribe(departments=>{
        this.departments=departments,
          error=>console.log(error)
      })
  }

  onSubmit() {
    if(this.form.valid){
      let doctor=new Doctor();

      doctor.id=this.doctor.id,
      doctor.name=this.form.value.name;
      doctor.profession=this.form.value.profession;
      doctor.description=this.form.value.description;
      doctor.facebook=this.form.value.facebook;
      doctor.departmentId=+this.form.value.departmentId;

      this.doctorService.editDoctor(doctor).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/doctor']);
        this.toastr.success('Doctor is edited');
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


}
