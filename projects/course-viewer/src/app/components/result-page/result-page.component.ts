import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../../../../../src/app/shared/services/quiz.service";
import {MyCoursesService} from '../../../../../../src/app/shared/services/my-courses.service';
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';
import {User} from '../../../../../../src/app/shared/models/user.model';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

  score = 85;
  numberOfTrials = 3;
  userInfo: User
  constructor(private quizService: QuizService, private myCoursesService: MyCoursesService,
              private signInService: SignInService) {
    quizService.examUserData.subscribe(userData => {
      if (userData) {
        this.score = userData.userScore;
        this.numberOfTrials = userData.userUsedTrials
      }
    });
  }

  ngOnInit() {
    this.getUserInfo();
  }

  viewCourse(type: string) {
    if (type == 'retakeAssessment')
      this.quizService.examIsFinished.next(false);
    else {
      location.reload();
      setTimeout(() => {this.quizService.examIsFinished.next(false); }, 1000);
    }
  }

  getUserInfo(): void {
    this.signInService.userInfo.subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
  }

  getCertificate(): void {
    this.myCoursesService.getCertificate({userId: this.userInfo.userId, courseId: 111}).then(response => {
      if(response.certificateUrl) {
        window.open(response.certificateUrl, "_blank")
      }
    });
  }

}
