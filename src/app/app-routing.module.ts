import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'institutional',
    loadChildren: 'app/institutional/institutional.module#InstitutionalModule'
  },
  {
    path: 'feeds',
    loadChildren: 'app/feeds/feeds.module#FeedsModule'
  }
  // { path: '404', redirectTo: '' },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
