import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CrearCabeceraComponent } from './crear-cabecera/crear-cabecera.component';
import {MatInputModule} from '@angular/material/input';
import {TextoInputComponent } from './texto-input/texto-input.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TextoInputPrimengComponent } from './texto-input-primeng/texto-input-primeng.component';
import {CrearDetalleComponent } from './crear-detalle/crear-detalle.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { TablaPrimengComponent } from './tabla-primeng/tabla-primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    CrearCabeceraComponent,
    TextoInputComponent,
    TextoInputPrimengComponent,
    CrearDetalleComponent,
    TablaPrimengComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
