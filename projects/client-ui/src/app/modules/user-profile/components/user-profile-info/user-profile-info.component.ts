import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {MyProfileService} from '../../../../../../../../src/app/shared/services/my-profile.service';
import {IUserInfo} from '../../../../../../../../src/app/shared/models/my-profile.model';
import {ImageService} from '../../../../../../../../src/app/shared/services/image.service';
import {DatePipe} from '@angular/common';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';

// @ts-ignore
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class UserProfileInfoComponent implements OnInit, OnDestroy {
  userProfileForm: FormGroup;
  isArabic: boolean;
  subscription: Subscription;
  // gender = ['male', 'female'];
  gender;
  education;
  // education = ['primary', 'secondary'];
  // days = [1, 2, 3, 4, 5];
  // months = ['jan', 'feb', 'mar'];
  // years = [2020, 2021];
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  userInfo: IUserInfo;
  updateDataInfo: any;
  userId;
  uuid;
  files: File[] = [];
  upload: boolean;
  update = true;
  image: string | ArrayBuffer;
  imageSelected = false;
  imageSuccessMessageUploaded = false;
  imageName: string;
  width: number;
  previewWidth: number;
  height: number;
  previewHeight: number;
  birthday: any;
  birthDate = new FormControl(moment());
  successMessage: any;
  readonlyField;

  constructor(private datepipe: DatePipe, private fb: FormBuilder, private languageService: LanguageService, private myProfileService: MyProfileService, private imageService: ImageService) {
    this.userProfileForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      birthDate: new FormControl('', Validators.required),
      // days: new FormControl('', Validators.required),
      // months: new FormControl('', Validators.required),
      // years: new FormControl('', Validators.required),
      educationalLevelId: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      genderId: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });
  }

  ngOnInit() {
    this.userId = localStorage.getItem('id');
    this.uuid = localStorage.getItem('uuid');

    this.checkLanguage();
    this.getUserInfoById();
    this.myProfileService.getGenders().then(data => {
      this.gender = data;
    });
    this.myProfileService.getEducationalLevels().then(data => {
      this.education = data;
    });
    this.image = this.imageService.getHashedImage(this.imageName);
  }

  getUserInfoById() {
    this.myProfileService.getUserInfo(this.userId).then(data => {
      this.userInfo = data;
      this.readonlyField = true;
      this.userProfileForm.setValue({
        firstName: this.userInfo.firstName,
        email: this.userInfo.email,
        birthDate: this.userInfo.birthDate,
        educationalLevelId: this.userInfo.educationalLevelId,
        lastName: this.userInfo.lastName,
        phone: this.userInfo.phone,
        genderId: this.userInfo.genderId,
        occupation: this.userInfo.occupation
      });
    });
  }

  submitUserProfileForm() {
    console.log('value', this.userProfileForm.value);
    this.birthday = this.userProfileForm.controls.birthDate.value;
    const latestDate = this.datepipe.transform(this.birthday, 'yyyy-MM-dd');
    this.updateDataInfo = {
      id: this.userId,
      username: this.userProfileForm.controls.firstName.value + ' ' + this.userProfileForm.controls.lastName.value,
      firstName: this.userProfileForm.controls.firstName.value,
      email: this.userProfileForm.controls.email.value,
      // birthDate: this.userProfileForm.controls.birthDate.value,
      birthDate: latestDate,
      educationalLevelId: this.userProfileForm.controls.educationalLevelId.value,
      lastName: this.userProfileForm.controls.lastName.value,
      phone: this.userProfileForm.controls.phone.value,
      genderId: this.userProfileForm.controls.genderId.value,
      occupation: this.userProfileForm.controls.occupation.value
    };
    this.myProfileService.updateUserInfo(this.updateDataInfo).then(() => {
      this.successMessage = {EN: 'Your information has been updated successfully', AR: 'لقد تم تعديل بياناتك بنجاح'};
      setTimeout(() => {
        this.successMessage = null
      }, 2000);
    });
  }

  checkLanguage(): void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onImageChange($event: string | ArrayBuffer) {
    this.image = $event;
    this.imageSelected = true;
  }

  onImageUpload($event: boolean) {
    this.upload = false;
    if ($event) {
      this.update = true;
      this.image = this.imageService.getHashedImage(this.imageName);
      this.imageSuccessMessageUploaded = true;
      setTimeout(() => this.imageSuccessMessageUploaded = false, 4000);
    }
  }

  onImageRemove() {
    this.image = null;
    this.imageSelected = false;
  }

  onImageLoadError() {
    this.update = false;
  }

  uploadImage() {
    this.upload = true;
    this.imageSelected = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

