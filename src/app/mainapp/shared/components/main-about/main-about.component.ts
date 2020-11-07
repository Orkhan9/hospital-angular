import { Component, OnInit } from '@angular/core';
import {About} from '../../../../models/about';
import {AboutService} from '../../../../service/about.service';

@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.css']
})
export class MainAboutComponent implements OnInit {

  about:About;
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.getAbout()
  }
  getAbout(){
    this.aboutService.getAbout()
      .subscribe(about=>{
        this.about=about,
          error=>console.log(error)
      })
  }
}
