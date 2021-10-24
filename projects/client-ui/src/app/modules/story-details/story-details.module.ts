import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryDetailsRoutingModule } from './story-details-routing.module';
import { StoryDetailsComponent } from './story-details.component';
import { StoryDetailsCategoriesComponent } from './components/story-details-categories/story-details-categories.component';
import { StoryDetailsLatestComponent } from './components/story-details-latest/story-details-latest.component';
import { StoryDetailsMightLikeComponent } from './components/story-details-might-like/story-details-might-like.component';
import { StoryDetailsTagsComponent } from './components/story-details-tags/story-details-tags.component';
import { StoryDetailsSectionComponent } from './components/story-details-section/story-details-section.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CoreModule} from '../../../../../../src/app/core/core.module';
import {NewsDetailsModule} from '../news-details/news-details.module';


@NgModule({
  declarations: [StoryDetailsComponent, StoryDetailsCategoriesComponent, StoryDetailsLatestComponent, StoryDetailsMightLikeComponent, StoryDetailsTagsComponent, StoryDetailsSectionComponent],
  imports: [
    CommonModule,
    StoryDetailsRoutingModule,
    SharedModule,
    SlickCarouselModule,
    CoreModule,
    NewsDetailsModule
  ]
})
export class StoryDetailsModule { }
