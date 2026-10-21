import { Component, OnInit } from '@angular/core';
import { CasaCard } from './components/casa-card/casa-card';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonContent
} from '@ionic/angular';
@Component({
  selector: 'app-home',
  imports: [IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonContent,
    CasaCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.getMensajes();
    console.log(this.getMensajes);

  }

  mensajeTitulo: string = '';
  mensajeIncidencias: string = '';
  totalIncidencias: number = 3;

  claseTitulo: string = '';

  private getMensajes() {
    if (this.totalIncidencias === 0) {
      this.mensajeTitulo = 'TODO BAJO CONTROL';
      this.claseTitulo = 'azul';
      this.mensajeIncidencias = 'Todo en orden. Hoy puedes respirar tranquilo.';
    } else if (this.totalIncidencias <= 5) {
      this.mensajeTitulo = 'ALGUNAS COSAS POR RESOLVER';
      this.claseTitulo = 'naranja';
      this.mensajeIncidencias = 'Hay algunos asuntos pendientes.';
    } else {
      this.mensajeTitulo = 'TOCA PONERSE MANOS A LA OBRA';
      this.claseTitulo = 'rojo';
      this.mensajeIncidencias = 'Se acumulan las incidencias.';
    }
  }
}