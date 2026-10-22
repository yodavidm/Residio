import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IncidenciaRequest } from '../../infrastructure/incidencia/request/incidencia-request';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule, IonIcon],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {

  incidencia: IncidenciaRequest = {
    titulo: '',
    descripcion: '',
    estancia: ''
  };

  foto: File | null = null;

  seleccionarFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    this.foto = input.files?.[0] ?? null;
  }

  registrarIncidencia(form: NgForm) {
    if (form.invalid) return;

    console.log(this.incidencia);
    console.log(this.foto);
  }
}
