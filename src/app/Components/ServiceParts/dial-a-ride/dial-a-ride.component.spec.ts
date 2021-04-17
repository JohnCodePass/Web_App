import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialARideComponent } from './dial-a-ride.component';

describe('DialARideComponent', () => {
  let component: DialARideComponent;
  let fixture: ComponentFixture<DialARideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialARideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialARideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
