import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { StoryCategoriesComponent } from './components/story-categories/story-categories.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryTagsComponent } from './components/story-tags/story-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [StoryComponent, StoryCategoriesComponent, StoryListComponent, StoryTagsComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
    SharedModule
  ]
})
export class StoryModule { }
