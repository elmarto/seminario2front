import { Component, OnInit } from '@angular/core';
import { Project } from 'app/shared';

@Component({
  selector: 'app-project-student-list',
  templateUrl: './project-student-list.component.html',
  styleUrls: ['./project-student-list.component.scss']
})
export class ProjectStudentListComponent implements OnInit {

  projects: Project[] = [];

  constructor() { }

  ngOnInit() {
  }

}
