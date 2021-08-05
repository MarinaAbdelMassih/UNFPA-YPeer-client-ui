import { NgModule } from '@angular/core';
import { CourseViewerRoutingModule } from './course-viewer-routing.module';
import { CourseViewerComponent } from './course-viewer.component';
import {HeaderModule} from "./components/header/header.module";
import {FlexModule} from "@angular/flex-layout";
import { CurriculumSideNavComponent } from './components/curriculum-side-nav/curriculum-side-nav.component';
import {
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule
} from "@angular/material";
import { SectionItemComponent } from './components/curriculum-side-nav/section-item/section-item.component';
import {SharedModule} from "../../../../src/app/shared/shared.module";
import {CommonModule} from "@angular/common";
import { SessionItemComponent } from './components/curriculum-side-nav/session-item/session-item.component';
import { StuffItemComponent } from './components/curriculum-side-nav/stuff-item/stuff-item.component';
import {MainContentModule} from "./components/main-content/main-content.module";

@NgModule({
  declarations: [
    CourseViewerComponent,
    CurriculumSideNavComponent,
    SectionItemComponent,
    SessionItemComponent,
    StuffItemComponent
  ],
  imports: [
    CourseViewerRoutingModule,
    HeaderModule,
    FlexModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    SharedModule,
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MainContentModule
  ],
  providers: [],
  bootstrap: [CourseViewerComponent]
})
export class CourseViewerModule { }
