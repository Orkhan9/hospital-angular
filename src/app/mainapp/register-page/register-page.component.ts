import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../admin/_service/auth.service';
import {AlertifyService} from '../../service/alertify.service';
import {Router} from '@angular/router';
import {RoleService} from '../../service/role.service';
import {Role} from '../../models/role';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  model:any={};
  roles:Role[];

  constructor(private authService:AuthService,
              private alertify:AlertifyService ,
              private route:Router,
              private  roleService:RoleService) { }

  ngOnInit(): void {
    this.getAllRoles()
  }

  register(){
    this.model.roleId=2;
    //console.log(this.model.roleId)
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
  getAllRoles(){
    this.roleService.getRoles().subscribe(roles=>{this.roles=roles
      },
      error => {
      console.log(error)
      })
  }

}
