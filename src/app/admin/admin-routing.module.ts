import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';

const route:Routes=[
  {path:'',component:AdminLayoutComponent,children:[
      {path:'doctor',loadChildren:()=>import('../admin/admin-doctor/admin-doctor.module').then(m=>m.AdminDoctorModule)},
      {path:'department',loadChildren:()=>import('../admin/admin-department/admin-department.module').then(m=>m.AdminDepartmentModule)}
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
