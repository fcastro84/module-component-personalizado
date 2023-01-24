import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputHelp2Component} from "./components/input-help2/input-help2.component";
import {MaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputDateRangeComponent } from './components/input-date-range/input-date-range.component';



@NgModule({
  declarations: [
    InputHelp2Component,
    InputDateComponent,
    InputDateRangeComponent
  ],
  exports: [
    InputHelp2Component,
    InputDateComponent,
    InputDateRangeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class Input2Module { }
