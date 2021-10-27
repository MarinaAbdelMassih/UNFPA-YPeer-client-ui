import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() questions = [];
  @Input() currentQuestion;
  @Output() sendAnswer: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendAnswers(event, answer?){
    if ( this.currentQuestion.type == 'multiple') {
      answer.selected = event.checked;
      this.sendAnswer.emit(answer);
    }
    else if (this.currentQuestion.type == 'true&false') {
      this.currentQuestion.selectedAnswer = event;
      this.sendAnswer.emit(this.currentQuestion);
    }

  }

}
