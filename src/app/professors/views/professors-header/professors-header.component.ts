import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professors-header',
  templateUrl: './professors-header.component.html',
  styleUrls: ['./professors-header.component.scss']
})
export class ProfessorsHeaderComponent {
  @Input() user = null;

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/signin/login']);
  }

  listProjects(): void {
    this.router.navigate(['/professors/list-projects']);
  }
}
