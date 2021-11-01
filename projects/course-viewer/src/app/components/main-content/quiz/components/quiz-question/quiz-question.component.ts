import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IQuestion} from "../../../../../../../../../src/app/shared/models/quiz.model";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() questions: IQuestion[] = [];
  @Input() currentQuestion: IQuestion;
  @Input() currentQuestionIndex: number;
  @Output() sendAnswer: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendAnswers(event, answer?){
    if ( this.currentQuestion.type == 'MULTIPLE_CHOICE') {
      answer.answered = event.checked;
      answer.selected = event.checked;
      this.sendAnswer.emit(answer);
    }
    else if (this.currentQuestion.type == 'true&false') {
      this.currentQuestion.selectedAnswer = event;
      this.sendAnswer.emit(this.currentQuestion);
    }

  }

}
