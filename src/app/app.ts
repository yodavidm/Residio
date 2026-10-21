import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './core/nav/nav';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('residio');
}
