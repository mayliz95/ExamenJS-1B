import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CrearCabeceraComponent } from './crear-cabecera/crear-cabecera.component';
import {MatInputModule} from '@angular/material/input';
import { TextoInputComponent } from './texto-input/texto-input.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    CrearCabeceraComponent,
    TextoInputComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
