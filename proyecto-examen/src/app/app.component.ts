import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arregloPrueba = [];
  arregloPacientes = [{
    nombres: 'May',
    apellidos: 'Rosero',
    fechaNacimiento: '16/05/95',
    hijos: 0,
    tieneSeguro: true,
    medicamentos: [{
      gramosAIngerir: 100,
      nombre: 'dfgdh',
      composicion: 'fgfgh',
      usadoPara: 'gripe',
      fechaCaducidad: '12/04/2018',
      numeroPastillas: 3,
      pacienteId: 1
    }]
  }];


}
