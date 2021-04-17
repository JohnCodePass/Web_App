import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNavBtnComponent } from './service-nav-btn.component';

describe('ServiceNavBtnComponent', () => {
  let component: ServiceNavBtnComponent;
  let fixture: ComponentFixture<ServiceNavBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceNavBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNavBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
