import { Component, OnInit } from '@angular/core';
import {BioService} from '../../../../service/bio.service';
import {Bio} from '../../../../models/bio';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {

  bio:Bio;
  constructor(private bioService:BioService) { }

  ngOnInit(): void {
    this.getBio()
  }

  getBio(){
    this.bioService.getBio()
      .subscribe(bio=>{
        this.bio=bio,
          error=>console.log(error);
      })
  }

}
