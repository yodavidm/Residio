import { Observable } from 'rxjs/internal/Observable';
import { Incidencia } from '../../core/domain/Incidencia';

export abstract class IncidenciaRepositoryPort {

    abstract findIncidenciasByCasaId(casaId: number): Observable<Incidencia[]>;
    abstract findById(id: number): Observable<Incidencia>;
    abstract resolve(id: number): Observable<Incidencia>;

}