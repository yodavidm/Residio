import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { CasaDetail } from './features/casa-detail/casa-detail';
import { IncidenciaDetail } from './features/incidencia-detail/incidencia-detail';
import { Formulario } from './core/formulario/formulario';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'casa', component: CasaDetail },
    { path: 'incidencia', component: IncidenciaDetail },
    { path: 'formulario/:token', component: Formulario },
    { path: 'casa/:id', component: CasaDetail },
    { path: 'casa/:id/incidencia/:id', component: IncidenciaDetail }
];
