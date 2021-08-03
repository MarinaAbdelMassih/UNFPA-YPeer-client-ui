import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import { TrainingDetailsCategoriesComponent } from './components/training-details-categories/training-details-categories.component';
import { TrainingDetailsLatestComponent } from './components/training-details-latest/training-details-latest.component';
import { TrainingDetailsMightLikeComponent } from './components/training-details-might-like/training-details-might-like.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { TrainingDetailsTagsComponent } from './components/training-details-tags/training-details-tags.component';
import { TrainingDetailsSectionComponent } from './components/training-details-section/training-details-section.component';
import {CoreModule} from '../../../../../../src/app/core/core.module';


@NgModule({
  declarations: [TrainingDetailsComponent, TrainingDetailsCategoriesComponent, TrainingDetailsLatestComponent, TrainingDetailsMightLikeComponent, TrainingDetailsTagsComponent, TrainingDetailsSectionComponent],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
    SharedModule,
    SlickCarouselModule,
    CoreModule
  ]
})
export class TrainingDetailsModule { }
