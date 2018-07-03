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

  private rolesHome = new Map<number, string>();

  // tslint:disable-next-line:no-inferrable-types
  userEmail: string = 'ADMIN';
  // tslint:disable-next-line:no-inferrable-types
  userPassword: string = 'ADMIN';

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {

    /* Una home para cada rol (?) */
    this.rolesHome.set(1, '/students/list-projects');
    this.rolesHome.set(2, '/students/list-projects');
    this.rolesHome.set(3, '/students/list-projects');
    this.rolesHome.set(4, '/professionals/home');
  }

  ngOnInit() { }

  login() {
    const loginRequest: LoginRequest = {userEmail: this.userEmail, userPassword: this.userPassword};
    this.authService.login(loginRequest).subscribe(loginResponse => {
      if (loginResponse.status.code === 200) {
        /* Guardo el token */
        this.tokenService.setToken(loginResponse.token);
        /* Obtengo un rol al azar */
        const tokenInformation = this.tokenService.getTokenInformation();
        /* Redirecciono a donde corresponda */
        this.router.navigateByUrl(this.rolesHome.get(parseInt(tokenInformation.data.userRoles[0].roleID, 10)));
      }
    });
  }
}
