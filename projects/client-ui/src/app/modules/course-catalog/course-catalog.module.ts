import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCatalogRoutingModule } from './course-catalog-routing.module';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';


@NgModule({
  declarations: [CourseCatalogComponent],
  imports: [
    CommonModule,
    CourseCatalogRoutingModule
  ]
})
export class CourseCatalogModule { }
