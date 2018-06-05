import { Component } from '@angular/core';
import {Paciente} from "./paciente";
import {Medicamento} from "./medicamento";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arregloPacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente;
  arregloMedicamentos: Medicamento[] = [];

  constructor() {
    this.pacienteSeleccionado = new Paciente();
    this.pacienteSeleccionado.Medicamentos =  [];
  }
  agregarPaciente(paciente) {
    console.log(JSON.stringify(this.arregloPacientes));
    this.arregloPacientes.push(paciente);
    console.log(JSON.stringify(this.arregloPacientes));
  }
  agregarMedicamento(medicamento) {
    console.log(JSON.stringify(this.arregloMedicamentos));
    this.pacienteSeleccionado.Medicamentos.push(medicamento);
    console.log(JSON.stringify(this.arregloMedicamentos));
  }

  seleccionarCabecera(paciente) {
    this.pacienteSeleccionado = new Paciente();
    console.log("Selecion: " + JSON.stringify(paciente));
    this.pacienteSeleccionado =  paciente;

  }
}
