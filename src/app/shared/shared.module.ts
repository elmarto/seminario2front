
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
import { BudgetService } from 'app/shared/services/budget.service';

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
    NguCarouselModule
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
    FooterComponent
  ],
  entryComponents: []
})
export class SharedModule {}
