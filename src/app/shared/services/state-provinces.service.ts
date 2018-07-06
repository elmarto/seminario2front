import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StateProvince, City } from '../interfaces/models';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

import { ResponseMetadata } from '../interfaces/response-metadata';

@Injectable({
  providedIn: 'root'
})
export class StateProvincesService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<StateProvince[]> {
    return this.httpClient.get<ResponseMetadata>(environment.apiUrl + '/stateProvinces.php/getstateprovinces')
            .pipe(map(response => response.values ));
  }
}
