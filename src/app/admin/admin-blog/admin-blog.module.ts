import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminBlogComponent} from './admin-blog.component';
import { AdminBlogCreateComponent } from './admin-blog-create/admin-blog-create.component';
import { AdminBlogUpdateComponent } from './admin-blog-update/admin-blog-update.component';
import { AdminBlogDetailsComponent } from './admin-blog-details/admin-blog-details.component';
import { AdminBlogItemComponent } from './admin-blog-item/admin-blog-item.component';
import {AdminBlogRoutingModule} from './admin-blog-routing.module';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [AdminBlogComponent,AdminBlogCreateComponent, AdminBlogUpdateComponent,
    AdminBlogDetailsComponent, AdminBlogItemComponent],
  imports: [
    CommonModule,
    AdminBlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminBlogModule { }
