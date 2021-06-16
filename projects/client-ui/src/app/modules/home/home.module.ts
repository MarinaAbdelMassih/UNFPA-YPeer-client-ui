import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopSliderComponent } from './components/top-slider/top-slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@NgModule({
  declarations: [HomeComponent, TopSliderComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
