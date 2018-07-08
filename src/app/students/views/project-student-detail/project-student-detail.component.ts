import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MatSelectChange } from '@angular/material';
import { Project, Budget } from '../../../shared/interfaces/models';
import { BudgetService } from 'app/shared/services/budget.service';
import { trigger, state, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-project-student-detail',
  templateUrl: './project-student-detail.component.html',
  styleUrls: ['./project-student-detail.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      transition('* => *', [
        query(
          ':enter', [style({ opacity: 0 })], { optional: true }
        ),
        query(
          ':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
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

  parseFloat(numberString: string) {
    return parseFloat(numberString);
  }
}
