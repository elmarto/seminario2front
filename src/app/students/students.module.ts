import { NgModule } from '@angular/core';

/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared';
import { StudentsRoutingModule } from './students-routing.module';
import { NguCarouselModule } from '@ngu/carousel';

/* Components */
import { ProjectStudentListComponent } from './views/project-student-list/project-student-list.component';
import { ProjectStudentCreateComponent } from './views/project-student-create/project-student-create.component';
import { ProjectProfessionalListComponent } from './views/project-professional-list/project-professional-list.component';
import { StudentsHomeComponent } from './views/students-home/students-home.component';
import { StudentsHeaderComponent } from './views/students-header/students-header.component';
import { ProjectStudentDetailComponent } from './views/project-student-detail/project-student-detail.component';
import { ProjectStudentEditComponent } from './views/project-student-create/project-student-edit.component';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    StudentsRoutingModule,
    NguCarouselModule
  ],
  providers: [
  ],
  declarations: [
    StudentsHeaderComponent,
    StudentsHomeComponent,
    ProjectStudentListComponent,
    ProjectStudentCreateComponent,
    ProjectStudentEditComponent,
    ProjectStudentDetailComponent,
    ProjectProfessionalListComponent
  ],
  entryComponents: [
    ProjectStudentCreateComponent,
    ProjectStudentEditComponent,
    ProjectStudentDetailComponent
  ]
})
export class StudentsModule {}

