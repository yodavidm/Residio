import { Component, inject } from '@angular/core';
import { Nav } from '../../core/nav/nav';
import { CasaCard } from '../home/components/casa-card/casa-card';
import { CasaDetailCard } from './components/casa-detail-card/casa-detail-card';
import { RouterLink } from '@angular/router';
import { IonBadge, IonIcon, IonLabel, IonItem, IonCard, IonContent, ToastController, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-casa-detail',
  imports: [Nav, CasaDetailCard, RouterLink, IonBadge, IonIcon, IonLabel, IonItem, IonCard, IonContent, IonButton],
  templateUrl: './casa-detail.html',
  styleUrl: './casa-detail.scss',
})
export class CasaDetail {
  private toastController = inject(ToastController);

  async copyToken() {
    await navigator.clipboard.writeText('A7X9BK2');

    const toast = await this.toastController.create({
      message: '¡Token copiado!',
      duration: 2000,
      position: 'top'
    });

    await toast.present();
  }
}
