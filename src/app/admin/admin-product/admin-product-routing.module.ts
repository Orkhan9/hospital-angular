import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PreventUnsavedGuardDoctor} from '../../guards/prevent-unsaved-guard';
import {AdminProductComponent} from './admin-product.component';
import {AdminProductCreateComponent} from './admin-product-create/admin-product-create.component';
import {AdminProductUpdateComponent} from './admin-product-update/admin-product-update.component';
import {AdminProductDetailsComponent} from './admin-product-details/admin-product-details.component';

const route:Routes=[
  {path:'',component:AdminProductComponent},
  {path:'create',component:AdminProductCreateComponent},
  {path:'update/:id',component:AdminProductUpdateComponent,canDeactivate:[PreventUnsavedGuardDoctor]},
  {path:':id',component:AdminProductDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class AdminProductRoutingModule { }
