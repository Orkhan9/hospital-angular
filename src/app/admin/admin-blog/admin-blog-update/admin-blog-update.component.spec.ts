import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogUpdateComponent } from './admin-blog-update.component';

describe('AdminBlogUpdateComponent', () => {
  let component: AdminBlogUpdateComponent;
  let fixture: ComponentFixture<AdminBlogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
