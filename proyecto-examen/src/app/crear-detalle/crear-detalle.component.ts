import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Paciente} from "../paciente";
import {Medicamento} from "../medicamento";

@Component({
  selector: 'app-crear-detalle',
  templateUrl: './crear-detalle.component.html',
  styleUrls: ['./crear-detalle.component.css']
})
export class CrearDetalleComponent implements OnInit {

  @Output() medicamentoCreado: EventEmitter<Medicamento> = new EventEmitter<Medicamento>();
  medicamento: Medicamento;

  constructor() {
    this.medicamento = new Medicamento();
  }

  ngOnInit() {
  }

  guardarEnArreglo() {
    this.medicamentoCreado.emit(this.medicamento);
    this.medicamento = new Medicamento();
  }

}
