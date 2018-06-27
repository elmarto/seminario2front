import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Profession, ProjectService } from 'app/shared';
import { MatSnackBar } from '@angular/material';

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
    private router: Router,
    private snackBar: MatSnackBar,
    private projectService: ProjectService
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
    const request = {
      projectName: ctrl.projectName.value,
      projectDescription: ctrl.projectDescription.value,
      professionID: ctrl.professionID.value
    };
    this.projectService.create(request).subscribe(response => {
      this.snackBar.open('Solicitud creada exitosamente', null, { duration: 2000 });
      this.router.navigate(['/students/list-projects']);
    });
  }


}
