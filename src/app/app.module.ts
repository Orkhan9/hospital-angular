import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorInterceptorProvider} from "./service/error.interceptor";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ToastrModule} from 'ngx-toastr';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PreventUnsavedGuardDepartment, PreventUnsavedGuardDoctor, PreventUnsavedGuardService} from './guards/prevent-unsaved-guard';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ProductResolver} from './main/shop-page/product-resolver';
import {DoctorResolver} from './main/doctor-page/doctor-resolver';
import {LoadingInterceptor} from './interceptors/loading-interceptor';




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
    PreventUnsavedGuardService,
    ProductResolver,
    DoctorResolver,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
