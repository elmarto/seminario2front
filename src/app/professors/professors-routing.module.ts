import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

/* Components */
import { ProfessorsHeaderComponent } from './views/professors-header/professors-header.component';
import { ProfessorsHomeComponent } from './views/professors-home/professors-home.component';
import { ProjectProfessorsListComponent } from './views/project-professors-list/project-professors-list.component';
import { ProfessorsProfileComponent } from './views/professors-profile/professors-profile.component';
import { ScoreProfessorListComponent } from './views/score-professors-list/score-professor-list.component';

const componentRoutes: Routes = [
  { path: '', redirectTo: '/professors/home', pathMatch: 'full' },
  { path: 'professors', children: [
      { path: 'home', component: ProfessorsHomeComponent },
      { path: 'profile', component: ProfessorsProfileComponent },
      { path: 'list-projects', component: ProjectProfessorsListComponent },
      { path: 'scores', component: ScoreProfessorListComponent },
      { path: '', component: ProfessorsHeaderComponent, outlet: 'professors-header' }
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
export class ProfessorsRoutingModule { }
