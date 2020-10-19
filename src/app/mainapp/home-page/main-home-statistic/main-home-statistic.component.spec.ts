import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeStatisticComponent } from './main-home-statistic.component';

describe('MainHomeStatisticComponent', () => {
  let component: MainHomeStatisticComponent;
  let fixture: ComponentFixture<MainHomeStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
