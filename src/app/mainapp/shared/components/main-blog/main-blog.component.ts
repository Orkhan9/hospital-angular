import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../../service/blog.service';
import {Blog} from '../../../../models/blog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-blog',
  templateUrl: './main-blog.component.html',
  styleUrls: ['./main-blog.component.css']
})
export class MainBlogComponent implements OnInit {
  blogs:Blog[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }

  getAllBlogs(){
    this.blogService.getAllBlogs()
      .subscribe(blogs=>{
        this.blogs=blogs,
        error=>console.log(error);
    })
  }


}
