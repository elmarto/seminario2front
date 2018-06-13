import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment as env} from 'environments/environment';
import { ProjectListRequest, ProjectListResponse, AuthService } from 'app/shared';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProjectService  {

  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  all(request?: ProjectListRequest): Observable<ProjectListResponse> {
    return this.http.get(`${env.apiUrl}/projects.php/getProjectsByUserID`).pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
