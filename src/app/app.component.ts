import {Component, OnDestroy, OnInit} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "./service/auth.service";
import {BasketService} from './service/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practise';
  jwtHelper=new JwtHelperService();
  constructor(private authService:AuthService,private basketService:BasketService) {
  }
  ngOnInit() {
    const token=localStorage.getItem("token");
    if (token){
      this.authService.decodedToken=this.jwtHelper.decodeToken(token);
    }
    const basketId=localStorage.getItem(this.jwtHelper.decodeToken(token).unique_name)
    if (basketId){
      this.basketService.getBasket(basketId).subscribe(()=>{
        console.log("basket initialize" + basketId);
      },error => {
        console.log(error);
      })
    }
}
}
