import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-detalle',
  templateUrl: './crear-detalle.component.html',
  styleUrls: ['./crear-detalle.component.css']
})
export class CrearDetalleComponent implements OnInit {

  ArregloAtributosDetalle = ['gramosAIngerir','nombre','composicion','usadoPara', 'fechaCaducidad', 'numeroPastillas' , 'pacienteId'];
  constructor() { }

  ngOnInit() {
  }

}
