import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {ResultItemComponent} from './components/result-item/result-item.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {SearchTopBannerComponent} from './components/search-top-banner/search-top-banner.component';
import {MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AllResultsComponent} from './components/all-results/all-results.component';
import {SearchResultsSwiperComponent} from "./components/search-results-swiper/search-results-swiper.component";
import {SlickCarouselModule} from "ngx-slick-carousel";


@NgModule({
  declarations: [
    SearchComponent,
    ResultItemComponent,
    SearchTopBannerComponent,
    AllResultsComponent,
    SearchResultsSwiperComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
  ]
})
export class SearchModule { }
