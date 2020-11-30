import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Department} from '../../../models/department';
import {Appointment} from '../../../models/appointment';

@Component({
  selector: 'app-admin-appointment-item',
  templateUrl: './admin-appointment-item.component.html',
  styleUrls: ['./admin-appointment-item.component.css']
})
export class AdminAppointmentItemComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() appointment:Appointment;
  @Output() onDelete=new EventEmitter<Appointment>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteAppointment(appointment:Appointment){
    this.onDelete.emit(appointment);
  }

}
