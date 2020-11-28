import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminProductRoutingModule} from './admin-product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminProductComponent} from './admin-product.component';
import {AdminProductCreateComponent} from './admin-product-create/admin-product-create.component';
import {AdminProductUpdateComponent} from './admin-product-update/admin-product-update.component';
import {AdminProductItemComponent} from './admin-product-item/admin-product-item.component';
import {AdminProductDetailsComponent} from './admin-product-details/admin-product-details.component';



@NgModule({
  declarations: [AdminProductComponent, AdminProductCreateComponent, AdminProductUpdateComponent,
    AdminProductItemComponent, AdminProductDetailsComponent],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminProductModule { }
