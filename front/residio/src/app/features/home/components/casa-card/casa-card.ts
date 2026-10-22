import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCardContent, IonIcon, IonItem, IonBadge, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-casa-card',
  imports: [RouterLink, IonCardContent, IonIcon, IonItem, IonBadge, IonLabel],
  templateUrl: './casa-card.html',
  styleUrl: './casa-card.scss',
})
export class CasaCard {

}
