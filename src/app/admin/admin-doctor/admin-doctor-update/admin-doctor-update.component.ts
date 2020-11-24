import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  doctor:Doctor;

  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }

  constructor(private doctorService:DoctorService,
              private route:Router,
              private activatedRoute:ActivatedRoute,
              private toastr: ToastrService,
              private fb:FormBuilder,
              private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getDepartments();
    this.getDoctorById();
  }

  formUpdate(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      profession: ['',[Validators.required]],
      description: ['',[Validators.required]],
      facebook: ['',[Validators.required]],
      departmentId: ['',[Validators.required]]
    });
  }

  getDoctorById(){
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
      // @ts-ignore
      this.formData.append('Id', +this.activatedRoute.snapshot.params.id);
      this.formData.append('Name', this._name.value);
      this.formData.append('Profession', this._profession.value);
      this.formData.append('Description', this._description.value);
      this.formData.append('Facebook', this._facebook.value);
      this.formData.append('DepartmentId', this._departmentId.value);
      this.doctorService.editDoctor(this.doctor.id,this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/doctor']);
        this.toastr.success('Doctor is updated');
      },error=>this.toastr.error(error));
    }
  }

  handleFileInput(event: Event) {
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Photo', event.target.files[0]);
    }
  }



}
