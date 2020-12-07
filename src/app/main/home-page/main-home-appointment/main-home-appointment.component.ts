import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Doctor} from '../../../models/doctor';
import {Appointment} from '../../../models/appointment';
import {AppointmentService} from '../../../service/appointment.service';
import {DoctorService} from '../../../service/doctor.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-main-home-appointment',
  templateUrl: './main-home-appointment.component.html',
  styleUrls: ['./main-home-appointment.component.css']
})
export class MainHomeAppointmentComponent implements OnInit {
  form: FormGroup;
  departments:Department[];
  doctors:Doctor[];


  constructor(private appointmentService:AppointmentService,private route:Router
    ,private toastr: ToastrService,private departmentService:DepartmentService,private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.formCreate();
    this.getAllDepartments();
    //this.getDoctorsByDepartment()
  }

  formCreate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      message:new FormControl('',[Validators.required]),
      doctorId:new FormControl('',[Validators.required])
    });
  }

  onSubmit() {
    if(this.form.valid){
      let appointment=new Appointment();
      appointment.name=this.form.value.name;
      appointment.email=this.form.value.email;
      appointment.phone=this.form.value.phone;
      appointment.date=this.form.value.date;
      appointment.message=this.form.value.message;
      appointment.doctorId=+this.form.value.doctorId;
      console.log(appointment);
      this.appointmentService.createAppointment(appointment).subscribe(x=> {
        console.log(x);
        this.toastr.success('Appointment is created');
        this.form.reset();
      },error=>this.toastr.error(error));
    }
  }

  getAllDepartments(){
    this.departmentService.getAllDepartments()
      .subscribe(departments=>{
      this.departments=departments,
        error=>console.log(error)
    })
  }

  getDoctorsByDepartment(event) {
    console.log(event.target.value);
    this.doctorService.getDoctorByDepartment(event.target.value)
      .subscribe(doctors=> {
        this.doctors =doctors
      });
  }


  get _name(){
    return this.form.get('name');
  }

  get _email(){
    return this.form.get('email');
  }

  get _phone(){
    return this.form.get('phone');
  }

  get _date(){
    return this.form.get('date');
  }

  get _message(){
    return this.form.get('message');
  }

  get _doctor(){
    return this.form.get('doctorId');
  }


}
