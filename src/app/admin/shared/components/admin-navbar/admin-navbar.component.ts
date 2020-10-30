import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../_service/auth.service";
import {AlertifyService} from "../../../../service/alertify.service";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
model:any={};
  constructor(public authService:AuthService
              ,private alertify:AlertifyService,) { }

  ngOnInit(): void {
  }
login(){
    this.authService.login(this.model).subscribe(next=>{
       // console.log("login succsesfuly")
      this.alertify.success("login successfuly")
    },error => {
       //console.log("login failed"+error)
      this.alertify.error(error)
    })
    console.log(this.model);
}
loggedIn(){
    // const token=localStorage.getItem("token");
    // return !!token;
  return this.authService.loggedIn()
}
logOut(){
    localStorage.removeItem("token");
    // console.log("logged out");
  this.alertify.message("logged out")
}
}
