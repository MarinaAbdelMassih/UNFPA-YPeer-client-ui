import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { UserProfileCoursesComponent } from './components/user-profile-courses/user-profile-courses.component';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import { CourseBarComponent } from './components/course-bar/course-bar.component';
import { CourseStatusComponent } from './components/course-status/course-status.component';
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  declarations: [UserProfileComponent, UserProfileInfoComponent, UserProfileCoursesComponent, CourseBarComponent, CourseStatusComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgCircleProgressModule
  ]
})
export class UserProfileModule { }
