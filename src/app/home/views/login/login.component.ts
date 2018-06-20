import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, LoginRequest } from 'app/shared';
import { Router } from '@angular/router';
import { TokenService } from '../../../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  userEmail: string = 'ADMIN';
  // tslint:disable-next-line:no-inferrable-types
  userPassword: string = 'ADMIN';

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const loginRequest: LoginRequest = {userEmail: this.userEmail, userPassword: this.userPassword};
    this.authService.login(loginRequest).subscribe(loginResponse => {
      if (loginResponse.status.code === 200) {
        this.tokenService.setToken(loginResponse.token);
        this.router.navigate(['/student/projects']);
      }
    });
  }
}
