import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonButtons, IonBackButton, IonToolbar, IonHeader } from '@ionic/angular';


@Component({
  selector: 'app-nav',
  imports: [ IonButtons, IonBackButton, IonToolbar, IonHeader],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  private location = inject(Location);

  volver() {
    this.location.back();
  }
}
