import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDepartmentComponent } from './main-department.component';

describe('MainDepartmentComponent', () => {
  let component: MainDepartmentComponent;
  let fixture: ComponentFixture<MainDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
