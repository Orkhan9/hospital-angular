import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlogComponent } from './main-blog.component';

describe('MainBlogComponent', () => {
  let component: MainBlogComponent;
  let fixture: ComponentFixture<MainBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
