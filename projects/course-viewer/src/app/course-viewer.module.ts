import { NgModule } from '@angular/core';
import { CourseViewerRoutingModule } from './course-viewer-routing.module';
import { CourseViewerComponent } from './course-viewer.component';

@NgModule({
  declarations: [
    CourseViewerComponent
  ],
  imports: [
    CourseViewerRoutingModule
  ],
  providers: [],
  bootstrap: [CourseViewerComponent]
})
export class CourseViewerModule { }
