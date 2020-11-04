import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
detoken:any;
helper=new JwtHelperService()
  constructor(private router: Router) { }

  canActivate() {

  this.detoken=this.helper.decodeToken(localStorage.getItem("token"))
    if (this.detoken.role=="admin") {
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }

  }
}
