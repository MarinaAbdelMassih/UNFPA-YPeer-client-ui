import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {MyProfileService} from '../../../../../../../../src/app/shared/services/my-profile.service';
import {IUserInfo} from '../../../../../../../../src/app/shared/models/my-profile.model';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss']
})
export class UserProfileInfoComponent implements OnInit, OnDestroy {
  userProfileForm: FormGroup;
  isArabic: boolean;
  subscription: Subscription;
  gender = ['male', 'female'];
  education = ['primary', 'secondary'];
  days = [1, 2, 3, 4, 5];
  months = ['jan', 'feb', 'mar'];
  years = [2020, 2021];
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  userInfo: IUserInfo;
  updateDataInfo: any;
  userId = 3;
  uuid;

  constructor(private fb: FormBuilder, private languageService: LanguageService, private myProfileService: MyProfileService) {
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

  // id: number;
  // uuid: string;
  // username: string;
  // birthDate: string;


  ngOnInit() {
    this.checkLanguage();
    this.getUserInfoById();
  }

  getUserInfoById() {
    this.myProfileService.getUserInfo(this.userId).then(data => {
      this.userInfo = data;
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
    this.updateDataInfo = {
      id: this.userId,
      uuid: this.uuid,
      username: this.userProfileForm.controls.firstName.value + ' ' + this.userProfileForm.controls.lastName.value,
      firstName: this.userProfileForm.controls.firstName.value,
      email: this.userProfileForm.controls.email.value,
      birthDate: this.userProfileForm.controls.birthDate.value,
      educationalLevelId: this.userProfileForm.controls.educationalLevelId.value,
      lastName: this.userProfileForm.controls.lastName.value,
      phone: this.userProfileForm.controls.phone.value,
      genderId: this.userProfileForm.controls.genderId.value,
      occupation: this.userProfileForm.controls.occupation.value
    };
    this.myProfileService.updateUserInfo(this.updateDataInfo).then(data => {
      console.log(data);
    });
  }

  checkLanguage()
    :
    void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
