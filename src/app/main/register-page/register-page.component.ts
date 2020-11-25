import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {RoleService} from '../../service/role.service';
import {Role} from '../../models/role';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  get _username(){
    return this.form.get('username');
  }

  get _email(){
    return this.form.get('email');
  }

  get _password(){
    return this.form.get('password');
  }

  get _checkPassword(){
    return this.form.get('checkPassword');
  }

  form:FormGroup;
  // model:any={};
  roles:Role[];

  constructor(private authService:AuthService,
              private route:Router,
              private roleService:RoleService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.formCreate();
    this.getAllRoles()
  }

  formCreate(){
    this.form = new FormGroup({
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      checkPassword:new FormControl('',[Validators.required,this.matchValues('password')])
    });
  }

  register() {
    console.log(this.form);
    if(this.form.valid){
      let registeruser= {
        username:this.form.value.username,
        email:this.form.value.email,
        password:this.form.value.password,
        roleid:2
      }
      console.log(registeruser);
      this.authService.register(registeruser).subscribe(x=> {
        console.log(x);
        this.route.navigate(['login']);
        this.toastr.success('Register is successful');
        // const token=localStorage.getItem("token")
      },error=>this.toastr.error(error));
    }
  }

matchValues(match:string):ValidatorFn{
    return (control:AbstractControl)=>{
      return control?.value===control?.parent?.controls[match].value
      ? null :{isMatching:true}
    }
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



// register(){
//   this.model.roleId=2;
//   //console.log(this.model.roleId)
//   this.authService.register(this.model).subscribe(()=>{
//     // console.log("register successfuly")
//     this.alertify.success("register successfuly");
//     this.route.navigate(['']);
//   },error => {
//     // console.log(error)
//     this.alertify.error(error)
//   })
//
// }
