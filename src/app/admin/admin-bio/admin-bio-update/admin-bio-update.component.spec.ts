import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBioUpdateComponent } from './admin-bio-update.component';

describe('AdminBioUpdateComponent', () => {
  let component: AdminBioUpdateComponent;
  let fixture: ComponentFixture<AdminBioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBioUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
