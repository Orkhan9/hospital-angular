import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPackagesComponent } from './main-packages.component';

describe('MainPackagesComponent', () => {
  let component: MainPackagesComponent;
  let fixture: ComponentFixture<MainPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
