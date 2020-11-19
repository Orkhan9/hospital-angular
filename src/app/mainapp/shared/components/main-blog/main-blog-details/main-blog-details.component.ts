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
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthService} from '../../../../../service/auth.service';

@Component({
  selector: 'app-main-blog-details',
  templateUrl: './main-blog-details.component.html',
  styleUrls: ['./main-blog-details.component.css']
})
export class MainBlogDetailsComponent implements OnInit {

  jwtHelper=new JwtHelperService();
  form: FormGroup;
  blog:Blog;
  comments:Comment[];
  id:number;
  constructor(private blogService:BlogService
              ,private activatedRoute:ActivatedRoute
              ,private commentService:CommentService
              ,private route:Router
              ,private toastrService: ToastrService
              ,private authService:AuthService) { }

  ngOnInit(): void {
    this.getBlogById()
    this.getCommentsByBlog()
    this.formCreate()
    this.id=parseInt(this.authService.decodedToken?.nameid)
  }



  getBlogById(){
    this.blogService.getBlogById(+this.activatedRoute.snapshot.params.id)
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
      comment.userId=parseInt(this.jwtHelper.decodeToken(localStorage.getItem('token')).nameid);
      comment.blogId=+this.activatedRoute.snapshot.params.id;
      console.log(comment);
      this.commentService.createComment(comment).subscribe(x=> {
        console.log(x);
        this.route.navigate(['blog/detail/',+this.activatedRoute.snapshot.params.id]);
        this.toastrService.success('Comment is created');
        window.location.reload();
      },error=>this.toastrService.error(error));
    }
  }

  deleteComment(id:number) {
    this.commentService.deleteComment(id).subscribe()
    window.location.reload();
  }
}
