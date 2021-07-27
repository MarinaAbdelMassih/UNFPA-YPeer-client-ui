import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { PublicationsComponent } from './publications.component';
import { PublicationsCategoriesComponent } from './components/publications-categories/publications-categories.component';
import { PublicationsListComponent } from './components/publications-list/publications-list.component';
import { PublicationsTagsComponent } from './components/publications-tags/publications-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [PublicationsComponent, PublicationsCategoriesComponent, PublicationsListComponent, PublicationsTagsComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    SharedModule
  ]
})
export class PublicationsModule { }
