import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminBioComponent} from './admin-bio.component';
import {AdminBioUpdateComponent} from './admin-bio-update/admin-bio-update.component';
import {AdminBioRoutingModule} from './admin-bio-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AdminBioComponent,AdminBioUpdateComponent],
  imports: [
    CommonModule,
    AdminBioRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminBioModule { }
