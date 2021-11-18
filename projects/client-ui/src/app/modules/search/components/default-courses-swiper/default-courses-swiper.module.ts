import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultCoursesSwiperComponent} from './default-courses-swiper.component';
import {SwiperModule} from 'swiper/angular';
import SwiperCore, {Controller, Lazy, Navigation, Pagination} from 'swiper';
import {SharedModule} from '../../../../../../../../src/app/shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {RouterModule} from '@angular/router';

SwiperCore.use([Navigation, Lazy, Controller, Pagination]);

@NgModule({
  declarations: [
    DefaultCoursesSwiperComponent,
  ],
    exports: [
        DefaultCoursesSwiperComponent
    ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    SlickCarouselModule,
    RouterModule,
  ]
})
export class DefaultCoursesSwiperModule { }
