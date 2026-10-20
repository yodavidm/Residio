import { Component } from '@angular/core';
import { CasaCard } from './components/casa-card/casa-card';

@Component({
  selector: 'app-home',
  imports: [CasaCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
