import { Injectable } from '@angular/core';
import {CustomHttpClientService} from "./custom-http-client.service";
import {BehaviorSubject} from "rxjs";
import {IQuestion, IQuiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  examIsFinished: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userScore: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private customHttpClient: CustomHttpClientService) { }

  getExamById(sender: string, examBody: {userId: number, examId: number}): Promise<IQuiz> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'exams/get/details',
      sender: sender,
      receiver: 'details',
      body: examBody,
    })
  }

  submitAnswers(sender: string, examBody: {id: number, userId: number, questions: IQuestion[]}): Promise<any> {
    return this.customHttpClient.sendBackendRequest({
      endpoint: 'exams/submit/userAnswers',
      sender: sender,
      receiver: 'userAnswers',
      body: examBody,
    })
  }
}
