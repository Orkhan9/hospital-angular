import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAboutUpdateComponent } from './admin-about-update.component';

describe('AdminAboutUpdateComponent', () => {
  let component: AdminAboutUpdateComponent;
  let fixture: ComponentFixture<AdminAboutUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAboutUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAboutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
