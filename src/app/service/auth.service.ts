import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 jwtHelper=new JwtHelperService();
 decodedToken:any;
  constructor(private http:HttpClient,private route:Router) { }

  login(loginuser:any){
   return this.http.post(environment.baseAuthUrl+"/login",loginuser)
      .pipe(
        map((response:any)=>{
          const user=response;
          if(user){
            localStorage.setItem("token",user.token)
            this.decodedToken=this.jwtHelper.decodeToken(user.token);

            if (this.decodedToken.role=="admin"){
              this.route.navigate(['admin'])
            }else{
              this.route.navigate([''])
            }
          }
        })
      )
  }

  register(model:any){
   return this.http.post(environment.baseAuthUrl+"/register",model)
  }

  loggedIn(){
    const token=localStorage.getItem("token")
    return !this.jwtHelper.isTokenExpired(token);
  }
}
