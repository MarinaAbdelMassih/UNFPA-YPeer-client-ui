import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopSliderComponent } from './components/top-slider/top-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OurStoryComponent } from './components/our-story/our-story.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import { WhatNextComponent } from './components/what-next/what-next.component';
import {CoreModule} from "../../../../../../src/app/core/core.module";
import { DiscoverMoreComponent } from './components/discover-more/discover-more.component';
import { DiscoverMoreCardComponent } from './components/discover-more/components/discover-more-card/discover-more-card.component';


@NgModule({
  declarations: [HomeComponent, TopSliderComponent, TestimonialsComponent, OurStoryComponent, WhatNextComponent, DiscoverMoreComponent, DiscoverMoreCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
