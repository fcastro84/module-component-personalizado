import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHelpDateComponent } from './input-help-date.component';

describe('InputHelpDateComponent', () => {
  let component: InputHelpDateComponent;
  let fixture: ComponentFixture<InputHelpDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHelpDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputHelpDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
