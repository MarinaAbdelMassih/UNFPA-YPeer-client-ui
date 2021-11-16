import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCoursesSwiperComponent } from './default-courses-swiper.component';
import {SwiperModule} from "swiper/angular";
import SwiperCore, {Controller, Lazy, Navigation, Pagination} from "swiper";
import {SearchModule} from '../../search.module';
import {ResultCardComponent} from '../result-card/result-card.component';
import {SharedModule} from '../../../../../../../../src/app/shared/shared.module';

SwiperCore.use([Navigation, Lazy, Controller, Pagination]);

@NgModule({
  declarations: [
    DefaultCoursesSwiperComponent,
    ResultCardComponent,
  ],
    exports: [
        DefaultCoursesSwiperComponent
    ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
  ]
})
export class DefaultCoursesSwiperModule { }
