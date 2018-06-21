import { NgModule } from '@angular/core';

/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared';
import { SigninRoutingModule } from './signin-routing.module';
import { NguCarouselModule } from '@ngu/carousel';

/* Components */
import { RegistrationComponent } from './views/registration/registration.component';
import { LoginComponent } from './views/login/login.component';

/* Services */
import { RegistrationService } from '../shared/services/registration.service';
import { RolesService } from '../shared/services/roles.service';
import { SexTypesService } from '../shared/services/sex-types.service';
import { SigninHeaderComponent } from './views/signin-header/signin-header.component';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    SigninRoutingModule,
    NguCarouselModule
  ],
  providers: [
    RegistrationService,
    RolesService,
    SexTypesService
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    SigninHeaderComponent
  ]
})
export class SigninModule {}

