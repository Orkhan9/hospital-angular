import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreadcrumbService} from 'xng-breadcrumb';

@Component({
  selector: 'app-main-breadcrumb-header',
  templateUrl: './main-breadcrumb-header.component.html',
  styleUrls: ['./main-breadcrumb-header.component.css']
})
export class MainBreadcrumbHeaderComponent implements OnInit {

  breadcrumb$: Observable<any[]>
  constructor(private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
  }

}
