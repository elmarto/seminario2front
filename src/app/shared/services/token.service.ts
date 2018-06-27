import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {

    return window.localStorage.getItem('token') !== undefined && window.localStorage.getItem('token') !== null;
  }

  getToken(): string {

    return window.localStorage.getItem('token');
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

    window.localStorage.setItem('token', token);
  }

  removeToken(): void {

    window.localStorage.removeItem('token');
  }
}
