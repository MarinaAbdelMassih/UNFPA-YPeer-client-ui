import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quiz-nav-bar',
  templateUrl: './quiz-nav-bar.component.html',
  styleUrls: ['./quiz-nav-bar.component.scss']
})
export class QuizNavBarComponent implements OnInit {

  @Output() nextClicked: EventEmitter<boolean> = new EventEmitter();
  @Output() previousClicked: EventEmitter<boolean> = new EventEmitter();
  @Input() currentQuestionIndex;
  @Input() numberOfQuestions;
  constructor() { }

  ngOnInit() {
  }

  nextButtonClicked() {
    this.nextClicked.emit();
  }

  previousButtonClicked() {
    this.previousClicked.emit();
  }

}
