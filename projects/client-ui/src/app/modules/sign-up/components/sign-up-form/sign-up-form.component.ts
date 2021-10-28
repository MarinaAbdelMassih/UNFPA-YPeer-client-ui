import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {IUserData} from "../../../../../../../../src/app/shared/models/user-data.interface";
import {SignUpService} from '../../../../../../../../src/app/shared/services/sign-up.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  isArabic: boolean;
  subscription: Subscription;
  // gender = ['male', 'female'];
  gender: any;
  // status = ['single', 'married'];
  status: any;
  // education = ['primary', 'secondary'];
  education: any;
  // governorate = ['cairo', 'giza'];
  governorate: any;
  // days = [1, 2, 3, 4, 5];
  // months = ['jan', 'feb', 'mar'];
  // years = [2020, 2021];
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  addUser: any;
  birthday;
  userDataLogin: any;


  constructor(private fb: FormBuilder, private languageService: LanguageService, private signUpService: SignUpService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', Validators.required),
      genderId: new FormControl('', Validators.required),
      maritalStatusId: new FormControl('', Validators.required),
      educationalLevelId: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      rePassword: new FormControl('', Validators.required),
      // days: new FormControl('', Validators.required),
      // months: new FormControl('', Validators.required),
      // years: new FormControl('', Validators.required),
      governorateId: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    }, {
      validator: this.MustMatch('password', 'rePassword')
    });
  }

  ngOnInit() {
    this.checkLanguage();
    this.signUpService.getGenders().then(data => {
      this.gender = data;
      console.log(this.gender);
    });
    this.signUpService.getMaritalStatus().then(data => {
      this.status = data;
      console.log(this.status);
    });
    this.signUpService.getEducationalLevels().then(data => {
      this.education = data;
      console.log(this.education);
    });
    this.signUpService.getGovernorates().then(data => {
      this.governorate = data;
      console.log(this.governorate);
    });

  }

  submitSignUpForm() {
    console.log('value', this.signUpForm.value);
    this.birthday = this.signUpForm.controls.birthDate.value.toLocaleDateString();
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
      // birthDate: this.birthday,
      birthDate: '2020-02-10',
      governorateId: this.signUpForm.controls.governorateId.value,
      occupation: this.signUpForm.controls.occupation.value,
      authType: 'ALMENTOR',
    };
    this.signUpService.signUp(this.addUser).then((data: any) => {
      console.log('signUp', data);
      localStorage.setItem('username', JSON.stringify(data.username));
      localStorage.setItem('uuid', JSON.stringify(data.uuid));
      this.router.navigate(['/welcome']);
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
