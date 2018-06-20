import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor  implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addContentHeaders(req);
    req = this.addAuthorizationHeaders(req);
    return next.handle(req);
  }

  private addContentHeaders(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
      }
    });
  }

  private addAuthorizationHeaders(request: HttpRequest<any>): HttpRequest<any> {
    let requestWithToken = request;
    if (this.tokenService.hasToken()) {
      requestWithToken = request.clone({
        setHeaders: {
          'Authorization': this.tokenService.getToken(),
        }
      });
    }
    return requestWithToken;
  }
}
