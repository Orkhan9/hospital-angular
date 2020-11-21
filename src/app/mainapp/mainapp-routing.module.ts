import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {DoctorPageComponent} from './doctor-page/doctor-page.component';
import {DepartmentPageComponent} from './department-page/department-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ServiceDetailPageComponent} from './service-detail-page/service-detail-page.component';
import {DoctorDetailPageComponent} from './doctor-detail-page/doctor-detail-page.component';
import {DepartmentDetailPageComponent} from './department-detail-page/department-detail-page.component';
import {BlogDetailPageComponent} from './blog-detail-page/blog-detail-page.component';
import {ProductDetailPageComponent} from './product-detail-page/product-detail-page.component';
import {ShopPageComponent} from './shop-page/shop-page.component';

const route:Routes=[
  {path:'',component:MainLayoutComponent,data:{breadcrumb:'Home'},children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomePageComponent,data:{breadcrumb:'Home'}},
      {path:'about',component:AboutPageComponent,data:{breadcrumb:'About'}},
      {path:'doctor',component:DoctorPageComponent,data:{breadcrumb:'Doctor'}},
      {path:'doctor/detail/:id',component:DoctorDetailPageComponent},
      {path:'department',component:DepartmentPageComponent},
      {path:'department/detail/:id',component:DepartmentDetailPageComponent},
      {path:'blog',component:BlogPageComponent},
      {path:'blog/detail/:id',component:BlogDetailPageComponent},
      {path:'shop',component:ShopPageComponent},
      {path:'product/detail/:id',component:ProductDetailPageComponent},
      {path: 'basket', loadChildren: ()=> import('./basket/basket.module').then(mod => mod.BasketModule)},
      {path:'contact',component:ContactPageComponent},
      {path:'service/detail/:id',component:ServiceDetailPageComponent},
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
