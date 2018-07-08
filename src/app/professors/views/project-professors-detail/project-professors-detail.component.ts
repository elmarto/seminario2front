import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MatSelectChange } from '@angular/material';
import { Project, Budget } from '../../../shared/interfaces/models';
import { BudgetService } from 'app/shared/services/budget.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetCreateRequest } from '../../../shared/interfaces/prospects';

@Component({
  selector: 'app-project-professors-detail',
  templateUrl: './project-professors-detail.component.html',
  styleUrls: ['./project-professors-detail.component.scss']
})
export class ProjectProfessorsDetailComponent implements OnInit {

  form: FormGroup;
  project: Project = null;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private budgetService: BudgetService,
    public dialogRef: MatDialogRef<ProjectProfessorsDetailComponent>
  ) {
  }

  ngOnInit() {
    this.budgetService.findByProjectId(this.project.projectID).subscribe(budgets => this.project.budgets = budgets);
    this.form = this.formBuilder.group({
      comments: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      amount: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {

    const budgetCreateRequest: BudgetCreateRequest = {
      projectID: parseInt(this.project.projectID, 10),
      comments: this.form.get('comments').value,
      amount: this.form.get('amount').value
    };

    this.budgetService.create(budgetCreateRequest).subscribe(response => {
      this.project.budgets.push({
        budgetID: 0,
        projectID: this.project.projectID.toString(),
        budgetStatusID: '0',
        comments: budgetCreateRequest.comments,
        amount: budgetCreateRequest.amount
      });
    });
  }

  close() {
    this.dialogRef.close();
  }
}
