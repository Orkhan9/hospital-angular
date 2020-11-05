import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminServiceComponent} from './admin-service.component';
import {AdminServiceCreateComponent} from './admin-service-create/admin-service-create.component';
import {AdminServiceUpdateComponent} from './admin-service-update/admin-service-update.component';
import {AdminServiceDetailsComponent} from './admin-service-details/admin-service-details.component';
import {AdminServiceRoutingModule} from './admin-service-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminServiceItemComponent } from './admin-service-item/admin-service-item.component';



@NgModule({
  declarations: [
    AdminServiceComponent,
    AdminServiceCreateComponent,
    AdminServiceUpdateComponent,
    AdminServiceDetailsComponent,
    AdminServiceItemComponent
  ],
  imports: [
    CommonModule,
    AdminServiceRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminServiceModule { }
