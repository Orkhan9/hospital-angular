import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../models/department';
import {Doctor} from '../../../models/doctor';
import {DoctorService} from '../../../service/doctor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DepartmentService} from '../../../service/department.service';
import {Blog} from '../../../models/blog';
import {BlogService} from '../../../service/blog.service';

@Component({
  selector: 'app-admin-blog-update',
  templateUrl: './admin-blog-update.component.html',
  styleUrls: ['./admin-blog-update.component.css']
})
export class AdminBlogUpdateComponent implements OnInit {

  form: FormGroup;
  blog:Blog;
  @HostListener('window:beforeunload',['$event'])
  unloadNotification($event:any, isSub:boolean){
    if (this.form.dirty){
      $event.returnValue=true;
    }
  }
  constructor(private blogService:BlogService,private route:Router
    ,private activatedRoute:ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formUpdate();
    this.getBlogById();
  }

  formUpdate(){
    this.form = new FormGroup({
      title:new FormControl('',[Validators.required]),
      topic:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required])
    });
  }

  getBlogById(){
    this.blogService.getBlogbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(blog=>{
        this.blog=blog,
          error=>console.log(error)
      })
  }

  onSubmit() {
    if(this.form.valid){
      let blog=new Blog();

      blog.id=this.blog.id,
      blog.title=this.form.value.title;
      blog.topic=this.form.value.topic;
      blog.description=this.form.value.description;

      this.blogService.editBlog(blog).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/blog']);
        this.toastr.success('Blog is edited');
      },error=>this.toastr.error(error));

    }
  }

  get _title(){
    return this.form.get('title');
  }

  get _topic(){
    return this.form.get('topic');
  }

  get _description(){
    return this.form.get('description');
  }

}
