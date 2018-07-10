import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment as env} from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProjectListRequest, ProjectListResponse } from '../interfaces/prospects';
import { map } from 'rxjs/operators';
import { ResponseMetadata } from '../interfaces/response-metadata';
import { Project } from '../interfaces/models';

@Injectable()
export class ProjectService  {
  constructor(private httpClient: HttpClient) { }

  findByProfessional(): Observable<Project[]> {
    return this.httpClient.get<ResponseMetadata>(`${env.apiUrl}/projects.php/getProjectsByProfessionalID`)
            .pipe(map(response => response.status.code === 200 ? response.values : []));
  }

  all(request?: ProjectListRequest): Observable<ProjectListResponse> {
    return this.httpClient.get<any>(`${env.apiUrl}/projects.php/getProjectsByUserID`);
  }

  delete(request: number): Observable<ProjectListResponse> {
    return this.httpClient.delete<any>(`${env.apiUrl}/projects.php/deleteproject/${request}`);
  }

  create(request): Observable<any> {
    return this.httpClient.post<any>(`${env.apiUrl}/projects.php/insertProject`, request);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
