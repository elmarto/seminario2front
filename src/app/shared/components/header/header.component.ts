import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user = null;

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/login']);
  }

  registration(): void {
    this.router.navigate(['/registration']);
  }
}
