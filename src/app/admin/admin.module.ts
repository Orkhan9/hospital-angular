import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {AdminNavbarComponent} from './shared/components/admin-navbar/admin-navbar.component';
import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './admin-register/register.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";



@NgModule({
  declarations: [AdminLayoutComponent, AdminNavbarComponent, RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BsDropdownModule
  ]
})
export class AdminModule { }
