import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanGoComponent } from './van-go.component';

describe('VanGoComponent', () => {
  let component: VanGoComponent;
  let fixture: ComponentFixture<VanGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanGoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
