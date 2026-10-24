import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCardContent, IonIcon, IonItem, IonBadge, IonLabel } from '@ionic/angular';
import { Casa } from '../../../../core/domain/Casa';
import { CasaService } from '../../../service/casa.service';

@Component({
  selector: 'app-casa-card',
  imports: [RouterLink, IonCardContent, IonIcon, IonItem, IonBadge, IonLabel],
  templateUrl: './casa-card.html',
  styleUrl: './casa-card.scss',
})
export class CasaCard implements OnInit {

  private casaService: CasaService = inject(CasaService);

  @Input() casa!: Casa;
  @Input() pendientes!:number;

  ngOnInit(): void {
  }


}
