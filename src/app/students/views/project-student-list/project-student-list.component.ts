import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'app/shared';
import { MatDialog } from '@angular/material';
import { ProjectStudentCreateComponent } from '../project-student-create/project-student-create.component';
import { ProjectStudentDetailComponent } from '../project-student-detail/project-student-detail.component';
import { ProjectStudentEditComponent } from '../project-student-create/project-student-edit.component';
import { Project } from 'app/shared/interfaces/models';
import { BudgetService } from 'app/shared/services/budget.service';
import { ProjectStudentDeleteComponent } from '../project-student-delete/project-student-delete.component';

@Component({
  selector: 'app-project-student-list',
  templateUrl: './project-student-list.component.html',
  styleUrls: ['./project-student-list.component.scss']
})
export class ProjectStudentListComponent implements OnInit, OnDestroy {

  projects: Project[] = [];
  projectStatus = {
    1: 'Activa',
    2: 'Tomada',
    3: 'Cancelada',
    4: 'Finalizada'
  };
  budgetInterval;

  constructor(
    private projectService: ProjectService,
    private budgetService: BudgetService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.projectService.all().subscribe(response => {
      if (response.values) {
        this.projects = response.values;
      }
      this.budgetInterval = setInterval(this.checkForBudgets.bind(this), 5000);
    });
  }

  ngOnDestroy() {
    clearInterval(this.budgetInterval);
  }

  checkForBudgets() {
    if (this.projects && this.projects.length) {
      this.projects.forEach(project => {
        this.budgetService.findByProjectId(project.projectID).subscribe(budgets => {
          if ((project.budgets && project.budgets.length !== budgets.length || !project.budgets) ) {
            project.budgets = budgets;
          }
        });
      });
    }
  }

  openDetailDialog(project): void {
    const dialogRef = this.dialog.open(ProjectStudentDetailComponent, { width: '80%' });
    dialogRef.componentInstance.project = project;
  }

  openDeleteDialog(project): void {
    const dialogRef = this.dialog.open(ProjectStudentDeleteComponent);
    dialogRef.componentInstance.projects = this.projects;
    dialogRef.componentInstance.project = project;
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ProjectStudentCreateComponent);

    dialogRef.afterClosed().subscribe((project: Project) => {
      if (project) {
        this.projects.push(project);
        console.log(project);
      }
    });
  }

}
