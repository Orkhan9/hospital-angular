import { Component, OnInit } from '@angular/core';
import {AuthService} from "../_service/auth.service";
import {AlertifyService} from "../../service/alertify.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model:any={};
registerMode:boolean=false;
  constructor(private authService:AuthService,private alertify:AlertifyService ) { }

  ngOnInit(): void {
  }
  registerToggle(){
    return this.registerMode=!this.registerMode;
  }
register(){
    console.log(this.model)
  this.authService.register(this.model).subscribe(()=>{
    // console.log("register successfuly")
    this.alertify.success("register successfuly")
  },error => {
    // console.log(error)
    this.alertify.error(error)
  })
}
cancel(){
   return  this.registerMode=!this.registerMode
    // console.log("cancelled");
  this.alertify.message("Cancelled")
}
}
