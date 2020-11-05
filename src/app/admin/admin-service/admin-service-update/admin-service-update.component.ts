import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Service} from '../../../models/service';
import {ServiceService} from '../../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-service-update',
  templateUrl: './admin-service-update.component.html',
  styleUrls: ['./admin-service-update.component.css']
})
export class AdminServiceUpdateComponent implements OnInit {

  form: FormGroup;
  service:Service;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }
  constructor(private serviceService:ServiceService,private route:Router
    ,private activatedRoute:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getServiceById();
  }

  formUpdate(){
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      shortDesc:new FormControl('',[Validators.required]),
    });
  }

  getServiceById(){
    this.serviceService.getServiceById(+this.activatedRoute.snapshot.params.id)
      .subscribe(service=>{
        this.service=service,
          error=>console.log(error)
      })
  }



  onSubmit() {
    if(this.form.valid){
      let service=new Service();

      service.id=this.service.id;
      service.name=this.form.value.name;
      service.description=this.form.value.description;
      service.shortDesc=this.form.value.shortDesc;
      this.serviceService.editService(service).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/service']);
        this.toastr.success('Service is edited');
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
