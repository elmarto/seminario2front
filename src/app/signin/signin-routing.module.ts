import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';
import { RegistrationComponent } from './views/registration/registration.component';
import { LoginComponent } from './views/login/login.component';
import { SigninHeaderComponent } from './views/signin-header/signin-header.component';

const componentRoutes: Routes = [
  { path: '', redirectTo: '/signin/login', pathMatch: 'full' },
  { path: 'signin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '', component: SigninHeaderComponent, outlet: 'signin-header' }
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
export class SigninRoutingModule { }
