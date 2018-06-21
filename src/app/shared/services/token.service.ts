import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {

    return window.sessionStorage.getItem('token') !== undefined && window.sessionStorage.getItem('token') !== null;
  }

  getToken(): string {

    return window.sessionStorage.getItem('token');
  }

  getTokenInformation(): any {

    let tokenInformation: any  = null;

    try {

        tokenInformation = JSON.parse(atob(this.getToken().split('.')[1]));

    } catch (e) {

      console.log(e);
    }

    return tokenInformation;
  }

  setToken(token: string): void {

    window.sessionStorage.setItem('token', token);
  }

  removeToken(): void {

    window.sessionStorage.removeItem('token');
  }
}
