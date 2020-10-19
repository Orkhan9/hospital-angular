import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {DoctorPageComponent} from './doctor-page/doctor-page.component';
import {DepartmentPageComponent} from './department-page/department-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {ShopPageComponent} from './shop-page/shop-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';

const route:Routes=[
  {path:'',component:MainLayoutComponent,data:{breadcrumb:'Home'},children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomePageComponent,data:{breadcrumb:'Home'}},
      {path:'about',component:AboutPageComponent,data:{breadcrumb:'About'}},
      {path:'doctor',component:DoctorPageComponent},
      {path:'department',component:DepartmentPageComponent},
      {path:'blog',component:BlogPageComponent},
      {path:'shop',component:ShopPageComponent},
      {path:'contact',component:ContactPageComponent},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ]}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class MainappRoutingModule { }
