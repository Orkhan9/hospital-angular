import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogItemComponent } from './admin-blog-item.component';

describe('AdminBlogItemComponent', () => {
  let component: AdminBlogItemComponent;
  let fixture: ComponentFixture<AdminBlogItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
