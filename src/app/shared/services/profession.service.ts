import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { Profession } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Profession[]> {
    return this.httpClient.get<ResponseMetadata>(environment.apiUrl + '/professions.php/getprofessions').pipe(map(response => {
      return response.values;
    }));
  }
}
