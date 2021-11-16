import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import { SearchTopBannerComponent } from './components/search-top-banner/search-top-banner.component';
import {MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DefaultCoursesSwiperModule} from './components/default-courses-swiper/default-courses-swiper.module';
import {AllResultsComponent} from './components/all-results/all-results.component';
import { ResultCardComponent } from './components/result-card/result-card.component';


@NgModule({
  declarations: [
    SearchComponent,
    ResultItemComponent,
    SearchTopBannerComponent,
    AllResultsComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultCoursesSwiperModule,
  ]
})
export class SearchModule { }
