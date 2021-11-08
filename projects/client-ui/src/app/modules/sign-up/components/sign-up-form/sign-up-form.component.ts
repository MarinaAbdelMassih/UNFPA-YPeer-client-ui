import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {SignUpService} from '../../../../../../../../src/app/shared/services/sign-up.service';
import {Router} from '@angular/router';
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
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  isArabic: boolean;
  subscription: Subscription;
  gender: any;
  status: any;
  education: any;
  governorate: any;
  // days = [1, 2, 3, 4, 5];
  // months = ['jan', 'feb', 'mar'];
  // years = [2020, 2021];
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  passwordPattern = '^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*_~+/.])\\S{6,20}$';
  phonePattern = '^[0-9]{11}$';
  addUser: any;
  birthday;
  errorMsg: string;
  birthDate = new FormControl(moment());

  constructor(private datepipe: DatePipe, private fb: FormBuilder, private languageService: LanguageService, private signUpService: SignUpService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zء-ي ]+$/), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern), Validators.minLength(10)]),
      birthDate: new FormControl('', Validators.required),
      genderId: new FormControl('', Validators.required),
      maritalStatusId: new FormControl('', Validators.required),
      educationalLevelId: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Zء-ي ]+$/), Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern), Validators.minLength(11)]),
      rePassword: new FormControl('', Validators.required),
      // days: new FormControl('', Validators.required),
      // months: new FormControl('', Validators.required),
      // years: new FormControl('', Validators.required),
      governorateId: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required,Validators.maxLength(20)]),
    }, {
      validator: this.MustMatch('password', 'rePassword')
    });
  }

  ngOnInit() {
    this.checkLanguage();
    this.signUpService.getGenders().then(data => {
      this.gender = data;
    });
    this.signUpService.getMaritalStatus().then(data => {
      this.status = data;
    });
    this.signUpService.getEducationalLevels().then(data => {
      this.education = data;
    });
    this.signUpService.getGovernorates().then(data => {
      this.governorate = data;
    });

  }


  submitSignUpForm() {
    // this.birthday = this.signUpForm.controls.birthDate.value.toLocaleDateString();
    // const latestDate = this.datepipe.transform(this.birthday, 'yyyy-MM-dd');
    this.addUser = {
      username: this.signUpForm.controls.firstName.value + ' ' + this.signUpForm.controls.lastName.value,
      firstName: this.signUpForm.controls.firstName.value,
      email: this.signUpForm.controls.email.value,
      password: this.signUpForm.controls.password.value,
      genderId: this.signUpForm.controls.genderId.value,
      maritalStatusId: this.signUpForm.controls.maritalStatusId.value,
      educationalLevelId: this.signUpForm.controls.educationalLevelId.value,
      lastName: this.signUpForm.controls.lastName.value,
      phone: this.signUpForm.controls.phone.value,
      birthDate: this.signUpForm.controls.birthDate.value,
      // birthDate: latestDate,
      governorateId: this.signUpForm.controls.governorateId.value,
      occupation: this.signUpForm.controls.occupation.value,
      authType: 'ALMENTOR',
    };
    this.signUpService.signUp(this.addUser).then((response: any) => {
        if (response.success) {
          localStorage.setItem('username', response.data.firstName);
          localStorage.setItem('uuid', response.data.uuid);
          this.router.navigate(['/welcome']);
        } else {
          this.errorMsg = response.error.message;
        }
      },
      (error) => {
        this.errorMsg = error.error.error.message;
      }
    );
  }

  checkLanguage(): void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
