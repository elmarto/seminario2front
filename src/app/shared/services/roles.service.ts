import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { Role } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Role[]> {
    return this.httpClient.get<ResponseMetadata>(environment.apiUrl + '/roles.php/getroles').pipe(map(response => {
      return response.values;
    }));
  }
}
