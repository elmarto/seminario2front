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

  setToken(token: string): void {

    window.sessionStorage.setItem('token', token);
  }

  removeToken(): void {

    window.sessionStorage.removeItem('token');
  }
}
