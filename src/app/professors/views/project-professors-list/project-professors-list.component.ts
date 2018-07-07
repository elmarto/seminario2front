import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/interfaces/models';
import { ProjectService } from '../../../shared';
import { BudgetService } from '../../../shared/services/budget.service';
import { MatDialog } from '@angular/material';
import { ProjectProfessorsDetailComponent } from '../project-professors-detail/project-professors-detail.component';

@Component({
  selector: 'app-project-professors-list',
  templateUrl: './project-professors-list.component.html',
  styleUrls: ['./project-professors-list.component.scss']
})
export class ProjectProfessorsListComponent implements OnInit {

  projects: Project[] = [
    {
      projectID: 1,
      projectStatus: 1,
      projectName: 'Albanil',
      projectDescription: 'Necesito un albanil para arreglar mi cocina',
      registerDate: new Date(),
      budgets: []
    },
    {
      projectID: 2,
      projectStatus: 1,
      projectName: 'Plomero',
      projectDescription: 'Necesito un plomero para arreglar mi cocina',
      registerDate: new Date(),
      budgets: []
    }
  ];

  constructor(
    private projectService: ProjectService,
    private budgetService: BudgetService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    /*
    this.projectService.all().subscribe(response => {
      this.projects = response.values;
      setInterval(this.checkForBudgets.bind(this), 1000);
    });
    */
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
    const dialogRef = this.dialog.open(ProjectProfessorsDetailComponent, { width: '80%' });
    dialogRef.componentInstance.project = project;
  }
}
