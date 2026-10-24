import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IonCard, IonCardContent, IonBadge } from '@ionic/angular';
import { Incidencia } from '../../../../core/domain/Incidencia';

@Component({
  selector: 'app-casa-detail-card',
  imports: [IonCard, IonCardContent, IonBadge],
  templateUrl: './casa-detail-card.html',
  styleUrl: './casa-detail-card.scss',
})
export class CasaDetailCard implements OnChanges {
  
  ngOnChanges(): void {
    this.getStatusColor();
  }
  @Input() incidencia!: Incidencia
  public claseEstado: string = '';

  getStatusColor(): void {
    if (this.incidencia.estado === 'Pendiente') {
      this.claseEstado = 'pendiente';
    } else {
      this.claseEstado = 'resuelta'
    }
  }
}
