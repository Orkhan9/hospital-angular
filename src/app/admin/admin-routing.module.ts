import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';

const route:Routes=[
  {path:'',component:AdminLayoutComponent,children:[
      {path:'doctor',loadChildren:()=>import('../admin/admin-doctor/admin-doctor.module').then(m=>m.AdminDoctorModule)},
      {path:'department',loadChildren:()=>import('../admin/admin-department/admin-department.module').then(m=>m.AdminDepartmentModule)},
      {path:'service',loadChildren:()=>import('../admin/admin-service/admin-service.module').then(m=>m.AdminServiceModule)},
      {path:'blog',loadChildren:()=>import('../admin/admin-blog/admin-blog.module').then(m=>m.AdminBlogModule)}
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
