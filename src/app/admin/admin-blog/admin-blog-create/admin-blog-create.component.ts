import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {BlogService} from '../../../service/blog.service';
import {Blog} from '../../../models/blog';

@Component({
  selector: 'app-admin-blog-create',
  templateUrl: './admin-blog-create.component.html',
  styleUrls: ['./admin-blog-create.component.css']
})
export class AdminBlogCreateComponent implements OnInit {

  form: FormGroup;
  constructor(private blogService:BlogService,private route:Router
    ,private toastr: ToastrService
    ,private http:HttpClient) { }

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(){
    this.form = new FormGroup({
      title:new FormControl('',[Validators.required]),
      topic:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    if(this.form.valid){

      let blog=new Blog();
      blog.title=this.form.value.title;
      blog.topic=this.form.value.topic;
      blog.description=this.form.value.description;
      this.blogService.createBlog(blog).subscribe(x=> {
        console.log(x);
        this.route.navigate(['/admin/blog']);
        this.toastr.success('Blog is created');
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
