import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCatalogRoutingModule } from './course-catalog-routing.module';
import { CourseCatalogComponent } from './course-catalog.component';
import { IllustrativeVideoSectionComponent } from './components/illustrative-video-section/illustrative-video-section.component';
import { InstructorsListComponent } from './components/instructors-list/instructors-list.component';
import { AdvancedCoursesSectionComponent } from './components/advanced-courses-section/advanced-courses-section.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [CourseCatalogComponent, IllustrativeVideoSectionComponent, InstructorsListComponent, AdvancedCoursesSectionComponent],
  imports: [
    CommonModule,
    CourseCatalogRoutingModule,
    SharedModule
  ]
})
export class CourseCatalogModule { }
