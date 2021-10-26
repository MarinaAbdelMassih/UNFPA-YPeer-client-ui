import {Component, Input, OnInit} from '@angular/core';
import {IStuff} from "../../../../../../../src/app/shared/models/course-viewer/stuff.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input() quiz: IStuff;
  currentQuestion;
  currentQuestionIndex;
  questions = [{id:1, title: 'Question 1', body: 'question 1 body rrrrrrrr', type: 'true&false'}, {id:2, title: 'Question 2', body: 'question 2 body rrrrrrrr'}
  ,{id:3, title: 'Question 3', body: 'question 3 body rrrrrrrr'}];
  constructor() { }

  ngOnInit() {
    this.currentQuestion = this.questions[0];
    this.currentQuestionIndex = 0;
  }

  getNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestion = this.questions[this.currentQuestionIndex + 1];
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
    }
  }

  getPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestion = this.questions[this.currentQuestionIndex - 1];
      this.currentQuestionIndex = this.currentQuestionIndex - 1;
    }
  }

}
