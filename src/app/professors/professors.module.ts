import { NgModule } from '@angular/core';

/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { NguCarouselModule } from '@ngu/carousel';
import { ProfessorsRoutingModule } from './professors-routing.module';

/* Components */
import { ProfessorsHeaderComponent } from './views/professors-header/professors-header.component';
import { ProfessorsHomeComponent } from './views/professors-home/professors-home.component';
import { ProjectProfessorsListComponent } from './views/project-professors-list/project-professors-list.component';
import { ProjectProfessorsDetailComponent } from './views/project-professors-detail/project-professors-detail.component';


@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    ProfessorsRoutingModule,
    NguCarouselModule
  ],
  providers: [
  ],
  declarations: [
    ProfessorsHeaderComponent,
    ProfessorsHomeComponent,
    ProjectProfessorsListComponent,
    ProjectProfessorsDetailComponent
  ],
  entryComponents: [
    ProfessorsHeaderComponent,
    ProfessorsHomeComponent,
    ProjectProfessorsListComponent,
    ProjectProfessorsDetailComponent
  ]
})
export class ProfessorsModule {}

