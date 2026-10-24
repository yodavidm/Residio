import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../../core/domain/Casa';
import { CasaRepositoryPort } from '../../application/ports/casa.repository.port';
import { HttpClient } from '@angular/common/http';
import { IncidenciaRepositoryPort } from '../../application/ports/incidencia.repository.port';
import { Incidencia } from '../../core/domain/Incidencia';


@Injectable({
    providedIn: 'root'
})
export class IncidenciaRepositoryImpl extends IncidenciaRepositoryPort {

    private http: HttpClient = inject(HttpClient);

    private baseUrl: string = 'http://localhost:8080/incidencias';
    private baseUrlMovil: string = 'http://192.168.11.33:8080/incidencias';
 

    override findIncidenciasByCasaId(id: number): Observable<Incidencia[]> {
        //return this.http.get<Incidencia[]>(this.baseUrl + '/casa/' + id);
        return this.http.get<Incidencia[]>(this.baseUrlMovil + '/casa/' + id);
    }

    override findById(id: number): Observable<Incidencia> {
        //return this.http.get<Incidencia>(this.baseUrl + '/' + id);
        return this.http.get<Incidencia>(this.baseUrlMovil + '/' + id);

    }

    override resolve(id: number): Observable<Incidencia> {
        //return this.http.put<Incidencia>(this.baseUrl + '/resolve/' + id, null);
        return this.http.put<Incidencia>(this.baseUrlMovil + '/resolve/' + id, null);

    }



}