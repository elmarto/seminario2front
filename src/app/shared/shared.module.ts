
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NguCarouselModule } from '@ngu/carousel';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components';
import { ProjectService, AuthService, AuthInterceptor } from './services';
import { TokenService } from './services/token.service';
import { ProfessionService } from './services/profession.service';
import { BudgetService } from './services/budget.service';
import { AgmCoreModule } from '@agm/core';
import { ScoreService } from './services/score.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NguCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfw8BldKkKUPiQypR4lKdRGSrMkpcnTMU'
    })
  ],
  declarations: [
    FooterComponent
  ],
  providers: [
    AuthService,
    TokenService,
    ProjectService,
    ProfessionService,
    BudgetService,
    ScoreService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NguCarouselModule,
    AgmCoreModule,
    FooterComponent
  ],
  entryComponents: []
})
export class SharedModule {}
