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
      this.score = userData.userScore;
      this.numberOfTrials = userData.userUsedTrials
    });
  }

  ngOnInit() {
    console.log(this.score, this.numberOfTrials)
  }

}
