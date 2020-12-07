import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { AdminNavbarComponent } from './shared/components/admin-layout/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './shared/components/admin-layout/admin-footer/admin-footer.component';
import { LeftSidebarComponent } from './shared/components/admin-layout/left-sidebar/left-sidebar.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminContactItemComponent } from './admin-contact/admin-contact-item/admin-contact-item.component';



@NgModule({
  declarations: [AdminLayoutComponent, AdminNavbarComponent,
    AdminFooterComponent, LeftSidebarComponent, AdminContactComponent, AdminContactItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    BsDropdownModule
  ]
})
export class AdminModule { }
