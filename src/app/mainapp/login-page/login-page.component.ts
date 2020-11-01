import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../admin/_service/auth.service';
import {AlertifyService} from '../../service/alertify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model:any={};
  constructor(public authService:AuthService
    ,private alertify:AlertifyService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.model).subscribe(next=>{
      // console.log("login succsesfuly")
      this.alertify.success("login successfuly");
      const token=localStorage.getItem("token")

      //this.route.navigate([''])
    },error => {
      //console.log("login failed"+error)
      this.alertify.error(error)
    })

  }
  loggedIn(){
    // const token=localStorage.getItem("token");
    // return !!token;
    return this.authService.loggedIn()
  }
  logOut(){
    localStorage.removeItem("token");
    // console.log("logged out");
    this.alertify.message("logged out");
  }

}
