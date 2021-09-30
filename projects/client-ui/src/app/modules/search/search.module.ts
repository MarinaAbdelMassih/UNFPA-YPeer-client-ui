import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import { SearchTopBannerComponent } from './components/search-top-banner/search-top-banner.component';
import {MatRadioModule} from '@angular/material';


@NgModule({
  declarations: [SearchComponent, ResultItemComponent, SearchTopBannerComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    MatRadioModule
  ]
})
export class SearchModule { }
