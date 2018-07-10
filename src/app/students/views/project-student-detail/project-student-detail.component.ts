import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MatSelectChange } from '@angular/material';
import { Project, Budget } from '../../../shared/interfaces/models';
import { BudgetService } from 'app/shared/services/budget.service';
import { trigger, state, style, transition, animate, query } from '@angular/animations';
import { BudgetUpdateRequest } from 'app/shared/interfaces/prospects';

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
    this.budgetService.findByProjectId(this.project.projectID).subscribe(budgets => {
      // const budgetStatusPending = '1';
      this.budgets = budgets;
    });
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

  answerBudget(budget: Budget, budgetStatusID) {
    const request: BudgetUpdateRequest = {
      budgetID: budget.budgetID,
      budgetStatusID: budgetStatusID + ''
    };
    this.budgetService.update(request).subscribe(response => {
      budget.budgetStatusID = budgetStatusID + '';
      let msg = '';
      if ((budget.budgetStatusID === '2')) {
        msg = '¡Has aceptado tomar la clase!';
        this.project.projectStatusID = '2';
      } else {
        msg = 'La propuesta ha sido rechazada';
      }
      this.snackBar.open(msg, null, { duration: 5000 });
      this.dialogRef.close();
    });
  }
}
