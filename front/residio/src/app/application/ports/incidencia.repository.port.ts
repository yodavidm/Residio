import { Observable } from 'rxjs/internal/Observable';
import { Incidencia } from '../../core/domain/Incidencia';
import { IncidenciaRequest } from '../../infrastructure/incidencia/request/incidencia-request';

export abstract class IncidenciaRepositoryPort {

    abstract findIncidenciasByCasaId(casaId: number): Observable<Incidencia[]>;
    abstract findById(id: number): Observable<Incidencia>;
    abstract resolve(id: number): Observable<Incidencia>;
    abstract create(request: IncidenciaRequest): Observable<Incidencia>;
    abstract findCasaIdByToken(token:string):Observable<number>;

}