import { Component, inject, Input } from '@angular/core';
import { Nav } from '../../core/nav/nav';
import { CasaCard } from '../home/components/casa-card/casa-card';
import { CasaDetailCard } from './components/casa-detail-card/casa-detail-card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonBadge, IonIcon, IonLabel, IonItem, IonCard, IonContent, ToastController, IonButton, IonPopover, IonList } from '@ionic/angular';
import { Casa } from '../../core/domain/Casa';
import { CasaService } from '../service/casa.service';
import { IncidenciaService } from '../service/incidencia.service';
import { Incidencia } from '../../core/domain/Incidencia';

@Component({
  selector: 'app-casa-detail',
  imports: [Nav, CasaDetailCard, RouterLink, IonIcon, IonLabel, IonItem, IonCard, IonContent, IonPopover, IonList],
  templateUrl: './casa-detail.html',
  styleUrl: './casa-detail.scss',
})
export class CasaDetail {

  private toastController = inject(ToastController);
  private route = inject(ActivatedRoute);
  private casaService = inject(CasaService);
  private incidenciaService = inject(IncidenciaService);

  private casaId = Number(this.route.snapshot.paramMap.get('id'));

  casa: Casa = {
    id: 0,
    direccion: '',
    inquilinos: 0,
    token: ''
  };

  incidencias: Incidencia[] = [];
  filtro: string = 'Todas';
  popoverAbierto: boolean = false;

  @Input() incidencia!: Incidencia;

  ngOnInit() {
    this.getCasaById();
    this.getIncidenciasByCasaId();
  }

  //al volver atrás a esta vista
  ionViewWillEnter() {
    this.getIncidenciasByCasaId();
  }

  async copyToken() {
    await navigator.clipboard.writeText('http://localhost:4200/formulario/' + this.casa.token);

    const toast = await this.toastController.create({
      message: 'Enlace copiado en el portapapeles',
      duration: 1200,
      position: 'top',
      cssClass: 'toast-residio',
      icon: 'checkmark-circle-outline'
    });

    await toast.present();
  }

  getCasaById() {
    this.casaService.getCasaById(this.casaId).subscribe({
      next: (data) => {
        this.casa = data;
      }
    })
  }

  getIncidenciasByCasaId() {
    this.incidenciaService.getIncidenciasByCasaId(this.casaId).subscribe({
      next: (data) => {
        this.incidencias = data;
      }
    })
  }

  filtrar(estado: string, popover: IonPopover) {
    this.filtro = estado;
    popover.dismiss();
  }

  get incidenciasFiltradas() {
    if (this.filtro === 'Todas') {
      return this.incidencias;
    }

    return this.incidencias.filter(
      incidencia => incidencia.estado === this.filtro
    );
  }

}
