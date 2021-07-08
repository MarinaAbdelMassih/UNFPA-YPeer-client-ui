import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsCategoriesComponent } from './components/news-categories/news-categories.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsTagsComponent } from './components/news-tags/news-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [NewsComponent, NewsCategoriesComponent, NewsListComponent, NewsTagsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
