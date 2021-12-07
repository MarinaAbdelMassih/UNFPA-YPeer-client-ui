import {Component, OnInit, OnDestroy} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';
import {MyProfileService} from '../../../../../../src/app/shared/services/my-profile.service';
import {MyCoursesService} from '../../../../../../src/app/shared/services/my-courses.service';
import {ConfirmationPopUpComponent} from '../../../../../../src/app/shared/components/confirmation-pop-up/confirmation-pop-up.component';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-itworx-iframe',
  templateUrl: './itworx-iframe.component.html',
  styleUrls: ['./itworx-iframe.component.scss']
})
export class ItworxIframeComponent implements OnInit, OnDestroy {

  constructor(private sanitizer: DomSanitizer, private signInService: SignInService,
              private myProfileService: MyProfileService, private myCoursesService: MyCoursesService,
              public dialog: MatDialog, private route: ActivatedRoute) { }

  token: string;
  courseRoundId: number;
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    let paramsSub = this.route.params.subscribe((params) => {
      if (params.roundId) {
        this.courseRoundId = params.roundId;
      }
    });
    this.subscriptions.push(paramsSub);
    this.checkUserStatus();
  }

  checkUserStatus(): void {
    this.signInService.userInfo.subscribe((userData) => {
        this.myProfileService.getUserInfo(userData.userId).then(userInfo => {
          if(userInfo){
            this.myCoursesService.getIframeToken({firstName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email, userId: userInfo.id}).then(response => {
              this.token = response.data;
            }).catch(() => {
              this.dialog.open(ConfirmationPopUpComponent, {width: '740px', data: {text: {EN: 'You are not eligible to access the advanced course right now.', AR: 'غير مصرح لك بمشاهده الدورة المتقدمة الاًن.'}}});
            });
          }
        });
    });
  }

  safeURL() {
    const IframeUrl = 'https://learn.learningcurvecloud.com/CoursePlayer/WebRedirection';
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${IframeUrl}?courseRoundId=${this.courseRoundId}&token=${this.token}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.map((subscription) => {
      subscription.unsubscribe();
    })
  }
}
