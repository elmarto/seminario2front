import { NgModule } from '@angular/core';


/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { NguCarouselModule } from '@ngu/carousel';
import { MatStepperModule, MatInputModule, MatDividerModule } from '@angular/material';

/* Components */
import { HomepageComponent } from './views/homepage/homepage.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { LoginComponent } from './views/login/login.component';

/* Services */
import { UsersService } from '../shared/services/users.service';
import { RolesService } from '../shared/services/roles.service';


@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    HomeRoutingModule,
    NguCarouselModule,
    MatStepperModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [
    UsersService,
    RolesService
  ],
  declarations: [
    HomepageComponent,
    RegistrationComponent,
    LoginComponent
  ]
})
export class HomeModule {}

