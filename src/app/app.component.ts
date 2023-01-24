import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Attributes2 } from './input2/interfaces/input.interface';
import { AttributesDateRange } from './input2/interfaces/input-date-range.interface';
import { Attributes } from './input/interfaces/input-help.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testing-angular-material';

  form: FormGroup;
  form2: FormGroup;

  values: Attributes = {
    texto: 'esto es u texto de ejemplo por Api',
    id: 'usuario',
    label: 'Usuario Api'
  }

  values2: Attributes2[] = [{
    texto: 'esto es u texto de ejemplo',
    id: 'usuario2',
    name: 'usuario2',
    label: 'Usuario'
  },
  {
    texto: 'Fecha de planificación',
    id: 'datep',
    name: 'fecha',
    label: 'Fecha'
  }
]

dateRange: AttributesDateRange = {
  texto: 'Deberá seleccionar el rango de Fecha de contratación',
  id: 'datepr',
  name1: 'startFecha',
  name2: 'endFecha',
  label: 'Seleccione rango de fecha',
  group: 'fechaGroup'
}



  constructor( private fb: FormBuilder ) {
    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.form2 = this.fb.group({
      usuario2: ['', [Validators.required, Validators.minLength(5)]],
      fecha: ['', Validators.required],
      fechaGroup: this.fb.group({
        startFecha: ['', Validators.required],
        endFecha: ['', Validators.required],
      })
    });
  }
  ngOnInit(): void {
  }

  guardar(){
    console.log(this.form);
  }

  guardar2(){
    console.log(this.form2);
  }


}
