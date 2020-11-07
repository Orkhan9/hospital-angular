import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminDepartmentRoutingModule} from './admin-department-routing.module';
import {AdminDepartmentComponent} from './admin-department.component';
import { AdminDepartmentCreateComponent } from './admin-department-create/admin-department-create.component';
import { AdminDepartmentUpdateComponent } from './admin-department-update/admin-department-update.component';
import { AdminDepartmentDetailsComponent } from './admin-department-details/admin-department-details.component';
import { AdminDepartmentItemComponent } from './admin-department-item/admin-department-item.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdminDepartmentComponent,AdminDepartmentCreateComponent, AdminDepartmentUpdateComponent,
    AdminDepartmentDetailsComponent, AdminDepartmentItemComponent],
  imports: [
    CommonModule,
    AdminDepartmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminDepartmentModule { }
