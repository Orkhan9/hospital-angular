import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../admin/_service/auth.service';
import {AlertifyService} from '../../service/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  model:any={};

  constructor(private authService:AuthService,private alertify:AlertifyService ,private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.model)
    this.authService.register(this.model).subscribe(()=>{
      // console.log("register successfuly")
      this.alertify.success("register successfuly");
      this.route.navigate(['']);
    },error => {
      // console.log(error)
      this.alertify.error(error)
    })

  }
  cancel(){
    this.route.navigate(['']);
  }

}
