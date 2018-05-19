import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    NguCarouselModule
  ],
  providers: [
  ],
  declarations: [
    HomepageComponent
  ]
})
export class HomeModule {}

