import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesMapsComponent } from './schedules-maps.component';

describe('SchedulesMapsComponent', () => {
  let component: SchedulesMapsComponent;
  let fixture: ComponentFixture<SchedulesMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulesMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
