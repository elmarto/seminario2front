import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

/* Components */
import { StudentsHeaderComponent } from './views/students-header/students-header.component';
import { StudentsHomeComponent } from './views/students-home/students-home.component';
import { ProjectStudentListComponent } from './views/project-student-list/project-student-list.component';

const componentRoutes: Routes = [
  { path: '', redirectTo: '/students/home', pathMatch: 'full' },
  { path: 'students', children: [
      { path: 'home', component: StudentsHomeComponent },
      { path: 'list-projects', component: ProjectStudentListComponent },
      { path: '', component: StudentsHeaderComponent, outlet: 'students-header' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(componentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsRoutingModule { }
