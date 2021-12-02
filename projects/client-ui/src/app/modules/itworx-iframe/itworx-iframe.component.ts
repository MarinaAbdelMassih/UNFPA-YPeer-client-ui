import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {SignInService} from '../../../../../../src/app/shared/services/sign-in.service';
import {MyProfileService} from '../../../../../../src/app/shared/services/my-profile.service';
import {MyCoursesService} from '../../../../../../src/app/shared/services/my-courses.service';
import {ConfirmationPopUpComponent} from '../../../../../../src/app/shared/components/confirmation-pop-up/confirmation-pop-up.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-itworx-iframe',
  templateUrl: './itworx-iframe.component.html',
  styleUrls: ['./itworx-iframe.component.scss']
})
export class ItworxIframeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private signInService: SignInService,
              private myProfileService: MyProfileService, private myCoursesService: MyCoursesService,
              public dialog: MatDialog) { }

  token: string;

  ngOnInit() {
    this.checkUserStatus();
  }

  checkUserStatus(): void {
    this.signInService.userInfo.subscribe((userData) => {
        this.myProfileService.getUserInfo(userData.userId).then(userInfo => {
          if(userInfo){
            this.myCoursesService.getIframeToken({firstName: userInfo.firstName, lastName: userInfo.lastName, email: userInfo.email, userId: userInfo.id}).then(response => {
              this.token = response.data;
            }).catch(() => {
              this.dialog.open(ConfirmationPopUpComponent, {
                width: '740px',
              });
            });
          }
        });
    });
  }

  safeURL() {
    const IframeUrl = 'https://learn.learningcurvecloud.com/CoursePlayer/WebRedirection';
    const courseRoundId = 3361;
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${IframeUrl}?courseRoundId=${courseRoundId}&token=${this.token}`);
  }
}
