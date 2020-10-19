import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeGalleryComponent } from './main-home-gallery.component';

describe('MainHomeGalleryComponent', () => {
  let component: MainHomeGalleryComponent;
  let fixture: ComponentFixture<MainHomeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
