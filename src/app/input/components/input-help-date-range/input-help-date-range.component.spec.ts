import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHelpDateRangeComponent } from './input-help-date-range.component';

describe('InputHelpDateRangeComponent', () => {
  let component: InputHelpDateRangeComponent;
  let fixture: ComponentFixture<InputHelpDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHelpDateRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputHelpDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
