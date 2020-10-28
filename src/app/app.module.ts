import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorInterceptorProvider} from "./service/error.interceptor";
import {AuthService} from "./admin/_service/auth.service";
import {JwtHelperService} from "@auth0/angular-jwt";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ErrorInterceptorProvider,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
