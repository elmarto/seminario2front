import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { ScoreRequest } from 'app/shared/interfaces/prospects';

@Injectable()
export class ScoreService  {
  constructor(private httpClient: HttpClient) { }

  getClientScores(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiUrl}/clientScores.php/getClientScores`);
  }

  getClientPendingScores(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiUrl}/clientScores.php/getClientPendingScores`);
  }

  setClientScores(request: ScoreRequest): Observable<any> {
    return this.httpClient.post<any>(`${env.apiUrl}/clientScores.php/insertClientScore`, request);
  }

  getProfessionalScores(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiUrl}/professionalScores.php/getProfessionalScores`);
  }

  getProfessionalPendingScores(): Observable<any> {
    return this.httpClient.get<any>(`${env.apiUrl}/professionalScores.php/getProfessionalPendingScores`);
  }

  setProfessionalScores(request: ScoreRequest): Observable<any> {
    return this.httpClient.post<any>(`${env.apiUrl}/professionalScores.php/insertProfessionalScore`, request);
  }

}
