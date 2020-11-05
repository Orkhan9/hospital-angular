import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceItemComponent } from './admin-service-item.component';

describe('AdminServiceItemComponent', () => {
  let component: AdminServiceItemComponent;
  let fixture: ComponentFixture<AdminServiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
