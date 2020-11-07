import { Component, OnInit } from '@angular/core';
import {About} from '../../models/about';
import {AboutService} from '../../service/about.service';
import {ServiceService} from '../../service/service.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  about:About;
  constructor(private aboutService:AboutService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(){
    this.aboutService.getAbout()
      .subscribe(about=>{
        this.about=about,
          error=>console.log(error)
      })
  }

}
