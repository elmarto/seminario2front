import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { UserCreation } from '../interfaces/user-creation';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  create(userCreation: UserCreation): Observable<any> {
    return this.httpClient.post<any>(environment.apiUrl + '/users.php/insertuser', userCreation);
  }
}
