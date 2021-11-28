import {Component, Input, OnInit} from '@angular/core';
import {IStuff} from "../../../../../../../src/app/shared/models/course-viewer/stuff.model";
import {QuizService} from "../../../../../../../src/app/shared/services/quiz.service";
import {IQuestion} from "../../../../../../../src/app/shared/models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import {SignInService} from "../../../../../../../src/app/shared/services/sign-in.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input() quiz: IStuff;
  currentQuestion: IQuestion;
  currentQuestionIndex: number;
  quizStarted = false;
  questions : IQuestion[] = [];
  courseId: number;
  @Input() disabled: boolean = false;
  userId: number;
  constructor(private quizService: QuizService, private route: ActivatedRoute, private signInService: SignInService) { }

  ngOnInit() {
    this.userId = this.signInService.userInfo.getValue().userId;
    this.courseId = this.route.snapshot.params.courseId;
    this.initQuiz();
  }

  initQuiz() {
    this.quizService.getExamById('quiz', {userId: this.userId, examId: this.quiz.id})
      .then(quiz => {
        this.questions = quiz.questions;
        this.currentQuestion = this.questions[0];
        this.currentQuestionIndex = 0;
        this.quizService.examUserData.next({userScore: quiz.results.percentage, userUsedTrials: quiz.trials})
      });
  }
  startQuiz(){
    this.quizStarted = true;
  }

  getAnswers() {
    if (this.currentQuestion.type == 'MULTIPLE_CHOICE' || this.currentQuestion.type == 'SINGLE_CHOICE') {
      if (this.currentQuestion.possibleAnswers.some(answer => answer.answered == true)) {
        this.currentQuestion.answered = true;
      }
    }
    console.log(this.questions)
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

  submitAnswers() {
    this.questions.map(question => {
      question.possibleAnswers.map(answer => delete answer.selected);
    });
    this.quizService.submitAnswers('quiz',{id: this.quiz.id, userId: this.userId, courseId: this.courseId, questions: this.questions})
      .then(response => {
        this.quizService.examIsFinished.next(true);
        this.quizService.examUserData.next({userScore: response.results.percentage.toFixed(0), userUsedTrials: response.trials})
      })
  }

}
