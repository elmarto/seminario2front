import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ProjectService } from '../../../shared/services';
import { Profession, Project } from '../../../shared/interfaces/models';
import { ProjectCreateRequest } from '../../../shared/interfaces/prospects';

@Component({
  selector: 'app-project-student-create',
  templateUrl: './project-student-create.component.html',
  styleUrls: ['./project-student-create.component.scss']
})
export class ProjectStudentCreateComponent implements OnInit {

  form: FormGroup;
  professions: Profession[] = [
    { professionID: 1, professionName: 'Albañiles' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ProjectStudentCreateComponent>
  ) {
    this.setReactiveForms();
  }

  ngOnInit() {
  }

  private setReactiveForms() {
    this.form = this.formBuilder.group({
      projectName: [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      professionID: [null, Validators.compose([Validators.required])],
      projectDescription: [null, Validators.compose([Validators.required, Validators.maxLength(200)])]
    });
  }

  onSubmit() {
    const ctrl = this.form.controls;
    const request: ProjectCreateRequest = {
      projectName: ctrl.projectName.value,
      projectDescription: ctrl.projectDescription.value,
      professionID: ctrl.professionID.value
    };
    this.projectService.create(request).subscribe(response => {
      this.snackBar.open('Solicitud creada exitosamente', null, { duration: 2000 });
      const project: Project = {
        projectID: 0,
        projectStatus: 0,
        projectName: request.projectName,
        projectDescription: request.projectDescription,
        registerDate: new Date()
      };
      this.dialogRef.close(project);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
