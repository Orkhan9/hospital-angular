import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PreventUnsavedGuard} from '../../guards/prevent-unsaved-guard';
import {AdminDepartmentComponent} from './admin-department.component';
import {AdminDepartmentCreateComponent} from './admin-department-create/admin-department-create.component';
import {AdminDepartmentUpdateComponent} from './admin-department-update/admin-department-update.component';
import {AdminDepartmentDetailsComponent} from './admin-department-details/admin-department-details.component';

const route:Routes=[
  {path:'',component:AdminDepartmentComponent},
  {path:'create',component:AdminDepartmentCreateComponent},
  {path:'update/:id',component:AdminDepartmentUpdateComponent,canDeactivate:[PreventUnsavedGuard]},
  {path:':id',component:AdminDepartmentDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminDepartmentRoutingModule { }
