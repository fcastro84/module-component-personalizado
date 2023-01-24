import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Attributes2 } from '../../interfaces/input.interface';
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;


@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

  @Input() form!: FormGroup;
  @Input() values!: Attributes2;


  constructor(){

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
