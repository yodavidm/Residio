import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { CasaDetail } from './features/casa-detail/casa-detail';
import { AveriaDetail } from './features/averia-detail/averia-detail';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'detalle', component: CasaDetail },
    { path: 'averia', component: AveriaDetail }
];
