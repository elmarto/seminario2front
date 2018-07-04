import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { UserRegistrationRequest, UserInformationRequest, ClientLocationRequest, ProfessionalWorkplaceRequest } from '../interfaces/prospects';
import { ResponseMetadata } from '../interfaces/response-metadata';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  registerUser(userRegistration: UserRegistrationRequest): Observable<ResponseMetadata> {
    return this.httpClient.post<ResponseMetadata>(environment.apiUrl + '/users.php/insertuser', userRegistration);
  }

  registerUserInformation(userInformationRequest: UserInformationRequest): Observable<ResponseMetadata> {
    return this.httpClient.post<ResponseMetadata>(environment.apiUrl + '/users.php/insertuserinformation', userInformationRequest);
  }

  registerClientLocation(clientLocationRequest: ClientLocationRequest): Observable<ResponseMetadata> {
    return this.httpClient.post<ResponseMetadata>(environment.apiUrl + '/clients.php/insertclientlocation', clientLocationRequest);
  }

  registerProfessionalWorkplace(professionalWorkplaceRequest: ProfessionalWorkplaceRequest): Observable<ResponseMetadata> {
    return this.httpClient.post<ResponseMetadata>(environment.apiUrl + '/clients.php/insertclientlocation', professionalWorkplaceRequest);
  }
}
