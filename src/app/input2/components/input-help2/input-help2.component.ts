import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Attributes2 } from '../../interfaces/input.interface';
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;


@Component({
  selector: 'app-input-help2',
  templateUrl: './input-help2.component.html',
  styleUrls: ['./input-help2.component.scss'],
})
export class InputHelp2Component {

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
