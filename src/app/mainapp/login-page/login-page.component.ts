import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {AlertifyService} from '../../service/alertify.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {JwtHelperService} from '@auth0/angular-jwt';

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
    ,private alertify:AlertifyService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formCreate()
  }

  formCreate(){
    this.form = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }

  onSubmit() {
    if(this.form.valid){

      let loginuser= {
        username:this.form.value.username,
        password:this.form.value.password
      }
      console.log(loginuser);
      this.authService.login(loginuser).subscribe(x=> {
        console.log(x);
        console.log(this.helper.decodeToken(localStorage.getItem('token')).role);
        if(this.helper.decodeToken(localStorage.getItem('token')).role=="admin"){
          this.route.navigate(['/admin']);
        }else{
          this.route.navigate(['']);
        }
        this.toastr.success('Login is successful');
        // const token=localStorage.getItem("token")
      },error=>this.alertify.error(error));
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

  logOut(){
    localStorage.removeItem("token");
    // console.log("logged out");
    this.alertify.message("logged out");
  }

}
