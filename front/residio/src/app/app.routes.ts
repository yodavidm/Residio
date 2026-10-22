import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { CasaDetail } from './features/casa-detail/casa-detail';
import { IncidenciaDetail } from './features/incidencia-detail/incidencia-detail';
import { Formulario } from './core/formulario/formulario';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'detalle', component: CasaDetail },
    { path: 'incidencia', component: IncidenciaDetail },
    { path: 'formulario', component: Formulario }
];
