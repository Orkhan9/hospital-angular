import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {MainNavbarComponent} from './shared/main-layout/main-navbar/main-navbar.component';
import {AboutPageComponent} from './about-page/about-page.component';
import { DoctorPageComponent } from './doctor-page/doctor-page.component';
import { MainSearchboxComponent } from './shared/main-layout/main-searchbox/main-searchbox.component';
import { MainBreadcrumbHeaderComponent } from './shared/main-layout/main-breadcrumb-header/main-breadcrumb-header.component';
import { MainFeatureComponent } from './shared/components/main-feature/main-feature.component';
import { MainFooterComponent } from './shared/main-layout/main-footer/main-footer.component';
import { MainAboutComponent } from './shared/components/main-about/main-about.component';
import { MainPackagesComponent } from './shared/components/main-packages/main-packages.component';
import { MainDepartmentComponent } from './shared/components/main-department/main-department.component';
import { MainHomeStatisticComponent } from './home-page/main-home-statistic/main-home-statistic.component';
import { MainDoctorComponent } from './shared/components/main-doctor/main-doctor.component';
import { MainHomeAppointmentComponent } from './home-page/main-home-appointment/main-home-appointment.component';
import { MainHomeGalleryComponent } from './home-page/main-home-gallery/main-home-gallery.component';
import { MainTestimonialComponent } from './shared/components/main-testimonial/main-testimonial.component';
import { MainBlogComponent } from './shared/components/main-blog/main-blog.component';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { MainServiceComponent } from './shared/components/main-service/main-service.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MainContactComponent } from './contact-page/main-contact/main-contact.component';
import { MainContactMapComponent } from './contact-page/main-contact-map/main-contact-map.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {CarouselModule} from "ngx-bootstrap/carousel";
import { MainMultiCarouselComponent } from './shared/components/main-multi-carousel/main-multi-carousel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainFileuploadComponent } from './main-fileupload/main-fileupload.component';
import { ServiceDetailPageComponent } from './service-detail-page/service-detail-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MainHomeCarouselComponent } from './home-page/main-home-carousel/main-home-carousel.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { SearchItemComponent } from './shared/main-layout/main-navbar/search-item/search-item.component';
import { DoctorDetailPageComponent } from './doctor-detail-page/doctor-detail-page.component';
import { DepartmentDetailPageComponent } from './department-detail-page/department-detail-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';
import {ShopPageComponent} from './shop-page/shop-page.component';
import {ShopProductItemComponent} from './shop-page/shop-product-item/shop-product-item.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent,
    MainNavbarComponent,
    AboutPageComponent,
    DoctorPageComponent,
    MainSearchboxComponent,
    MainBreadcrumbHeaderComponent,
    MainFeatureComponent,
    MainFooterComponent,
    MainAboutComponent,
    MainPackagesComponent,
    MainDepartmentComponent,
    MainHomeStatisticComponent,
    MainDoctorComponent,
    MainHomeAppointmentComponent,
    MainHomeGalleryComponent,
    MainTestimonialComponent,
    MainBlogComponent,
    DepartmentPageComponent,
    MainServiceComponent,
    BlogPageComponent,
    ContactPageComponent,
    MainContactComponent,
    MainContactMapComponent,
    MainMultiCarouselComponent,
    MainFileuploadComponent,
    ServiceDetailPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainHomeCarouselComponent,
    Error404PageComponent,
    SearchItemComponent,
    DoctorDetailPageComponent,
    DepartmentDetailPageComponent,
    ProductDetailPageComponent,
    BlogDetailPageComponent,
    ShopPageComponent,
    ShopProductItemComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        BreadcrumbModule,
        CarouselModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
  exports:[]
})
export class MainModule { }
