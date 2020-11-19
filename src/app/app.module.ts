import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorInterceptorProvider} from "./service/error.interceptor";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ToastrModule} from 'ngx-toastr';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PreventUnsavedGuardDepartment, PreventUnsavedGuardDoctor, PreventUnsavedGuardService} from './guards/prevent-unsaved-guard';
import {PaginationModule} from 'ngx-bootstrap/pagination';




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
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    ErrorInterceptorProvider,
    PreventUnsavedGuardDepartment,
    PreventUnsavedGuardDoctor,
    PreventUnsavedGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
