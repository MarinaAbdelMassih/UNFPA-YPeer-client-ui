import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { VideoComponent } from './video/video.component';
import {FlexModule} from "@angular/flex-layout";
import { QuizComponent } from './quiz/quiz.component';
import { QuizNavBarComponent } from './quiz/components/quiz-nav-bar/quiz-nav-bar.component';
import { QuizQuestionComponent } from './quiz/components/quiz-question/quiz-question.component';
import {MatCheckboxModule, MatRadioModule} from "@angular/material";



@NgModule({
  declarations: [MainContentComponent, VideoComponent, QuizComponent, QuizNavBarComponent, QuizQuestionComponent],
  exports: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatRadioModule,
    MatCheckboxModule
  ],

  entryComponents: [VideoComponent, QuizComponent]
})
export class MainContentModule { }
