import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeAppointmentComponent } from './main-home-appointment.component';

describe('MainHomeAppointmentComponent', () => {
  let component: MainHomeAppointmentComponent;
  let fixture: ComponentFixture<MainHomeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
