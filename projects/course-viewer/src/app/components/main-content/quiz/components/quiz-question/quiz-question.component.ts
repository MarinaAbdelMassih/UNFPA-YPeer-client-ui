import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() questions = [];
  @Input() currentQuestion;
  constructor() { }

  ngOnInit() {
  }

}
