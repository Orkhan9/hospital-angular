import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogCreateComponent } from './admin-blog-create.component';

describe('AdminBlogCreateComponent', () => {
  let component: AdminBlogCreateComponent;
  let fixture: ComponentFixture<AdminBlogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
