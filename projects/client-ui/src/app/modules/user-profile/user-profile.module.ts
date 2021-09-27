import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { UserProfileCoursesComponent } from './components/user-profile-courses/user-profile-courses.component';
import {MatTabsModule} from '@angular/material';


@NgModule({
  declarations: [UserProfileComponent, UserProfileInfoComponent, UserProfileCoursesComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatTabsModule
  ]
})
export class UserProfileModule { }
