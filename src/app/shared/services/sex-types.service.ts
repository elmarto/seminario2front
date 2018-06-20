import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { SexType } from '../interfaces/sex-type';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';

@Injectable({
  providedIn: 'root'
})
export class SexTypesService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<SexType[]> {
    return this.httpClient.get<ResponseMetadata>(environment.apiUrl + '/sexTypes.php/getsextypes').pipe(map(response => {
      return response.values;
    }));
  }
}
