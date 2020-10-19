import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDoctorComponent } from './main-doctor.component';

describe('MainDoctorComponent', () => {
  let component: MainDoctorComponent;
  let fixture: ComponentFixture<MainDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
