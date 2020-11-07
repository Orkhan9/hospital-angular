import { Component, OnInit } from '@angular/core';
import {Bio} from '../../models/bio';
import {BioService} from '../../service/bio.service';

@Component({
  selector: 'app-admin-bio',
  templateUrl: './admin-bio.component.html',
  styleUrls: ['./admin-bio.component.css']
})
export class AdminBioComponent implements OnInit {

  bio:Bio;
  constructor(private bioService:BioService) { }

  ngOnInit(): void {
    this.getBio();
  }

  getBio(){
    this.bioService.getBio()
      .subscribe(bio=>{
        this.bio=bio,
          error=>console.log(error)
      })
  }

}
