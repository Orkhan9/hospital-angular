import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactMapComponent } from './main-contact-map.component';

describe('MainContactMapComponent', () => {
  let component: MainContactMapComponent;
  let fixture: ComponentFixture<MainContactMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContactMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
