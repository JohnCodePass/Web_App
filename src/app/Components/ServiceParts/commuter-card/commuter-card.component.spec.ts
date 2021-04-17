import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuterCardComponent } from './commuter-card.component';

describe('CommuterCardComponent', () => {
  let component: CommuterCardComponent;
  let fixture: ComponentFixture<CommuterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommuterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
