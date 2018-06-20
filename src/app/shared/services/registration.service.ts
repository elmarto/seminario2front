import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { UserRegistrationRequest } from '../interfaces/prospects';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  registerUser(userRegistration: UserRegistrationRequest): Observable<any> {
    return this.httpClient.post<any>(environment.apiUrl + '/users.php/insertuser', userRegistration);
  }
}
