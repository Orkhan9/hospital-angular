import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../../../service/blog.service';
import {Blog} from '../../../../../models/blog';
import {Comment} from '../../../../../models/comment';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../../../../service/comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppointmentService} from '../../../../../service/appointment.service';
import {ToastrService} from 'ngx-toastr';
import {Appointment} from '../../../../../models/appointment';

@Component({
  selector: 'app-main-blog-details',
  templateUrl: './main-blog-details.component.html',
  styleUrls: ['./main-blog-details.component.css']
})
export class MainBlogDetailsComponent implements OnInit {

  form: FormGroup;
  blog:Blog;
  comments:Comment[];
  constructor(private blogService:BlogService
              ,private activatedRoute:ActivatedRoute
              ,private commentService:CommentService
              ,private route:Router
              ,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBlogById()
    this.getCommentsByBlog()
    this.formCreate()
  }

  getBlogById(){
    this.blogService.getBlogbyId(+this.activatedRoute.snapshot.params.id)
      .subscribe(blog=>{
        this.blog=blog,
          error=>console.log(error)
      });
  }

  getCommentsByBlog() {
    this.commentService.getCommentsByBlog(+this.activatedRoute.snapshot.params.id)
      .subscribe(comments=> {
        this.comments =comments,
          error=>console.log(error)
      });
  }

  formCreate(){
    this.form = new FormGroup({
      context:new FormControl('',[Validators.required]),
    });
  }

  onSubmit() {
    if(this.form.valid){
      let comment=new Comment();
      comment.context=this.form.value.context;
      console.log(comment);
      this.commentService.createComment(comment).subscribe(x=> {
        console.log(x);
        this.route.navigate(['']);
        this.toastr.success('Comment is created');
      },error=>this.toastr.error(error));
    }
  }

  get _context(){
    return this.form.get('context');
  }
}
