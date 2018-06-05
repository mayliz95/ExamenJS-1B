import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-texto-input-primeng',
  templateUrl: './texto-input-primeng.component.html',
  styleUrls: ['./texto-input-primeng.component.css']
})
export class TextoInputPrimengComponent implements OnInit {

  @Input() tituloInput: string;
  constructor() { }

  ngOnInit() {
  }

}
