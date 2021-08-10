import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationDetailsRoutingModule } from './publication-details-routing.module';
import { PublicationDetailsComponent } from './publication-details.component';
import { PublicationDetailsCategoriesComponent } from './components/publication-details-categories/publication-details-categories.component';
import { PublicationDetailsLatestComponent } from './components/publication-details-latest/publication-details-latest.component';
import { PublicationDetailsMightLikeComponent } from './components/publication-details-might-like/publication-details-might-like.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CoreModule} from '../../../../../../src/app/core/core.module';
import { PublicationDetailsSectionComponent } from './components/publication-details-section/publication-details-section.component';
import { PublicationDetailsTagsComponent } from './components/publication-details-tags/publication-details-tags.component';


@NgModule({
  declarations: [PublicationDetailsComponent, PublicationDetailsCategoriesComponent, PublicationDetailsLatestComponent, PublicationDetailsMightLikeComponent,PublicationDetailsSectionComponent, PublicationDetailsTagsComponent],
  imports: [
    CommonModule,
    PublicationDetailsRoutingModule,
    SharedModule,
    SlickCarouselModule,
    CoreModule
  ]
})
export class PublicationDetailsModule { }
