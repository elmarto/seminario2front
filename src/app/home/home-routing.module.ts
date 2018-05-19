import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';

const componentRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
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
export class HomeRoutingModule { }
