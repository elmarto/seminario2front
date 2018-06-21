import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-header',
  templateUrl: './signin-header.component.html',
  styleUrls: ['./signin-header.component.scss']
})
export class SigninHeaderComponent {
  @Input() user = null;

  constructor(private router: Router) {}

  login(): void {
    this.router.navigate(['/signin/login']);
  }

  registration(): void {
    this.router.navigate(['/signin/registration']);
  }
}
