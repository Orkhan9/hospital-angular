import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminServiceComponent} from './admin-service.component';
import {AdminServiceCreateComponent} from './admin-service-create/admin-service-create.component';
import {AdminServiceUpdateComponent} from './admin-service-update/admin-service-update.component';
import {AdminServiceDetailsComponent} from './admin-service-details/admin-service-details.component';

const route:Routes=[
  {path:'',component:AdminServiceComponent},
  {path:'create',component:AdminServiceCreateComponent},
  {path:'update/:id',component:AdminServiceUpdateComponent},
  {path:':id',component:AdminServiceDetailsComponent}
]


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminServiceRoutingModule { }
