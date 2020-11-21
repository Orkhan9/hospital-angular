import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {


  pathName:string;
  @Input() searchItem
  constructor() { }

  ngOnInit(): void {
    this.pathName=window.location.pathname.substr(1);
  }
}
