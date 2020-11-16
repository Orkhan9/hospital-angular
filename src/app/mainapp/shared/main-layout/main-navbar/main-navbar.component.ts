import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {AlertifyService} from '../../../../service/alertify.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BioService} from '../../../../service/bio.service';
import {Bio} from '../../../../models/bio';
import {Observable} from 'rxjs';
import {IBasket} from '../../../basket/basket';
import {BasketService} from '../../../../service/basket.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {


  basket$: Observable<IBasket>
  bio:Bio;
  helper=new JwtHelperService();
  constructor(public authService:AuthService
              ,private alertify:AlertifyService
              ,private bioService:BioService
              ,private basketService: BasketService) { }

  ngOnInit(): void {
    this.getBio();
    if(this.authService.loggedIn()){
      this.basket$ = this.basketService.basket$;
    }
    // console.log(this.helper.decodeToken(localStorage.getItem('token')).unique_name);
  }

  getBio(){
    this.bioService.getBio()
      .subscribe(bio=>{
        this.bio=bio,
          error=>console.log(error);
      })
  }


  loggedIn(){
    // const token=localStorage.getItem("token");
    // return !!token;
    return this.authService.loggedIn()
  }

  logOut(){
    localStorage.removeItem('token');
    // console.log("logged out");
    this.alertify.warning("logged out")


    // this.basketService.getCurrentBasketValue()
  }

}
