import { Injectable, inject } from "@angular/core";
import { IncidenciaRepositoryPort } from "../../application/ports/incidencia.repository.port";
import { Observable } from "rxjs";
import { Incidencia } from "../../core/domain/Incidencia";
import { IncidenciaRequest } from "../../infrastructure/incidencia/request/incidencia-request";

@Injectable({ providedIn: 'root' })
export class IncidenciaService {

    private incidenciaRepositoryPort: IncidenciaRepositoryPort = inject(IncidenciaRepositoryPort);

    getIncidenciasByCasaId(casaId: number): Observable<Incidencia[]> {
        return this.incidenciaRepositoryPort.findIncidenciasByCasaId(casaId);
    }

    getIndicendiaById(id: number): Observable<Incidencia> {
        return this.incidenciaRepositoryPort.findById(id);
    }

    resolve(id:number): Observable<Incidencia>{
        return this.incidenciaRepositoryPort.resolve(id);
    }

    create(request:IncidenciaRequest):Observable<Incidencia>{
        return this.incidenciaRepositoryPort.create(request);
    }

    getCasaIdByToken(token:string):Observable<number>{
        return this.incidenciaRepositoryPort.findCasaIdByToken(token);
    }


}