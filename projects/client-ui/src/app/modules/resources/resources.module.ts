import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { ResourcesCategoriesComponent } from './components/resources-categories/resources-categories.component';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';
import { ResourcesTagsComponent } from './components/resources-tags/resources-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [ResourcesComponent, ResourcesCategoriesComponent, ResourcesListComponent, ResourcesTagsComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    SharedModule
  ]
})
export class ResourcesModule { }
