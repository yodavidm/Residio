import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Casa } from '../../core/domain/Casa';
import { CasaRepositoryPort } from '../../application/ports/casa.repository.port';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CasaRepositoryImpl extends CasaRepositoryPort {

    private http: HttpClient = inject(HttpClient);

    private baseUrl: string = 'http://localhost:8080/casa';
    private baseUrlMovil: string = 'http://192.168.11.33:8080/casa';


    override findAll(): Observable<Casa[]> {
        //return this.http.get<Casa[]>(this.baseUrl);
        return this.http.get<Casa[]>(this.baseUrlMovil);
    }

    override findById(id: number): Observable<Casa> {
        //return this.http.get<Casa>(this.baseUrl + '/' + id);
        return this.http.get<Casa>(this.baseUrlMovil + '/' + id);
    }

    override getNumPendientes(id: number): Observable<number> {
        return this.http.get<number>(this.baseUrlMovil + '/incidencias/pendientes/' + id);
    }



}