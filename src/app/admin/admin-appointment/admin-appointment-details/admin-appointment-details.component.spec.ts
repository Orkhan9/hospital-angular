import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentDetailsComponent } from './admin-appointment-details.component';

describe('AdminAppointmentDetailsComponent', () => {
  let component: AdminAppointmentDetailsComponent;
  let fixture: ComponentFixture<AdminAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppointmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
