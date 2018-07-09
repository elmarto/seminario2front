import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ProjectService } from 'app/shared/services';
import { Profession, Project } from 'app/shared/interfaces/models';
import { ProjectCreateRequest } from 'app/shared/interfaces/prospects';
import { ProfessionService } from 'app/shared/services/profession.service';

@Component({
  selector: 'app-project-student-create',
  templateUrl: './project-student-create.component.html',
  styleUrls: ['./project-student-create.component.scss']
})
export class ProjectStudentCreateComponent implements OnInit {

  form: FormGroup;
  professions: Profession[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    private professionService: ProfessionService,
    public dialogRef: MatDialogRef<ProjectStudentCreateComponent>
  ) {
    this.setReactiveForms();
    this.professionService.findAll().subscribe(professions => this.professions = professions);
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
      if (response.status.code === 200) {
        this.snackBar.open('Solicitud creada exitosamente', null, { duration: 2000 });
        const project: Project = {
          projectID: response.status.values.projectID,
          projectStatusID: '1',
          projectName: request.projectName,
          projectDescription: request.projectDescription,
          registerDate: new Date()
        };
        this.dialogRef.close(project);
      } else {
        this.snackBar.open('Error ' + response.status.code + ': ' + response.status.description , null, { duration: 5000 });
      }
    });
  }

  close() {
    this.dialogRef.close();
  }
}
