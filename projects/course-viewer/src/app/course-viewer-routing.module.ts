import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from "./course-viewer.component";


const routes: Routes = [
  {path: '', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseViewerRoutingModule { }
