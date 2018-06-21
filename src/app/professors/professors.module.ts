import { NgModule } from '@angular/core';

/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { ProfessorsRoutingModule } from '.';
import { SharedModule } from '../shared';
import { NguCarouselModule } from '@ngu/carousel';

/* Components */
import { ProfessorsHeaderComponent } from './views/professors-header/professors-header.component';
import { ProfessorsHomeComponent } from './views/professors-home/professors-home.component';
import { ProjectProfessorsListComponent } from './views/project-professors-list/project-professors-list.component';

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
    ProjectProfessorsListComponent
  ]
})
export class ProfessorsModule {}

