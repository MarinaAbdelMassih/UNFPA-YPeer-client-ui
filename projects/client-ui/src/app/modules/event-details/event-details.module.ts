import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventDetailsRoutingModule} from './event-details-routing.module';
import {EventDetailsComponent} from './event-details.component';
import {EventDetailsCategoriesComponent} from './components/event-details-categories/event-details-categories.component';
import {EventDetailsLatestComponent} from './components/event-details-latest/event-details-latest.component';
import {EventDetailsMightLikeComponent} from './components/event-details-might-like/event-details-might-like.component';
import {EventDetailsStoryComponent} from './components/event-details-story/event-details-story.component';
import {EventDetailsTagsComponent} from './components/event-details-tags/event-details-tags.component';
import {EventDetailsPhotosComponent} from './components/event-details-photos/event-details-photos.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CoreModule} from '../../../../../../src/app/core/core.module';
import {EventDetailsViewImageComponent} from './components/event-details-view-image/event-details-view-image.component';


@NgModule({
  declarations: [EventDetailsComponent, EventDetailsCategoriesComponent, EventDetailsLatestComponent, EventDetailsMightLikeComponent, EventDetailsStoryComponent, EventDetailsTagsComponent, EventDetailsPhotosComponent, EventDetailsViewImageComponent],
  imports: [
    CommonModule,
    EventDetailsRoutingModule,
    SharedModule,
    SlickCarouselModule,
    CoreModule,
  ],
  exports: [
    EventDetailsViewImageComponent
  ]
})
export class EventDetailsModule {
}
