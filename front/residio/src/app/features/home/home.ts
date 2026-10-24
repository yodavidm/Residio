import { Component, inject, Input, OnInit } from '@angular/core';
import { CasaCard } from './components/casa-card/casa-card';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonContent
} from '@ionic/angular';
import { Casa } from '../../core/domain/Casa';
import { CasaService } from '../service/casa.service';
@Component({
  selector: 'app-home',
  imports: [
    IonToolbar,
    IonTitle,
    IonButton,
    IonContent,
    CasaCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private casaService: CasaService = inject(CasaService);

  ngOnInit(): void {
    this.getMensajes();
    this.getCasas();
  }

  casas: Casa[] = [];

  mensajeTitulo: string = '';
  mensajeIncidencias: string = '';
  totalIncidencias: number = 3;

  claseTitulo: string = '';

  @Input() casa!: Casa;

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

  getCasas() {
    this.casaService.getCasas().subscribe({
      next: (data) => {
        this.casas = data;
      }
    })
  }
}