import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { SharedModule } from '../../../../../../src/app/shared/shared.module';
import { MediaCategoriesComponent } from './components/media-categories/media-categories.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaTagsComponent } from './components/media-tags/media-tags.component';


@NgModule({
  declarations: [MediaComponent, MediaCategoriesComponent, MediaListComponent, MediaTagsComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule
  ]
})
export class MediaModule { }
