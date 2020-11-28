import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDoctorCreateComponent } from './admin-doctor-create/admin-doctor-create.component';
import {AdminDoctorRoutingModule} from './admin-doctor-routing.module';
import {AdminDoctorComponent} from './admin-doctor.component';
import { AdminDoctorUpdateComponent } from './admin-doctor-update/admin-doctor-update.component';
import { AdminDoctorItemComponent } from './admin-doctor-item/admin-doctor-item.component';
import { AdminDoctorDetailsComponent } from './admin-doctor-details/admin-doctor-details.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdminDoctorComponent,AdminDoctorCreateComponent, AdminDoctorUpdateComponent, AdminDoctorItemComponent,
    AdminDoctorDetailsComponent],
    imports: [
        CommonModule,
        AdminDoctorRoutingModule,
        ReactiveFormsModule
    ]
})
export class AdminDoctorModule { }
