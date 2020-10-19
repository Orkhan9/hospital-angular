import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBreadcrumbHeaderComponent } from './main-breadcrumb-header.component';

describe('MainBreadcrumbHeaderComponent', () => {
  let component: MainBreadcrumbHeaderComponent;
  let fixture: ComponentFixture<MainBreadcrumbHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBreadcrumbHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBreadcrumbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
