import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './mainapp/login-page/login-page.component';
import {RegisterPageComponent} from './mainapp/register-page/register-page.component';
import {Error404PageComponent} from './mainapp/error404-page/error404-page.component';
import {AuthGuard} from './guards/auth-guard';

const route:Routes=[
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'error',component:Error404PageComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate: [AuthGuard] },
  {path:'',data:{breadcrumb: 'Home'},loadChildren:()=>import('./mainapp/mainapp.module').then(m=>m.MainappModule)},


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
