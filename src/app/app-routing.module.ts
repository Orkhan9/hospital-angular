import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './main/login-page/login-page.component';
import {RegisterPageComponent} from './main/register-page/register-page.component';
import {Error404PageComponent} from './main/error404-page/error404-page.component';
import {AuthGuard} from './guards/auth-guard';

const route:Routes=[
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'error',component:Error404PageComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate: [AuthGuard] },
  {path:'',data:{breadcrumb: 'Home'},loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
