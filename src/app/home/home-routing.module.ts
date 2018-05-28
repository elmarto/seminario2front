import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { LoginComponent } from './views/login/login.component';

const componentRoutes: Routes = [
  { path: 'home', children: [
      { path: '', component: HomepageComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
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
export class HomeRoutingModule { }
