import { Component } from '@angular/core';
import { Nav } from '../../core/nav/nav';
import { CasaCard } from '../home/components/casa-card/casa-card';
import { CasaDetailCard } from './components/casa-detail-card/casa-detail-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-casa-detail',
  imports: [Nav, CasaDetailCard, RouterLink],
  templateUrl: './casa-detail.html',
  styleUrl: './casa-detail.scss',
})
export class CasaDetail {

}
