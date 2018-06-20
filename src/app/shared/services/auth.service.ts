import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment as env} from 'environments/environment';
import { LoginRequest, LoginResponse } from 'app/shared';

@Injectable()
export class AuthService  {
  token: string = null;

  constructor(
    private http: Http
  ) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    console.log('service');
    return this.http.post(`${env.apiUrl}/authentication.php/authenticateUser`, request).pipe(
      map(response => this.token = response.json()),
      catchError(this.handleError)
    );
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
