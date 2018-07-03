import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Profession, ProjectService, Project } from 'app/shared';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-student-detail',
  templateUrl: './project-student-detail.component.html',
  styleUrls: ['./project-student-detail.component.scss']
})
export class ProjectStudentDetailComponent implements OnInit {

  project: Project = null;
  professions: Profession[] = [
    { professionID: 1, professionName: 'Albañiles' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectStudentDetailComponent>
  ) {}

  ngOnInit() {
  }

  onSubmit() {

  }

  close() {
    this.dialogRef.close();
  }
}
