import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Service} from '../../../models/service';

@Component({
  selector: 'app-admin-service-item',
  templateUrl: './admin-service-item.component.html',
  styleUrls: ['./admin-service-item.component.css']
})
export class AdminServiceItemComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() service:Service;
  @Output() onDelete=new EventEmitter<Service>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteDoctor(service:Service){
    this.onDelete.emit(service);
  }

}
