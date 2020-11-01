import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentDetailsComponent } from './admin-department-details.component';

describe('AdminDepartmentDetailsComponent', () => {
  let component: AdminDepartmentDetailsComponent;
  let fixture: ComponentFixture<AdminDepartmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDepartmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
