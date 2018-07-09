import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import { ResponseMetadata } from '../interfaces/response-metadata';
// tslint:disable-next-line:max-line-length
import { UserRegistrationRequest, UserInformationRequest, ClientLocationRequest, ProfessionalLocationRequest, CreateProfessionalProfessionRequest } from '../interfaces/prospects';

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

  registerProfessionalLocation(professionalLocationRequest: ProfessionalLocationRequest): Observable<ResponseMetadata> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<ResponseMetadata>(environment.apiUrl + '/professionals.php/insertProfessionalLocation', professionalLocationRequest);
  }

  registerProfessionalProfession(professionalProfessionCreateRequest: CreateProfessionalProfessionRequest): Observable<ResponseMetadata> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<ResponseMetadata>(environment.apiUrl + '/professionals.php/insertProfessionalProfession', professionalProfessionCreateRequest);
  }
}
