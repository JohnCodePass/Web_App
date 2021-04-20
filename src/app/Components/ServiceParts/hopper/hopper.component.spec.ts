import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopperComponent } from './hopper.component';

describe('HopperComponent', () => {
  let component: HopperComponent;
  let fixture: ComponentFixture<HopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
