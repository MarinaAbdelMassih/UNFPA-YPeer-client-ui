import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsCategoriesComponent } from './components/events-categories/events-categories.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventsTagsComponent } from './components/events-tags/events-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [EventsComponent, EventsCategoriesComponent, EventsListComponent, EventsTagsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
