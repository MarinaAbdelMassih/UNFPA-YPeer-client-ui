import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
import { NewsDetailsCategoriesComponent } from './components/news-details-categories/news-details-categories.component';
import { NewsDetailsLatestComponent } from './components/news-details-latest/news-details-latest.component';
import { NewsDetailsMightLikeComponent } from './components/news-details-might-like/news-details-might-like.component';
import { NewsDetailsStoryComponent } from './components/news-details-story/news-details-story.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {NewsModule} from '../news/news.module';
import { NewsDetailsTagsComponent } from './components/news-details-tags/news-details-tags.component';
import {CoreModule} from '../../../../../../src/app/core/core.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {SocialShareComponent} from '../../../../../../src/app/shared/components/social-share/social-share.component';
import {ShareModule} from '@ngx-share/core';


@NgModule({
  declarations: [NewsDetailsComponent, NewsDetailsCategoriesComponent, NewsDetailsLatestComponent, NewsDetailsMightLikeComponent, NewsDetailsStoryComponent, NewsDetailsTagsComponent, SocialShareComponent],
  exports: [
    SocialShareComponent
  ],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule,
    SharedModule,
    NewsModule,
    CoreModule,
    SlickCarouselModule,
    ShareModule
  ]
})
export class NewsDetailsModule { }
