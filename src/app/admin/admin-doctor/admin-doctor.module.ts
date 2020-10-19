import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDoctorCreateComponent } from './admin-doctor-create/admin-doctor-create.component';
import {AdminDoctorRoutingModule} from './admin-doctor-routing.module';
import {AdminDoctorComponent} from './admin-doctor.component';
import { AdminDoctorUpdateComponent } from './admin-doctor-update/admin-doctor-update.component';



@NgModule({
  declarations: [AdminDoctorComponent,AdminDoctorCreateComponent, AdminDoctorUpdateComponent],
  imports: [
    CommonModule,
    AdminDoctorRoutingModule
  ]
})
export class AdminDoctorModule { }
