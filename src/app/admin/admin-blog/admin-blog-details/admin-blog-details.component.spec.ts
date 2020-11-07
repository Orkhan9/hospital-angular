import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogDetailsComponent } from './admin-blog-details.component';

describe('AdminBlogDetailsComponent', () => {
  let component: AdminBlogDetailsComponent;
  let fixture: ComponentFixture<AdminBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
