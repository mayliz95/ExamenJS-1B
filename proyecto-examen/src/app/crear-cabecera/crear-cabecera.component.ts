import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cabecera',
  templateUrl: './crear-cabecera.component.html',
  styleUrls: ['./crear-cabecera.component.css']
})
export class CrearCabeceraComponent implements OnInit {

  arregloAtributos = ['Nombres', 'Apellidos', 'Fecha Nacimiento', 'Hijos', 'Tiene seguro'];

  constructor() { }

  ngOnInit() {
  }

  guardarEnArreglo(nombre: string, apelidos: string, fechaNacimiento: string, hijos: number, tieneSeguro: boolean) {

  }

}
