import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../../../shared/interfaces/models';
import { ProjectService } from '../../../shared';
import { BudgetService } from '../../../shared/services/budget.service';
import { MatDialog } from '@angular/material';
import { ProjectProfessorsDetailComponent } from '../project-professors-detail/project-professors-detail.component';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-project-professors-list',
  templateUrl: './project-professors-list.component.html',
  styleUrls: ['./project-professors-list.component.scss']
})
export class ProjectProfessorsListComponent implements OnInit, OnDestroy {

  projects: Project[];
  subscription: Subscription;

  constructor(
    private projectService: ProjectService,
    private budgetService: BudgetService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.projectService.findByProfessional().subscribe(response => {
      this.projects = response;
      if (this.projects.length > 0) {
        this.subscription = timer(0, 5000).subscribe(x => {
          this.projects.forEach(project => {
            this.budgetService.findByProjectId(project.projectID).subscribe(budgets => project.budgets = budgets);
          });
        });
      }
    });
  }

  dismiss(project: Project): void {
    console.log(project);
  }

  openDetailDialog(project): void {
    const dialogRef = this.dialog.open(ProjectProfessorsDetailComponent, { width: '80%' });
    dialogRef.componentInstance.project = project;
  }

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
