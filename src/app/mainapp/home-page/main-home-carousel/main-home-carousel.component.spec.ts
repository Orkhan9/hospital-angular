import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeCarouselComponent } from './main-home-carousel.component';

describe('MainHomeCarouselComponent', () => {
  let component: MainHomeCarouselComponent;
  let fixture: ComponentFixture<MainHomeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
