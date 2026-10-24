import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IncidenciaRequest } from '../../infrastructure/incidencia/request/incidencia-request';
import { IonIcon, ToastController } from '@ionic/angular';
import { IncidenciaService } from '../../features/service/incidencia.service';
import { Incidencia } from '../domain/Incidencia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule, IonIcon],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario implements OnInit {


  private incidenciaService: IncidenciaService = inject(IncidenciaService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private toastController: ToastController = inject(ToastController);


  private token = this.route.snapshot.paramMap.get('token');

  ngOnInit(): void {
    this.getCasaIdByToken();
    console.log(this.request);

  }

  request: IncidenciaRequest = {
    titulo: '',
    descripcion: '',
    estancia: '',
    foto: '',
    casaId: 0
  };

  incidencia: Incidencia = {
    id: 0,
    titulo: '',
    descripcion: '',
    estado: '',
    estancia: '',
    createdAt: new Date(),
    casaId: 0,
    foto: ''
  }

  foto: File | null = null;

  seleccionarFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    this.foto = input.files?.[0] ?? null;
  }

  getCasaIdByToken() {
    const token = this.route.snapshot.paramMap.get('token');

    this.incidenciaService.getCasaIdByToken(token!).subscribe({
      next: (data) => {
        this.request.casaId = data;
      }
    })
  }

  registrarIncidencia(form: NgForm) {
    if (form.invalid) return;

    this.incidenciaService.create(this.request).subscribe({
      next: async (data) => {
        this.incidencia = data;
        const toast = await this.toastController.create({
          message: '¡Incidencia registrada! El propietario ha sido notificado.',
          duration: 1200,
          position: 'top',
          cssClass: 'toast-residio',
          icon: 'checkmark-circle-outline'
        });

        await toast.present();
        form.reset();
      }
    })
  }
}
