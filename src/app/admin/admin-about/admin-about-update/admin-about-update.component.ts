import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {About} from '../../../models/about';
import {AboutService} from '../../../service/about.service';

@Component({
  selector: 'app-admin-about-update',
  templateUrl: './admin-about-update.component.html',
  styleUrls: ['./admin-about-update.component.css']
})
export class AdminAboutUpdateComponent implements OnInit {

  get _title(){
    return this.form.get('title');
  }

  get _description(){
    return this.form.get('description');
  }

  @ViewChild('file') file;
  formData: FormData = new FormData();
  form: FormGroup;
  about:About;

  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }

  constructor(private aboutService:AboutService,
              private route:Router,
              private toastr: ToastrService,
              private fb:FormBuilder,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getAbout();
  }

  formUpdate(){
    this.form = this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]]
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
      // @ts-ignore
      this.formData.append('Id', +this.activatedRoute.snapshot.params.id);
      this.formData.append('Title', this._title.value);
      this.formData.append('Description', this._description.value);
      this.aboutService.editAbout(this.about.id,this.formData).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/about']);
        this.toastr.success('About is edited');
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
