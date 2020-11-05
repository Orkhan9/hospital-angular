import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Doctor} from '../../../models/doctor';
import {Department} from '../../../models/department';

@Component({
  selector: 'app-admin-department-item',
  templateUrl: './admin-department-item.component.html',
  styleUrls: ['./admin-department-item.component.css']
})
export class AdminDepartmentItemComponent implements OnInit {

  modalRef: BsModalRef;
  @Input() department:Department;
  @Output() onDelete=new EventEmitter<Department>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteDepartment(department:Department){
    this.onDelete.emit(department);
  }


}
