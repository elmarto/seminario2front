import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { Profession } from '../interfaces/models';
import { ProfessionalProfessionCreateRequest, ProfessionalProfessionDeleteRequest } from '../interfaces/prospects';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private httpClient: HttpClient) { }

  findProfessionsByProfessional(): Observable<Profession[]> {
    return this.httpClient.get<ResponseMetadata>(environment.apiUrl + '/professionals.php/getProfessionalProfessions')
              .pipe(map(response => response.status.code === 200 ? response.values : []));
  }

  addProfession(professionalProfessionCreateRequest: ProfessionalProfessionCreateRequest): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<boolean>(environment.apiUrl + '/professionals.php/insertProfessionalProfession', professionalProfessionCreateRequest);
  }

  removeProfession(professionalProfessionDeleteRequest: ProfessionalProfessionDeleteRequest): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.delete<boolean>(environment.apiUrl + '/professionals.php/deleteProfessionalProfession/' + professionalProfessionDeleteRequest.professionID);
  }
}
