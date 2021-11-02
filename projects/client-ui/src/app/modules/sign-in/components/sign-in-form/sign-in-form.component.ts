import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Subscription} from 'rxjs';
import {SignInService} from '../../../../../../../../src/app/shared/services/sign-in.service';
import {Router} from '@angular/router';

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
  userLogin: any;
  errorMsg: string;

  constructor(private fb: FormBuilder, private languageService: LanguageService, private signInService: SignInService, private router: Router) {
  }

  ngOnInit() {
    this.checkLanguage();
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    this.isChecked = localStorage.getItem('remember-me') == 'false';
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
      // rememberMe: ['', [Validators.required]],
    });
  }

  submitSignInForm() {
    console.log('value', this.signInForm.value);
    this.signInUserData = {
      username: this.signInForm.controls.email.value,
      password: this.signInForm.controls.password.value,
      authType: 'ALMENTOR',
    };

    this.signInService.signIn(this.signInUserData).then((signInData: any) => {
        if (signInData.success) {
          console.log('status', signInData.data.status);
          localStorage.setItem('username', signInData.data.firstName);
          this.router.navigate(['/home']);
          // if (signInData.data.status == 1) {
          //   this.router.navigate(['/WelcomeScreenApproved']);
          // } else if (signInData.data.status == 2) {
          //   this.router.navigate(['/WelcomeScreenPending']);
          // }
          console.log('signin', signInData.data);
          if (localStorage.getItem('remember-me') == 'true') {
            localStorage.setItem('refresh-token', signInData.data.refreshToken);
          } else {
            localStorage.setItem('user-token', signInData.data.accessToken);
          }
        } else {
          this.errorMsg = signInData.error.message;
        }
      },
      (error) => {
        this.errorMsg = error.message;
      }
    );
  }

  toggleEditable(event) {
    if (event.target.checked) {
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
