import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopSliderComponent } from './components/top-slider/top-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WhatNextComponent } from './components/what-next/what-next.component';
import {SharedModule} from "../../../../../../src/app/shared/shared.module";


@NgModule({
  declarations: [HomeComponent, TopSliderComponent, TestimonialsComponent, WhatNextComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
