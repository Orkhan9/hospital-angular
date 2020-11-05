import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';

@Component({
  selector: 'app-admin-department-update',
  templateUrl: './admin-department-update.component.html',
  styleUrls: ['./admin-department-update.component.css']
})
export class AdminDepartmentUpdateComponent implements OnInit {

  form: FormGroup;
  department:Department;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }
  constructor(private departmentService:DepartmentService,private route:Router
    ,private activatedRoute:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getDepartmentbyId();
  }

  formUpdate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    });
  }

  getDepartmentbyId(){
    this.departmentService.getDepartmentbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(department=>{
        this.department=department,
          error=>console.log(error)
      })
  }


  onSubmit() {
    if(this.form.valid){
      let department=new Department();

      department.id=this.department.id;
      department.name=this.form.value.name;
      department.description=this.form.value.description;
      this.departmentService.editDepartment(department).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/department']);
        this.toastr.success('Department is edited');
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
