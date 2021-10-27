import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Subscription} from 'rxjs';
import {SignInService} from '../../../../../../../../src/app/shared/services/sign-in.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  isArabic: boolean;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  passwordPattern = '^(?=.*[A-Za-z])[a-zA-Z0-9!@#%~$&()-`.+,/\\"]{8,}$';
  subscription: Subscription;
  signInUserData: any;
  isChecked: boolean;


  constructor(private fb: FormBuilder, private languageService: LanguageService, private signInService: SignInService) {
  }

  ngOnInit() {
    this.isChecked = localStorage.getItem('remember-me') == 'false';
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // rememberMe: ['', [Validators.required]],
    });
  }

  submitSignInForm() {
    console.log('value', this.signInForm.value);
    this.signInUserData = {
      username: this.signInForm.controls.username.value,
      password: this.signInForm.controls.password.value,
      authType: 'ALMENTOR',
    };
    this.signInService.signIn(this.signInUserData).then(data => {
      console.log('signin', data);
    });
  }
  toggleEditable(event) {
    if ( event.target.checked ) {
      localStorage.setItem('remember-me', 'true');
    } else {
      localStorage.setItem('remember-me', 'false');
    }
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
