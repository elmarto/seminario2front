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
    return this.httpClient.get<Profession[]>(environment.apiUrl + '/professionals.php/getProfessionsByUserID');
  }

  addProfession(professionalProfessionCreateRequest: ProfessionalProfessionCreateRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(environment.apiUrl + '/professionals.php/insertProfession', professionalProfessionCreateRequest);
  }

  removeProfession(professionalProfessionDeleteRequest: ProfessionalProfessionDeleteRequest): Observable<boolean> {
    return this.httpClient.post<boolean>(environment.apiUrl + '/professionals.php/deleteProfession', professionalProfessionDeleteRequest);
  }
}
