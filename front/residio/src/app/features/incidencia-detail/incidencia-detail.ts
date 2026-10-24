import { Component, inject, OnInit } from '@angular/core';
import { Nav } from '../../core/nav/nav';
import { IonContent, IonBadge, IonIcon, IonFooter, IonToolbar, IonButton, ToastController } from '@ionic/angular';
import { IncidenciaService } from '../service/incidencia.service';
import { ActivatedRoute } from '@angular/router';
import { Incidencia } from '../../core/domain/Incidencia';

@Component({
  selector: 'app-incidencia-detail',
  imports: [Nav, IonContent, IonBadge, IonIcon, IonFooter, IonToolbar, IonButton],
  templateUrl: './incidencia-detail.html',
  styleUrl: './incidencia-detail.scss',
})
export class IncidenciaDetail implements OnInit {

  ngOnInit(): void {
    this.getIncidencia();
  }

  private route: ActivatedRoute = inject(ActivatedRoute);
  private incidenciaService: IncidenciaService = inject(IncidenciaService);
  private toastController = inject(ToastController);

  private id = Number(this.route.snapshot.paramMap.get('id'));

  incidencia: Incidencia = {
    id: 0,
    titulo: '',
    descripcion: '',
    estado: '',
    estancia: '',
    casaId: 0,
    createdAt: new Date()
  };


  foto: string | null = null;
  claseEstado: string = '';
  resuelto: boolean = false;

  getIncidencia() {
    this.incidenciaService.getIndicendiaById(this.id).subscribe({
      next: (data) => {
        this.incidencia = data;
        this.getStatusColor();
      }
    })
  }

  resolve() {
    this.incidenciaService.resolve(this.id).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Incidencia marcada como resuelta',
          duration: 2500,
          position: 'top',
          cssClass: 'toast-residio',
          icon: 'checkmark-circle-outline'
        });

        await toast.present();
        this.resuelto = true;
        this.incidencia.estado = 'Resuelta';
        this.getStatusColor();
      }
    });
  }

  getStatusColor() {
    if (this.incidencia.estado === 'Pendiente') {
      this.claseEstado = "pendiente"
    } else {
      this.claseEstado = "resuelta";
      this.resuelto = true;
    }
  }



}
