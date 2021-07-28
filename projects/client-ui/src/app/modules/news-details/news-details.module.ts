import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
import { NewsDetailsCategoriesComponent } from './components/news-details-categories/news-details-categories.component';
import { NewsDetailsLatestComponent } from './components/news-details-latest/news-details-latest.component';
import { NewsDetailsMightLikeComponent } from './components/news-details-might-like/news-details-might-like.component';
import { NewsDetailsStoryComponent } from './components/news-details-story/news-details-story.component';


@NgModule({
  declarations: [NewsDetailsComponent, NewsDetailsCategoriesComponent, NewsDetailsLatestComponent, NewsDetailsMightLikeComponent, NewsDetailsStoryComponent],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule
  ]
})
export class NewsDetailsModule { }
