import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {About} from '../../../models/about';
import {AboutService} from '../../../service/about.service';

@Component({
  selector: 'app-admin-about-update',
  templateUrl: './admin-about-update.component.html',
  styleUrls: ['./admin-about-update.component.css']
})
export class AdminAboutUpdateComponent implements OnInit {

  form: FormGroup;
  about:About;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }
  constructor(private aboutService:AboutService,private route:Router
    ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getAbout();
  }

  formUpdate(){
    this.form = new FormGroup({
      title:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    });
  }

  getAbout(){
    this.aboutService.getAbout()
      .subscribe(about=>{
        this.about=about,
          error=>console.log(error)
      })
  }


  onSubmit() {
    if(this.form.valid){
      let about=new About();

      about.id=this.about.id;
      about.title=this.form.value.title;
      about.description=this.form.value.description;
      this.aboutService.editAbout(about).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/about']);
        this.toastr.success('About is edited');
      },error=>this.toastr.error(error));

    }
  }

  get _title(){
    return this.form.get('title');
  }

  get _description(){
    return this.form.get('description');
  }

}
