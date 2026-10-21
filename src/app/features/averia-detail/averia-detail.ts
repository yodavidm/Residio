import { Component } from '@angular/core';
import { Nav } from '../../core/nav/nav';
import { IonContent, IonBadge, IonButton, IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-averia-detail',
  imports: [Nav, IonContent, IonBadge, IonButton, IonIcon],
  templateUrl: './averia-detail.html',
  styleUrl: './averia-detail.scss',
})
export class AveriaDetail {

  foto: string | null = null;
}
