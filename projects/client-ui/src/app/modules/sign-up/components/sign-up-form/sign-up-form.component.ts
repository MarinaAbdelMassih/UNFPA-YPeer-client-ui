import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {SignUpService} from '../../../../../../../../src/app/shared/services/sign-up.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
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
  addUser: any;
  birthday;
  errorMsg: string;


  constructor(private datepipe: DatePipe, private fb: FormBuilder, private languageService: LanguageService, private signUpService: SignUpService, private router: Router) {
    this.signUpForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', Validators.required),
      genderId: new FormControl('', Validators.required),
      maritalStatusId: new FormControl('', Validators.required),
      educationalLevelId: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.maxLength(11)]),
      rePassword: new FormControl('', Validators.required),
      // days: new FormControl('', Validators.required),
      // months: new FormControl('', Validators.required),
      // years: new FormControl('', Validators.required),
      governorateId: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required, this.noWhitespaceValidator, Validators.maxLength(20)]),
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
    this.birthday = this.signUpForm.controls.birthDate.value.toLocaleDateString();
    const latestDate = this.datepipe.transform(this.birthday, 'yyyy-MM-dd');
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
      birthDate: latestDate,
      governorateId: this.signUpForm.controls.governorateId.value,
      occupation: this.signUpForm.controls.occupation.value,
      authType: 'ALMENTOR',
    };
    this.signUpService.signUp(this.addUser).then((response: any) => {
        if (response.success) {
          localStorage.setItem('username', response.data.firstName);
          localStorage.setItem('uuid', response.data.uuid);
          this.router.navigate(['/welcome']);
        }
        else {
          this.errorMsg = response.error.message;
        }
      },
      (error) => {
        this.errorMsg = error.message;
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

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'required': true };
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
