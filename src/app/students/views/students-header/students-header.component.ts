import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-header',
  templateUrl: './students-header.component.html',
  styleUrls: ['./students-header.component.scss']
})
export class StudentsHeaderComponent {
  @Input() user = null;

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/signin/login']);
  }

  listProjects(): void {
    this.router.navigate(['/students/list-projects']);
  }

  createProject(): void {
    this.router.navigate(['/students/create-project']);
  }
}
