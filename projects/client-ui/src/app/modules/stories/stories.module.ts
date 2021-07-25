import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { StoriesCategoriesComponent } from './components/stories-categories/stories-categories.component';
import { StoriesListComponent } from './components/stories-list/stories-list.component';
import { StoriesTagsComponent } from './components/stories-tags/stories-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [StoriesComponent, StoriesCategoriesComponent, StoriesListComponent, StoriesTagsComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    SharedModule
  ]
})
export class StoriesModule { }
