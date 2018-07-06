import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MatSelectChange } from '@angular/material';
import { Project, Budget } from '../../../shared/interfaces/models';
import { BudgetService } from 'app/shared/services/budget.service';

@Component({
  selector: 'app-project-student-detail',
  templateUrl: './project-student-detail.component.html',
  styleUrls: ['./project-student-detail.component.scss']
})
export class ProjectStudentDetailComponent implements OnInit {

  project: Project = null;
  budgets: Budget[] = [];
  selectedBudget: Budget = null;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private budgetService: BudgetService,
    public dialogRef: MatDialogRef<ProjectStudentDetailComponent>
  ) {
  }

  ngOnInit() {
    this.budgetService.findByProjectId(this.project.projectID).subscribe(budgets => this.budgets = budgets);
  }

  onSubmit() {

  }

  close() {
    this.dialogRef.close();
  }

  onBudgetSelected(budget: Budget) {
    this.selectedBudget = budget;
  }
}
