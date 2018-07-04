import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectService } from '../../../shared';
import { Profession, Project } from '../../../shared/interfaces/models';

@Component({
  selector: 'app-project-student-edit',
  templateUrl: './project-student-create.component.html',
  styleUrls: ['./project-student-create.component.scss']
})
export class ProjectStudentEditComponent implements OnInit {

  form: FormGroup;
  professions: Profession[] = [
    { professionID: 1, professionName: 'Albañiles' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectStudentEditComponent>
  ) {
    this.setReactiveForms();
  }

  ngOnInit() {
  }

  setExistingProject(project: Project) {
    this.form.get('ProjectID').setValue(project.projectID);
    this.form.get('ProjectName').setValue(project.projectName);
    this.form.get('projectDescription').setValue(project.projectDescription);
  }

  private setReactiveForms() {
    this.form = this.formBuilder.group({
      projectID: [null],
      projectName: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      professionID: [null, Validators.compose([Validators.required])],
      projectDescription: [null, Validators.compose([Validators.required, Validators.maxLength(200)])]
    });
  }

  onSubmit() {
    const ctrl = this.form.controls;
    const request = {
      projectName: ctrl.projectName.value,
      projectDescription: ctrl.projectDescription.value,
      professionID: ctrl.professionID.value
    };
    // this.projectService.create(request).subscribe(response => {
    //   this.snackBar.open('Solicitud creada exitosamente', null, { duration: 2000 });
    //   const project: Project = {
    //     projectID: 0,
    //     projectStatus: 0,
    //     projectName: request.projectName,
    //     projectDescription: request.projectDescription,
    //     registerDate: new Date()
    //   };
    //   this.dialogRef.close(project);
    // });
  }

  close() {
    this.dialogRef.close();
  }
}
