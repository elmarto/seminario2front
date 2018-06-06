import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { LoginComponent } from './views/login/login.component';
import { ProjectStudentListComponent } from './views/project-student-list/project-student-list.component';

const componentRoutes: Routes = [
  { path: '', children: [
      { path: '', component: HomepageComponent },
    ]
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student/projects', component: ProjectStudentListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(componentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
