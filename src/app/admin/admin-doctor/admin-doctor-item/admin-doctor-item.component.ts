import {Component, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Doctor} from '../../../models/doctor';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-admin-doctor-item',
  templateUrl: './admin-doctor-item.component.html',
  styleUrls: ['./admin-doctor-item.component.css']
})
export class AdminDoctorItemComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() doctor:Doctor;
  @Output() onDelete=new EventEmitter<Doctor>();

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteDoctor(doctor:Doctor){
    this.onDelete.emit(doctor);
  }

  //modal olmasa
  // deleteDoctor() {
  //   this.doctorService.deleteDoctor(this.doctor.id)
  //     .subscribe(x=>{
  //       console.log(x);
  //       },error => console.log(error));
  // }
}
