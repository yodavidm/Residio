import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Casa } from "../../core/domain/Casa";
import { CasaRepositoryPort } from "../../application/ports/casa.repository.port";

@Injectable({ providedIn: 'root' })
export class CasaService {

    private casaRepositoryPort: CasaRepositoryPort = inject(CasaRepositoryPort);

    getCasas(): Observable<Casa[]> {
        return this.casaRepositoryPort.findAll();
    }

    getCasaById(id: number): Observable<Casa> {
        return this.casaRepositoryPort.findById(id);
    }

}