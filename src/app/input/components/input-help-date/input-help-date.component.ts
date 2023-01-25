import {Component, Input, Self, EventEmitter, Output} from '@angular/core';
import { ControlValueAccessor, NgControl, Validators, FormGroup } from '@angular/forms';
import { Attributes } from '../../interfaces/input-help.interface';
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;

@Component({
  selector: 'app-input-help-date',
  templateUrl: './input-help-date.component.html',
  styleUrls: ['./input-help-date.component.scss']
})
export class InputHelpDateComponent implements ControlValueAccessor {
  @Input() values!: Attributes;
  @Input() form!: FormGroup;
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  changed = (value: string) => {};
  onTouch = () => {};
  isDisabled!: boolean;

  constructor(@Self() public controlDir: NgControl){
    controlDir.valueAccessor = this;

  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    let validators = control?.validator
      ? [control.validator, Validators.required]
      : Validators.required;
    control?.setValidators(validators);
  }
  writeValue(value: string): void {
    //this.value = value;
    value && this.controlDir?.control?.setValue(value, { emitEvent: false });
  }

  onChange( event: Event ): void {
    const value = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }


  mostrar(id: string, texto: string){
    tippy(id, {
      interactive: true,
      appendTo: () => document.body,
      content: texto,
      arrow: true,
      boundary: 'scrollParent',
      allowHTML: true,
      theme: 'light-border',
      trigger: 'click',
      maxWidth: 500,
    });

  }

}
