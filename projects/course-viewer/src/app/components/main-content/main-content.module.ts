import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { VideoComponent } from './video/video.component';
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [MainContentComponent, VideoComponent],
  exports: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    FlexModule
  ]
})
export class MainContentModule { }
