import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {AlertifyService} from '../../service/alertify.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BasketService} from '../../service/basket.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form:FormGroup
  // model:any={};
  helper=new JwtHelperService();
  constructor(public authService:AuthService
              ,private alertify:AlertifyService
              ,private route:Router
              ,private toastr: ToastrService
              ,private basketService:BasketService) { }

  ngOnInit(): void {
    this.formCreate()
  }

  formCreate(){
    this.form = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }

  login() {
    if (this.form.valid) {

      let loginUser = {
        username: this.form.value.username,
        password: this.form.value.password
      }
      this.authService.login(loginUser).subscribe(x => {
        console.log(x);

      }, error => this.alertify.error(error));
    }
  }



  get _username(){
    return this.form.get('username');
  }

  get _password(){
    return this.form.get('password');
  }


  // login(){
  //   this.authService.login(this.model).subscribe(next=>{
  //     // console.log("login succsesfuly")
  //     this.alertify.success("login successfuly");
  //     const token=localStorage.getItem("token")
  //
  //     //this.route.navigate([''])
  //   },error => {
  //     //console.log("login failed"+error)
  //     this.alertify.error(error)
  //   })
  //
  // }

  loggedIn(){
    // const token=localStorage.getItem("token");
    // return !!token;
    return this.authService.loggedIn()
  }

  // logOut(){
  //   localStorage.removeItem("token");
  //   this.alertify.message("logged out");
  // }

}
