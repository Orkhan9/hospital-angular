import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentItemComponent } from './admin-department-item.component';

describe('AdminDepartmentItemComponent', () => {
  let component: AdminDepartmentItemComponent;
  let fixture: ComponentFixture<AdminDepartmentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDepartmentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDepartmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
