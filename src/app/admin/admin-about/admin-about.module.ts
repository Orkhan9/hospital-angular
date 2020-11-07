import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAboutUpdateComponent } from './admin-about-update/admin-about-update.component';
import {AdminAboutComponent} from './admin-about.component';
import {AdminAboutRoutingModule} from './admin-about-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdminAboutComponent,AdminAboutUpdateComponent],
  imports: [
    CommonModule,
    AdminAboutRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminAboutModule { }
