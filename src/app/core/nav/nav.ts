import { Component } from '@angular/core';
import { IonButtons, IonBackButton, IonToolbar } from '@ionic/angular';


@Component({
  selector: 'app-nav',
  imports: [ IonButtons, IonBackButton, IonToolbar],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
}
