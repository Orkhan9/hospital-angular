import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Bio} from '../../../models/bio';
import {BioService} from '../../../service/bio.service';

@Component({
  selector: 'app-admin-bio-update',
  templateUrl: './admin-bio-update.component.html',
  styleUrls: ['./admin-bio-update.component.css']
})
export class AdminBioUpdateComponent implements OnInit {

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

  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;
  bio:Bio;

  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }

  constructor(private bioService:BioService,
              private route:Router,
              private toastr: ToastrService,
              private fb:FormBuilder,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getBio();
  }

  formUpdate(){
    this.form = this.fb.group({
      phone: ['',[Validators.required]],
      email: ['',[Validators.required]],
      facebook: ['',[Validators.required]],
      address: ['',[Validators.required]]
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
      // @ts-ignore
      this.formData.append('Id', +this.activatedRoute.snapshot.params.id);
      this.formData.append('Phone', this._phone.value);
      this.formData.append('Email', this._email.value);
      this.formData.append('Facebook', this._facebook.value);
      this.formData.append('Address', this._address.value);
      this.bioService.editBio(this.bio.id,this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/bio']);
        this.toastr.success('Bio is edited');
      },error=>this.toastr.error(error));
     }
  }

  fileInput(event: Event) {
    // @ts-ignore
    if (event.target.files[0]){
      // @ts-ignore
      this.formData.append('Logo', event.target.files[0]);
    }
  }
}
