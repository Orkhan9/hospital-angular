import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchboxComponent } from './main-searchbox.component';

describe('MainSearchboxComponent', () => {
  let component: MainSearchboxComponent;
  let fixture: ComponentFixture<MainSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSearchboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
