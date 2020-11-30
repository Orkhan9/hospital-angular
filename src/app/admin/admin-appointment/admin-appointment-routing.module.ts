import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminServiceComponent} from '../admin-service/admin-service.component';
import {AdminServiceCreateComponent} from '../admin-service/admin-service-create/admin-service-create.component';
import {AdminServiceUpdateComponent} from '../admin-service/admin-service-update/admin-service-update.component';
import {AdminServiceDetailsComponent} from '../admin-service/admin-service-details/admin-service-details.component';
import {AdminAppointmentComponent} from './admin-appointment.component';
import {AdminAppointmentDetailsComponent} from './admin-appointment-details/admin-appointment-details.component';

const routes:Routes=[
  {path:'',component:AdminAppointmentComponent},
  {path:':id',component:AdminAppointmentDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AdminAppointmentRoutingModule { }
