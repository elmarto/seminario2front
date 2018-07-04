import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../interfaces/models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  findByStateProvince(stateProvince: number): Observable<City[]> {
    return this.httpClient.get<ResponseMetadata>(environment.apiUrl + '/cities.php/getcitiesbystateproviceid/' + stateProvince)
            .pipe(map(response => response.values));
  }
}
