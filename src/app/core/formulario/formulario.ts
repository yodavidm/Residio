import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Averia } from '../../infrastructure/averia/request/averia';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {

  averia: Averia = {
    titulo: '',
    descripcion: '',
    estancia: ''
  };

  foto: File | null = null;

  seleccionarFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    this.foto = input.files?.[0] ?? null;
  }

  registrarAveria(form: NgForm) {
    if (form.invalid) return;

    console.log(this.averia);
    console.log(this.foto);
  }
}
