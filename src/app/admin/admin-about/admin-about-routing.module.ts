import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminAboutComponent} from './admin-about.component';
import {AdminAboutUpdateComponent} from './admin-about-update/admin-about-update.component';

const routes:Routes=[
  {path:'',component:AdminAboutComponent},
  {path:'update/:id',component:AdminAboutUpdateComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminAboutRoutingModule { }
