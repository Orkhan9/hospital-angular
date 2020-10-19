import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeatureComponent } from './main-feature.component';

describe('MainFeatureComponent', () => {
  let component: MainFeatureComponent;
  let fixture: ComponentFixture<MainFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
