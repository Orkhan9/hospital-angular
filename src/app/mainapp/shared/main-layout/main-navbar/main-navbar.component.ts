import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {AlertifyService} from '../../../../service/alertify.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor(private authService:AuthService,private alertify:AlertifyService) { }

  ngOnInit(): void {
  }loggedIn(){
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
