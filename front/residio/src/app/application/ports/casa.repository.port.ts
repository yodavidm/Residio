import { Observable } from 'rxjs/internal/Observable';
import { Casa } from '../../core/domain/Casa';

export abstract class CasaRepositoryPort {

    abstract findAll(): Observable<Casa[]>;
    abstract findById(id:number): Observable<Casa>
    abstract getNumPendientes(id:number):Observable<number>


}