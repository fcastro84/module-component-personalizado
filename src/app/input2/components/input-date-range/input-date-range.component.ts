import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  }
  ngOnInit(): void {
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
