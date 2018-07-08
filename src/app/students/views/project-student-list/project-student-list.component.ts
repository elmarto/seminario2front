import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'app/shared';
import { MatDialog } from '@angular/material';
import { ProjectStudentCreateComponent } from '../project-student-create/project-student-create.component';
import { ProjectStudentDetailComponent } from '../project-student-detail/project-student-detail.component';
import { ProjectStudentEditComponent } from '../project-student-create/project-student-edit.component';
import { Project } from '../../../shared/interfaces/models';
import { BudgetService } from '../../../shared/services/budget.service';

@Component({
  selector: 'app-project-student-list',
  templateUrl: './project-student-list.component.html',
  styleUrls: ['./project-student-list.component.scss']
})
export class ProjectStudentListComponent implements OnInit {

  projects: Project[];

  constructor(
    private projectService: ProjectService,
    private budgetService: BudgetService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.projectService.all().subscribe(response => {
      this.projects = response.values;
      setInterval(this.checkForBudgets.bind(this), 1000);
    });
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

  openEditDialog(project): void {
    const dialogRef = this.dialog.open(ProjectStudentEditComponent);
    // dialogRef.componentInstance.project = project;
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ProjectStudentCreateComponent);

    dialogRef.afterClosed().subscribe((project: Project) => {
      if (project) {
        project.projectID = '' + this.projects.length;
        this.projects.push(project);
        console.log(project);
      }
    });
  }

}
