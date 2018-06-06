import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paciente} from "../paciente";
import {Medicamento} from "../medicamento";

@Component({
  selector: 'app-crear-cabecera',
  templateUrl: './crear-cabecera.component.html',
  styleUrls: ['./crear-cabecera.component.css']
})
export class CrearCabeceraComponent implements OnInit {

  @Output() pacienteCreado: EventEmitter<Paciente> = new EventEmitter<Paciente>();
  paciente: Paciente;

  constructor() {
    this.paciente =  new Paciente();
    this.paciente.Medicamentos =  [];
  }

  ngOnInit() {
  }

  guardarEnArreglo() {
    //this.paciente.Id =
    console.log(JSON.stringify(this.paciente));
    this.pacienteCreado.emit(this.paciente);
    this.paciente = new Paciente();
    this.paciente.Medicamentos =  [];
  }

  limpiar() {
    this.paciente = new Paciente();
    this.paciente.Medicamentos =  [];
  }
}
