import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailPageComponent } from './department-detail-page.component';

describe('DepartmentDetailPageComponent', () => {
  let component: DepartmentDetailPageComponent;
  let fixture: ComponentFixture<DepartmentDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
