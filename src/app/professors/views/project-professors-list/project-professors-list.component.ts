import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/interfaces/models';
import { ProjectService } from '../../../shared';

@Component({
  selector: 'app-project-professors-list',
  templateUrl: './project-professors-list.component.html',
  styleUrls: ['./project-professors-list.component.scss']
})
export class ProjectProfessorsListComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.projectService.all().subscribe(response => this.projects = response.values);
  }
}
