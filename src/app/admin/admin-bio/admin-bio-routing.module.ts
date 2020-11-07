import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {AdminBioComponent} from './admin-bio.component';
import {AdminBioUpdateComponent} from './admin-bio-update/admin-bio-update.component';

const routes:Routes=[
  {path:'',component:AdminBioComponent},
  {path:'update/:id',component:AdminBioUpdateComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],exports:[
    RouterModule
  ]
})
export class AdminBioRoutingModule { }
