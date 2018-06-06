import { NgModule } from '@angular/core';

/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { NguCarouselModule } from '@ngu/carousel';

/* Components */
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { LoginComponent } from './views/login/login.component';

/* Services */
import { RegistrationService } from '../shared/services/registration.service';
import { RolesService } from '../shared/services/roles.service';
import { ProjectStudentListComponent } from './views/project-student-list/project-student-list.component';
import { ProjectStudentCreateComponent } from './views/project-student-create/project-student-create.component';
import { ProjectProfessionalListComponent } from './views/project-professional-list/project-professional-list.component';


@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    HomeRoutingModule,
    NguCarouselModule
  ],
  providers: [
    RegistrationService,
    RolesService
  ],
  declarations: [
    HomepageComponent,
    RegistrationComponent,
    LoginComponent,
    ProjectStudentListComponent,
    ProjectStudentCreateComponent,
    ProjectProfessionalListComponent
  ]
})
export class HomeModule {}

