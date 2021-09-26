import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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
  Governorate = ['cairo', 'giza'];
  Occupation = ['teacher', 'doctor'];


  constructor(private fb: FormBuilder, private languageService: LanguageService) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({});
  }

  submitSignUpForm() {
    console.log('value', this.signUpForm);
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
