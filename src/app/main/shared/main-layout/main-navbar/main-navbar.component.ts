import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BioService} from '../../../../service/bio.service';
import {Bio} from '../../../../models/bio';
import {Observable} from 'rxjs';
import {IBasket} from '../../../basket/basket';
import {BasketService} from '../../../../service/basket.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {tap} from 'rxjs/operators';
import {Search} from '../../../../models/search';
import {ToastrService} from 'ngx-toastr';
import {NavigationStart, Router} from '@angular/router';
import {strict} from 'assert';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit,OnDestroy {

  pathName:string;
  searchItems:Search[];
  basket$: Observable<IBasket>
  bio:Bio;
  helper=new JwtHelperService();

  constructor(public authService:AuthService,
              private bioService:BioService,
              private basketService: BasketService,
              private http:HttpClient,
              private toastr:ToastrService,
              private elRef: ElementRef,
              private router: Router) {
    // this.router.events.subscribe(x => {
    //   if(x instanceof NavigationStart){
    //     this.pathName=x.url.substr(1);
    //     if(this.elRef.nativeElement.querySelector('.card') != null){
    //       if(x.url.substr(1)){
    //         this.elRef.nativeElement.querySelector('.card').style.display='block';
    //       }else{
    //         this.elRef.nativeElement.querySelector('.card').style.display='none';
    //       }
    //     }
    //   }
    // })
  }


  ngOnInit(): void {
    this.getBio();
    if(this.authService.loggedIn()){
      this.basket$ = this.basketService.basket$;
    }
  }


  search(event):Observable<Search[]>{
    this.router.events.subscribe(x => {
      if(x instanceof NavigationStart){
        this.pathName=x.url.substr(1);
        }
    })
    const paramsIoS = new HttpParams().set('name', event.target.value)
      .set('path', this.pathName)

    this.http.get<Search[]>(environment.baseUrl+'search',{params: paramsIoS})
      .pipe(
      tap(data => console.log('Checked')
    )).subscribe(data=>{
      this.searchItems=data;
    })
    return
  }

  getBio(){
    this.bioService.getBio()
      .subscribe(bio=>{
        this.bio=bio,
          error=>console.log(error);
      })
  }


  loggedIn(){
    return this.authService.loggedIn()
  }

  logOut(){
    localStorage.removeItem('token');
    this.toastr.warning("User is logged out")
  }

  changeInputValue(event) {
    event.target.value="";
  }

  ngOnDestroy(): void {
    console.log('fff');
  }
}
