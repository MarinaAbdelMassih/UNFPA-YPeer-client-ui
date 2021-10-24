import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {IUserData} from "../../../../../../../../src/app/shared/models/user-data.interface";
import {SignUpService} from '../../../../../../../../src/app/shared/services/sign-up.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  isArabic: boolean;
  subscription: Subscription;
  gender = ['male', 'female'];
  status = ['single', 'married'];
  education = ['primary', 'secondary'];
  governorate = ['cairo', 'giza'];
  days = [1, 2, 3, 4, 5];
  months = ['jan', 'feb', 'mar'];
  years = [2020, 2021];
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  addUser: any;


  constructor(private fb: FormBuilder, private languageService: LanguageService, private signUpService: SignUpService) {
    this.signUpForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      educationalLevelId: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      rePassword: new FormControl('', Validators.required),
      days: new FormControl('', Validators.required),
      months: new FormControl('', Validators.required),
      years: new FormControl('', Validators.required),
      governorateId: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    }, {
      validator: this.MustMatch('password', 'rePassword')
    });
  }

  ngOnInit() {
    this.checkLanguage();
  }

  submitSignUpForm() {
    console.log('value', this.signUpForm.value);
    this.addUser = {
      username: this.signUpForm.controls.firstName.value + ' ' + this.signUpForm.controls.lastName.value,
      firstName: this.signUpForm.controls.firstName.value,
      email: this.signUpForm.controls.email.value,
      password: this.signUpForm.controls.password.value,
      gender: this.signUpForm.controls.gender.value.toUpperCase(),
      maritalStatus: this.signUpForm.controls.maritalStatus.value.toUpperCase(),
      educationalLevelId: this.signUpForm.controls.educationalLevelId.value,
      lastName: this.signUpForm.controls.lastName.value,
      phone: this.signUpForm.controls.phone.value,
      birthDate: '1990-04-22',
      governorateId: this.signUpForm.controls.governorateId.value,
      occupation: this.signUpForm.controls.occupation.value,
      authType: 'ALMENTOR',
    };
    this.signUpService.signUp(this.addUser).then(data => {
      console.log('signUp', data);
    });
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
        matchingControl.setErrors({ MustMatch: true });
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
