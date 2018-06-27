import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment as env} from 'environments/environment';
import { ProjectListRequest, ProjectListResponse, AuthService } from 'app/shared';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService  {
  constructor(private httpClient: HttpClient) { }

  all(request?: ProjectListRequest): Observable<ProjectListResponse> {
    return this.httpClient.get<any>(`${env.apiUrl}/projects.php/getProjectsByUserID`);
  }

  create(request): Observable<any> {
    return this.httpClient.post<any>(`${env.apiUrl}/projects.php/insertProject`, request);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
