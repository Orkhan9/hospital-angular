import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContactItemComponent } from './admin-contact-item.component';

describe('AdminContactItemComponent', () => {
  let component: AdminContactItemComponent;
  let fixture: ComponentFixture<AdminContactItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContactItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminContactItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
