import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'app/shared';
import { MatDialog } from '@angular/material';
import { ProjectStudentCreateComponent } from '../project-student-create/project-student-create.component';
import { ProjectStudentDetailComponent } from '../project-student-detail/project-student-detail.component';
import { ProjectStudentEditComponent } from '../project-student-create/project-student-edit.component';
import { Project } from '../../../shared/interfaces/models';

@Component({
  selector: 'app-project-student-list',
  templateUrl: './project-student-list.component.html',
  styleUrls: ['./project-student-list.component.scss']
})
export class ProjectStudentListComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.projectService.all().subscribe(response => this.projects = response.values);
  }

  openDetailDialog(project): void {
    const dialogRef = this.dialog.open(ProjectStudentDetailComponent);
    dialogRef.componentInstance.project = project;
  }

  openEditDialog(project): void {
    const dialogRef = this.dialog.open(ProjectStudentEditComponent);
    // dialogRef.componentInstance.project = project;
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ProjectStudentCreateComponent);

    dialogRef.afterClosed().subscribe((project: Project) => {
      if (project) {
        project.projectID = this.projects.length;
        this.projects.push(project);
        console.log(project);
      }
    });
  }

}
