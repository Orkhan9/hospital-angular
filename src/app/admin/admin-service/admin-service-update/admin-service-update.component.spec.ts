import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceUpdateComponent } from './admin-service-update.component';

describe('AdminServiceUpdateComponent', () => {
  let component: AdminServiceUpdateComponent;
  let fixture: ComponentFixture<AdminServiceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
