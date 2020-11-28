import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';

const route:Routes=[
  {path:'',component:AdminLayoutComponent,children:[
      {path:'doctor',loadChildren:()=>import('../admin/admin-doctor/admin-doctor.module').then(m=>m.AdminDoctorModule)},
      {path:'department',loadChildren:()=>import('../admin/admin-department/admin-department.module').then(m=>m.AdminDepartmentModule)},
      {path:'product',loadChildren:()=>import('../admin/admin-product/admin-product.module').then(m=>m.AdminProductModule)},
      {path:'service',loadChildren:()=>import('../admin/admin-service/admin-service.module').then(m=>m.AdminServiceModule)},
      {path:'blog',loadChildren:()=>import('../admin/admin-blog/admin-blog.module').then(m=>m.AdminBlogModule)},
      {path:'about',loadChildren:()=>import('../admin/admin-about/admin-about.module').then(m=>m.AdminAboutModule)},
      {path:'bio',loadChildren:()=>import('../admin/admin-bio/admin-bio.module').then(m=>m.AdminBioModule)}
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
export class AdminRoutingModule { }
