import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultsSwiperComponent} from './search-results-swiper.component';
import SwiperCore, {Controller, Lazy, Navigation, Pagination} from 'swiper';
import {SharedModule} from '../../../../../../../../src/app/shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {RouterModule} from '@angular/router';

SwiperCore.use([Navigation, Lazy, Controller, Pagination]);

@NgModule({
  declarations: [
  ],
    exports: [
    ],
  imports: [
    CommonModule,
    SharedModule,
    SlickCarouselModule,
    RouterModule,
  ]
})
export class DefaultCoursesSwiperModule { }
