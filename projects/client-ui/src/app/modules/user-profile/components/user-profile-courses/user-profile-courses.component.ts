import {Component, Input, OnInit} from '@angular/core';
import {ConfirmationPopUpComponent} from '../../../../../../../../src/app/shared/components/confirmation-pop-up/confirmation-pop-up.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-user-profile-courses',
  templateUrl: './user-profile-courses.component.html',
  styleUrls: ['./user-profile-courses.component.scss']
})
export class UserProfileCoursesComponent implements OnInit {

  @Input() isArabic: boolean;
  myCourses: any[];
  isIntroProgress90: boolean;
  isIntroScore75: boolean;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getMyCourses();
  }

  getMyCourses(): void {
    this.myCourses = [
      {id: 1, name: {EN: 'Introductory Course Name', AR: 'الدورة التمهيديه'}, progress: 90, score: 75, status: 1},
      {id: 2, name: {EN: 'Advanced Course Name', AR: 'الدورة المتقدمه'}, progress: null, score: null, status: 0}
    ];
    this.isIntroProgress90 = this.myCourses.find(course => course.id === 1).progress >= 90;
    this.isIntroScore75 = this.myCourses.find(course => course.id === 1).score >= 75;
  }

  openDialog(): void {
    this.dialog.open(ConfirmationPopUpComponent, {
      width: '740px',
    });
  }
}
