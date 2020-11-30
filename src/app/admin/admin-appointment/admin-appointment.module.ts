import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminAppointmentRoutingModule} from './admin-appointment-routing.module';
import {AdminAppointmentComponent} from './admin-appointment.component';
import {AdminAppointmentDetailsComponent} from './admin-appointment-details/admin-appointment-details.component';
import {AdminAppointmentItemComponent} from './admin-appointment-item/admin-appointment-item.component';



@NgModule({
  declarations: [AdminAppointmentComponent,AdminAppointmentItemComponent,AdminAppointmentDetailsComponent],
  imports: [
    CommonModule,
    AdminAppointmentRoutingModule
  ]
})
export class AdminAppointmentModule { }
