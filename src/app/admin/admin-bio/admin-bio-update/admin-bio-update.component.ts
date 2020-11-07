import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {About} from '../../../models/about';
import {AboutService} from '../../../service/about.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Bio} from '../../../models/bio';
import {BioService} from '../../../service/bio.service';

@Component({
  selector: 'app-admin-bio-update',
  templateUrl: './admin-bio-update.component.html',
  styleUrls: ['./admin-bio-update.component.css']
})
export class AdminBioUpdateComponent implements OnInit {

  form: FormGroup;
  bio:Bio;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }
  constructor(private bioService:BioService,private route:Router
    ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getBio();
  }

  formUpdate(){
    this.form = new FormGroup({
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      facebook:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required])
    });
  }

  getBio(){
    this.bioService.getBio()
      .subscribe(bio=>{
        this.bio=bio,
          error=>console.log(error)
      })
  }


  onSubmit() {
    if(this.form.valid){
      let bio=new Bio();

      bio.id=this.bio.id;
      bio.phone=this.form.value.phone;
      bio.email=this.form.value.email;
      bio.facebook=this.form.value.facebook;
      bio.address=this.form.value.address;
      bio.logo;
      this.bioService.editBio(bio).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/bio']);
        this.toastr.success('Bio is edited');
      },error=>this.toastr.error(error));

    }
  }

  get _phone(){
    return this.form.get('phone');
  }

  get _email(){
    return this.form.get('email');
  }

  get _facebook(){
    return this.form.get('facebook');
  }

  get _address(){
    return this.form.get('address');
  }
}
