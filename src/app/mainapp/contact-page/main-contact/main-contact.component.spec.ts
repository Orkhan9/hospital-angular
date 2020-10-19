import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactComponent } from './main-contact.component';

describe('MainContactComponent', () => {
  let component: MainContactComponent;
  let fixture: ComponentFixture<MainContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
