import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCardContent, IonIcon, IonItem, IonBadge, IonLabel } from '@ionic/angular';
import { Casa } from '../../../../core/domain/Casa';

@Component({
  selector: 'app-casa-card',
  imports: [RouterLink, IonCardContent, IonIcon, IonItem, IonBadge, IonLabel],
  templateUrl: './casa-card.html',
  styleUrl: './casa-card.scss',
})
export class CasaCard {
  
  @Input() casa!: Casa;

}
