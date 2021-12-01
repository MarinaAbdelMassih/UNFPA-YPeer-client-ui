import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../../../../src/app/shared/services/quiz.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  score = 85;
  numberOfTrials = 3;
  constructor(private quizService: QuizService) {
    quizService.examUserData.subscribe(userData => {
      if (userData) {
        this.score = userData.userScore;
        this.numberOfTrials = userData.userUsedTrials
      }
    });
  }

  ngOnInit() {
  }

  viewCourse(type: string) {
    if (type == 'retakeAssessment')
      this.quizService.examIsFinished.next(false);
    else {
      location.reload();
      setTimeout(() => {this.quizService.examIsFinished.next(false); }, 1000);
    }
  }

}
