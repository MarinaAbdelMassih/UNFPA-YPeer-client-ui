import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';

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
  days = [1, 2 , 3 , 4 , 5];
  months = ['jan', 'feb' , 'mar'];
  years = [2020 , 2021];
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';



  constructor(private fb: FormBuilder, private languageService: LanguageService) {
  }

  ngOnInit() {
    this.checkLanguage();
    this.signUpForm = this.fb.group({
      fName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required]),
      gender: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      education: new FormControl('', Validators.required),
      lName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      rePassword: new FormControl('', Validators.required),
      days: new FormControl('', Validators.required),
      months: new FormControl('', Validators.required),
      years: new FormControl('', Validators.required),
      governorate: new FormControl('', Validators.required),
      occupation: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });
  }

  submitSignUpForm() {
    console.log('value', this.signUpForm.value);
  }

  checkLanguage(): void {
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
