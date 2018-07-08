import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { StudentsModule } from './students';
import { SharedModule } from './shared';
import { StartupService } from './startup.service';
import { SigninModule } from './signin';
import { ProfessorsModule } from './professors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    SigninModule,
    StudentsModule,
    ProfessorsModule,
    SharedModule
  ],
  providers: [StartupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
