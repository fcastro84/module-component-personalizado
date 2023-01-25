import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputHelpComponent} from "./components/input-help/input-help.component";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputHelpDateComponent } from './components/input-help-date/input-help-date.component';
import { InputHelpDateRangeComponent } from './components/input-help-date-range/input-help-date-range.component';



@NgModule({
  declarations: [
    InputHelpComponent,
    InputHelpDateComponent,
    InputHelpDateRangeComponent
  ],
  exports: [
    InputHelpComponent,
    InputHelpDateComponent,
    InputHelpDateRangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class InputModule { }
