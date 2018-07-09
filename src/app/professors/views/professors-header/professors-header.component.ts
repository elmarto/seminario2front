import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../shared/services/token.service';

@Component({
  selector: 'app-professors-header',
  templateUrl: './professors-header.component.html',
  styleUrls: ['./professors-header.component.scss']
})
export class ProfessorsHeaderComponent {
  @Input() user = null;

  constructor(private tokenService: TokenService, private router: Router) {}

  listProjects(): void {
    this.router.navigate(['/professors/list-projects']);
  }

  profile(): void {
    this.router.navigate(['/professors/profile']);
  }

  logout(): void {
    if (this.tokenService.hasToken()) {
      this.tokenService.removeToken();
    }
    this.router.navigate(['/signin/login']);
  }
}
