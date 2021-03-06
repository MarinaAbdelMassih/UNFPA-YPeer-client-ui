import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {MyProfileService} from '../../../../../../../../src/app/shared/services/my-profile.service';
import {IUserInfo} from '../../../../../../../../src/app/shared/models/my-profile.model';
import {DatePipe} from '@angular/common';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

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

  @Input() userInfo: IUserInfo;
  @Input() isArabic: boolean;
  userProfileForm: FormGroup;
  subscription: Subscription;
  gender;
  education;
  emailPattern = '^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  phonePattern = '^[0-9]{11}$';
  updateDataInfo: any;
  userId: number;
  files: File[] = [];
  upload: boolean;
  update = true;
  image: string;
  imageSelected = false;
  imageSuccessMessageUploaded = false;
  width: number;
  height: number;
  birthday: any;
  successMessage: any;
  maxDate = new Date();
  readonlyField;

  constructor(private datepipe: DatePipe, private fb: FormBuilder, private languageService: LanguageService, private myProfileService: MyProfileService) {
    this.userProfileForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z??-?? ]+$/), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      birthDate: new FormControl('', Validators.required),
      educationalLevelId: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.pattern(/^[a-zA-Z??-?? ]+$/), Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern), this.noWhitespaceValidator, Validators.maxLength(11)]),
      genderId: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.maxLength(20)]),
    });
  }

  ngOnInit() {
    this.userId = this.userInfo.id;
    this.populateFormData();
    this.myProfileService.getGenders().then(data => {
      this.gender = data;
    });
    this.myProfileService.getEducationalLevels().then(data => {
      this.education = data;
    });
    if(this.userInfo.hasImage) {
      this.image = this.userInfo.profileImage;
    }
  }

  populateFormData() {
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
  }

  submitUserProfileForm() {
    this.birthday = this.userProfileForm.controls.birthDate.value;
    const latestDate = this.datepipe.transform(this.birthday, 'yyyy-MM-dd');
    this.updateDataInfo = {
      id: this.userId,
      username: this.userProfileForm.controls.firstName.value + ' ' + this.userProfileForm.controls.lastName.value,
      firstName: this.userProfileForm.controls.firstName.value,
      email: this.userProfileForm.controls.email.value,
      birthDate: latestDate,
      educationalLevelId: this.userProfileForm.controls.educationalLevelId.value,
      lastName: this.userProfileForm.controls.lastName.value,
      phone: this.userProfileForm.controls.phone.value,
      genderId: this.userProfileForm.controls.genderId.value,
      occupation: this.userProfileForm.controls.occupation.value
    };
    this.myProfileService.updateUserInfo(this.updateDataInfo).then(() => {
      this.successMessage = {EN: 'Your information has been updated successfully', AR: '?????? ???? ?????????? ?????????????? ??????????'};
      setTimeout(() => {this.successMessage = null}, 5000);
    });
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onImageChange($event: string) {
    this.image = $event;
    this.imageSelected = true;
  }

  onImageUpload($event) {
    this.upload = false;
    if ($event) {
      this.update = true;
      this.image = $event;
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

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'required': true };
  }
}

