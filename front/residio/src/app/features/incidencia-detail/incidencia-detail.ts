import { Component } from '@angular/core';
import { Nav } from '../../core/nav/nav';
import { IonContent, IonBadge, IonIcon, IonFooter, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-incidencia-detail',
  imports: [Nav, IonContent, IonBadge, IonIcon, IonFooter, IonToolbar],
  templateUrl: './incidencia-detail.html',
  styleUrl: './incidencia-detail.scss',
})
export class IncidenciaDetail {

  foto: string | null = null;
}
