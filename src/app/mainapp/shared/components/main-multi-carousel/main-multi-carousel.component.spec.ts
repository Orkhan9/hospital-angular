import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMultiCarouselComponent } from './main-multi-carousel.component';

describe('MainMultiCarouselComponent', () => {
  let component: MainMultiCarouselComponent;
  let fixture: ComponentFixture<MainMultiCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMultiCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMultiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
