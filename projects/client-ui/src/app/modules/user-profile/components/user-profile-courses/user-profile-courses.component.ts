import {Component, Input, OnInit} from '@angular/core';
import {ConfirmationPopUpComponent} from '../../../../../../../../src/app/shared/components/confirmation-pop-up/confirmation-pop-up.component';
import {MatDialog} from '@angular/material';
import {MyCoursesService} from '../../../../../../../../src/app/shared/services/my-courses.service';
import {IMyCourses} from '../../../../../../../../src/app/shared/models/my-courses.model';
import {TranslationModel} from '../../../../../../../../src/app/shared/models/translation.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile-courses',
  templateUrl: './user-profile-courses.component.html',
  styleUrls: ['./user-profile-courses.component.scss']
})
export class UserProfileCoursesComponent implements OnInit {

  @Input() isArabic: boolean;
  myCourses: IMyCourses[];
  introductoryCourse: IMyCourses;
  advancedCourse: IMyCourses;
  btnText: TranslationModel;
  advancedStatusTitle: TranslationModel;
  advancedStatusDescription: TranslationModel;
  advancedStatusBtnText: TranslationModel;

  constructor(public dialog: MatDialog, private myCoursesService: MyCoursesService, private router: Router) {
  }

  ngOnInit() {
    this.getMyCourses();
  }

  getMyCourses(): void {
    // let userId = localStorage.getItem('id');
    this.myCoursesService.getMyCourses({userId: 1000}).then((myCourses) => {
      console.log(myCourses);
      // this.myCourses = myCourses.courses;
      this.myCourses = [
        {id: 1, name: 'introductory course', progress: 100, score: 0, hasCertificate: false, courseStatus: null, type: 1},
        {id: 2, name: 'introductory course', progress: 0, score: 0, hasCertificate: true, courseStatus: 4, type: 2}];
      this.introductoryCourse = (this.myCourses)[0];
      this.advancedCourse = (this.myCourses)[1];
      this.setAdvancedStatus();
    });
  }

  setButtonText(course: IMyCourses): TranslationModel {
    if (course.progress === 0) {
      this.btnText = {EN: 'watch course', AR: 'ابدأ المشاهده'};
    } else if (course.progress >= 90 && course.score < 75){
      this.btnText = {EN: 'Rewatch course', AR: 'أعد المشاهده'};
    } else if (course.progress < 90){
      this.btnText = {EN: 'Resume Course', AR: 'اكمل الدورة'};
    } else if (course.progress >= 90 && course.score >= 75 && course.hasCertificate){
      this.btnText = {EN: 'View Certificate', AR: 'افتح الشهاده'};
    }
    return (this.btnText);
  }

  setAdvancedStatus(): void {
    if (this.introductoryCourse.progress >= 90 && this.introductoryCourse.score >= 70 && !this.advancedCourse) {
      this.advancedStatusTitle = {EN: 'What Next?', AR: 'ماذا بعد؟'};
      this.advancedStatusDescription = {EN: 'advanced courses is available for limited time (2 months) from the date of enrollment.', AR: ''};
      this.advancedStatusBtnText = {EN: 'Enroll Now', AR: 'سجل الان'};
    } else if (this.advancedCourse.courseStatus === 1) {
      this.advancedStatusTitle = {EN: 'Thank You!', AR: 'شكراً!'};
      this.advancedStatusDescription = {EN: 'You have applied to the advanced course successfully. Stay tuned; we are preparing your advanced course.', AR: ''};
    } else if (this.advancedCourse.courseStatus === 2) {
      this.advancedStatusTitle = {EN: 'Thank You!', AR: 'شكراً!'};
      this.advancedStatusDescription = {EN: 'You did a great job. Now you are on our waiting list, be patient; you will join the advanced course shortly', AR: ''};
    }
  }

  openDialog(course: IMyCourses): void {
    if (course.courseStatus === 4 && this.advancedCourse.courseStatus === 4) {
      this.dialog.open(ConfirmationPopUpComponent, {
        width: '740px',
      });
    }
  }

  watchCourse(course: IMyCourses) : void {
    debugger;
    if(course.hasCertificate) {
      //view student certificate
    } else if (course.type === 1) {
      //navigate to introductory course viewer
      this.router.navigate(['/viewer/111']);
    } else if (course.type === 2) {
      //navigate to advanced course viewer
    }
  }

  enrollAdvanced(): void {
    //enrollment in advanced course request and recall getMyCourses() again to update the data
  }
}
