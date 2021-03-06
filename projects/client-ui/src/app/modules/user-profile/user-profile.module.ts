import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { UserProfileCoursesComponent } from './components/user-profile-courses/user-profile-courses.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import { CourseBarComponent } from './components/course-bar/course-bar.component';
import { CourseStatusComponent } from './components/course-status/course-status.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ImageUploaderComponent} from './components/image-uploader/image-uploader.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import {MatIconModule} from '@angular/material/icon';
import {AlmShareButtonsModule} from '../../../../../../src/app/components/alm-share-buttons/alm-share-buttons.module';
import {DialogService} from '../../../../../../src/app/shared/services/custom-dialogs/dialog.service';



@NgModule({
  declarations: [UserProfileComponent, UserProfileInfoComponent, UserProfileCoursesComponent, CourseBarComponent, CourseStatusComponent, ImageUploaderComponent],
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        MatTabsModule,
        ReactiveFormsModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        NgCircleProgressModule,
        MatNativeDateModule,
        MatDatepickerModule,
        NgxDropzoneModule,
        MatButtonModule,
        MatIconModule,
        AlmShareButtonsModule,
    ],
     providers: [DialogService]
})
export class UserProfileModule { }
