import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {AdminNavbarComponent} from './shared/components/admin-navbar/admin-navbar.component';
import {AdminRoutingModule} from './admin-routing.module';



@NgModule({
  declarations: [AdminLayoutComponent, AdminNavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
