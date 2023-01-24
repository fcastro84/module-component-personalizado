import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';
import { AttributesDateRange } from '../../interfaces/input-date-range.interface';
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;



@Component({
  selector: 'app-input-date-range',
  templateUrl: './input-date-range.component.html',
  styleUrls: ['./input-date-range.component.scss']
})
export class InputDateRangeComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() values!: AttributesDateRange;


  constructor(){
 console.log(this.form);
 console.log(this.values);
  }
  ngOnInit(): void {
    console.log(this.form);
    console.log(this.values);
    console.log(this.form.controls);
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
