import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef, MatSelectChange } from '@angular/material';
import { Project, Budget } from '../../../shared/interfaces/models';
import { BudgetService } from 'app/shared/services/budget.service';
import { trigger, state, style, transition, animate, query } from '@angular/animations';
import { BudgetUpdateRequest } from 'app/shared/interfaces/prospects';
import { ProjectService } from '../../../shared';

@Component({
  selector: 'app-project-student-delete',
  templateUrl: './project-student-delete.component.html',
  styleUrls: ['./project-student-delete.component.scss'],
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
export class ProjectStudentDeleteComponent implements OnInit {
  projects: Project[];
  project: Project = null;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProjectStudentDeleteComponent>
  ) {

    dialogRef.afterClosed().subscribe(eliminar => {
      if (eliminar) {
        this.projectService.delete(parseInt(this.project.projectID, 10)).subscribe(response => {
          let idx = -1;
          for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].projectID === this.project.projectID) {
              idx = i;
            }
          }
          if (idx >= 0) {
            this.projects.splice(idx, 1);
          }
          this.snackBar.open('Has eliminado la busqueda!', '', {duration: 3000});
        });
      }
    });
  }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }
}
