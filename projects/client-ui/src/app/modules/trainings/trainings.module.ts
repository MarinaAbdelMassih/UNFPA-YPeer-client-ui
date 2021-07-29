import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { TrainingsCategoriesComponent } from './components/trainings-categories/trainings-categories.component';
import { TrainingsListComponent } from './components/trainings-list/trainings-list.component';
import { TrainingsTagsComponent } from './components/trainings-tags/trainings-tags.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [TrainingsComponent, TrainingsCategoriesComponent, TrainingsListComponent, TrainingsTagsComponent],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    SharedModule
  ]
})
export class TrainingsModule { }
