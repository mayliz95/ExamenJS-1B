import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-texto-input',
  templateUrl: './texto-input.component.html',
  styleUrls: ['./texto-input.component.css']
})
export class TextoInputComponent implements OnInit {

  @Input() tituloInput: string;
  valor: string;

  constructor() { }

  ngOnInit() {
  }
}
