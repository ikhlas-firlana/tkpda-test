import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMinimumComponent } from './calculate-minimum.component';

describe('CalculateMinimumComponent', () => {
  let component: CalculateMinimumComponent;
  let fixture: ComponentFixture<CalculateMinimumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateMinimumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateMinimumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
