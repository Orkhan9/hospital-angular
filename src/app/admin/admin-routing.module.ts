import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {register} from "ts-node";
import {RegisterComponent} from "./admin-register/register.component";

const route:Routes=[
  {path:'',component:AdminLayoutComponent,children:[
      {path:'doctor',loadChildren:()=>import('../admin/admin-doctor/admin-doctor.module').then(m=>m.AdminDoctorModule)},
      {path:'register',component:RegisterComponent}
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
