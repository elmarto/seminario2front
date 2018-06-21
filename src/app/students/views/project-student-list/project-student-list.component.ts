import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from 'app/shared';

@Component({
  selector: 'app-project-student-list',
  templateUrl: './project-student-list.component.html',
  styleUrls: ['./project-student-list.component.scss']
})
export class ProjectStudentListComponent implements OnInit {

  projects: Project[] = [
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    },
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    },
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    },
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    },
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    },
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    },
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Busqueda de un gran profesor',
      projectDescription: 'This is the description.',
      registerDate: new Date()
    }
  ];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.all().subscribe(response => {
      //this.projects = response.projects;
    });
  }

}
