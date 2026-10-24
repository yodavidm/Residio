import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular';
import { routes } from './app.routes';
import { CasaRepositoryPort } from './application/ports/casa.repository.port';
import { CasaRepositoryImpl } from './infrastructure/casa/casa.repository.impl';
import { IncidenciaRepositoryPort } from './application/ports/incidencia.repository.port';
import { IncidenciaRepositoryImpl } from './infrastructure/incidencia/incidencia.repository.impl';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIonicAngular({}),
    provideHttpClient(),
    {
      provide: CasaRepositoryPort,
      useClass: CasaRepositoryImpl
    },
    {
      provide: IncidenciaRepositoryPort,
      useClass: IncidenciaRepositoryImpl
    }
  ]
};