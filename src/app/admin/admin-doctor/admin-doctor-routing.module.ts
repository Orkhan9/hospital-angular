import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminDoctorComponent} from './admin-doctor.component';
import {AdminDoctorCreateComponent} from './admin-doctor-create/admin-doctor-create.component';
import {AdminDoctorUpdateComponent} from './admin-doctor-update/admin-doctor-update.component';

const route:Routes=[
  {path:'',component:AdminDoctorComponent},
  {path:'create',component:AdminDoctorCreateComponent},
  {path:'update',component:AdminDoctorUpdateComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminDoctorRoutingModule { }