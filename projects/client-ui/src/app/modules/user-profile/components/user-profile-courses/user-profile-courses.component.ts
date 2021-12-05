import {Component, Input, OnInit} from '@angular/core';
import {ConfirmationPopUpComponent} from '../../../../../../../../src/app/shared/components/confirmation-pop-up/confirmation-pop-up.component';
import {MatDialog} from '@angular/material';
import {MyCoursesService} from '../../../../../../../../src/app/shared/services/my-courses.service';
import {IMyCourses} from '../../../../../../../../src/app/shared/models/my-courses.model';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';
import {Router} from '@angular/router';
import {IUserInfo} from '../../../../../../../../src/app/shared/models/my-profile.model';

@Component({
  selector: 'app-user-profile-courses',
  templateUrl: './user-profile-courses.component.html',
  styleUrls: ['./user-profile-courses.component.scss']
})
export class UserProfileCoursesComponent implements OnInit {

  @Input() userInfo: IUserInfo;
  @Input() isArabic: boolean;
  @Input() isActive: boolean;
  myCourses: IMyCourses[];
  introductoryCourse: IMyCourses;
  advancedCourse: IMyCourses;
  btnText: TranslationModel;
  advancedStatusTitle: TranslationModel;
  advancedStatusDescription: TranslationModel;
  advancedStatusBtnText: TranslationModel;
  inWaitingList: boolean;

  constructor(public dialog: MatDialog, private myCoursesService: MyCoursesService, private router: Router) {
  }

  ngOnInit() {
    this.getMyCourses();
  }

  getMyCourses(): void {
    this.myCoursesService.getMyCourses({userId: this.userInfo.id}).then((myCourses) => {
      this.myCourses = myCourses.courses;
      this.inWaitingList = myCourses.inWaitingList;
      this.introductoryCourse = this.myCourses.find(course => course.courseType === 1);
      this.advancedCourse = this.myCourses.find(course => course.courseType === 2);
      this.setAdvancedStatus();
    });
  }

  setAdvancedStatus(): void {
    if (this.introductoryCourse.progress >= 90 && this.introductoryCourse.score >= 75 && !this.advancedCourse && !this.inWaitingList) {
      this.advancedStatusTitle = {EN: 'What Next?', AR: 'ماذا بعد؟'};
      this.advancedStatusDescription = {EN: 'advanced courses is available for limited time (2 months) from the date of enrollment.', AR: 'الكورس متاح فقط لمده محدوده (شهرين) من تاريخ التسجيل'};
      this.advancedStatusBtnText = {EN: 'Enroll Now', AR: 'سجل الان'};
    } else if (!this.advancedCourse && this.inWaitingList) {
      this.advancedStatusTitle = {EN: 'Thank You!', AR: 'شكراً!'};
      this.advancedStatusDescription = {EN: 'You did a great job. Now you are on our waiting list, be patient; you will join the advanced course shortly', AR: 'لقد قمت بعمل رائع. انت الاُن علي قائمة الإنتظار, سوف يتم إلحاقك بالكورس قريبا'};
      this.advancedStatusBtnText = null;
    } else {
      this.advancedStatusTitle = null;
      this.advancedStatusDescription = null;
      this.advancedStatusBtnText = null;
    }
  }

  setButtonText(course: IMyCourses): TranslationModel {
    if (!course.progress) {
      this.btnText = {EN: 'watch course', AR: 'ابدأ المشاهده'};
    } else if (course.progress >= 90 && course.score < 75){
      this.btnText = {EN: 'Rewatch course', AR: 'أعد المشاهده'};
    } else if (course.progress < 90){
      this.btnText = {EN: 'Resume Course', AR: 'اكمل الدورة'};
    } else if (course.progress >= 90 && course.score >= 75){
      this.btnText = {EN: 'View Certificate', AR: 'افتح الشهاده'};
    }
    return (this.btnText);
  }

  setDisableValue(course: IMyCourses): boolean {
    if((course.courseType === 1 && !this.isActive) || (course.courseType === 2 && course.courseStatus === 2)) {
      return false;
    }
  }

  openDialog(course: IMyCourses): void {
    if ((course.courseType === 1 && !this.isActive) || (course.courseType === 2 && course.courseStatus === 2)) {
      this.dialog.open(ConfirmationPopUpComponent, {width: '740px', data: {text: 'You are not eligible to access the advanced course right now.'}});
    }  else if (course.courseType === 1) {
      //navigate to introductory course viewer
      this.router.navigate(['/viewer/111']);
    } else if (course.courseType === 2) {
      //navigate to advanced course viewer
      this.router.navigate(['/advanced-course']);
    }
  }

  watchCourse(course: IMyCourses) : void {
    if(course.hasCertificate) {
      //view student certificate
    } else if (course.courseType === 1) {
      //navigate to introductory course viewer
      this.router.navigate(['/viewer/111']);
    } else if (course.courseType === 2) {
      //navigate to advanced course viewer
      this.router.navigate(['/advanced-course']);
    }
  }

  enrollAdvanced(): void {
    //enrollment in advanced course request and recall getMyCourses() again to update the data
    this.myCoursesService.enrollAdvanced({userId: this.userInfo.id, email: this.userInfo.email, firstName: this.userInfo.firstName, lastName: this.userInfo.lastName}).then(() => {
      this.getMyCourses();
    });
  }
}
