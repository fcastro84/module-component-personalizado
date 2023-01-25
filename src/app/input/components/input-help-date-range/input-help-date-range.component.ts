import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {AttributesDateRangeHelp} from "../../interfaces/input-help-date-range.interface";
import {AttributesDateRange} from "../../../input2/interfaces/input-date-range.interface";
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;

@Component({
  selector: 'app-input-help-date-range',
  templateUrl: './input-help-date-range.component.html',
  styleUrls: ['./input-help-date-range.component.scss']
})
export class InputHelpDateRangeComponent implements OnInit {

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
