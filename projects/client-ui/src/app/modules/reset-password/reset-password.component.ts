import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../src/app/shared/services/language.service';
import {SignInService} from "../../../../../../src/app/shared/services/sign-in.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  private passwordPattern = '^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*_~+/.])\\S{8,20}$';
  isArabic: boolean;
  token: string;
  passwordIsSent: boolean;

  constructor(private fb: FormBuilder, private languageService: LanguageService,
              private signInService: SignInService, private route: ActivatedRoute,
              private router: Router) {
    this.resetPasswordForm = this.fb.group({
        password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern), Validators.minLength(10)]),
        rePassword: new FormControl('', Validators.required),
      },
      {
        validator: this.MustMatch('password', 'rePassword')
      }
    );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return matchingControl.errors.mustMatch == false;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch: true});
      } else {
        return matchingControl.errors ? matchingControl.errors.mustMatch == false: null;
      }
    };
  }

  ngOnInit() {
    this.checkLanguage();
    this.token = this.route.snapshot.queryParams.token;
  }

  checkLanguage(): void {
    this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  submitResetPasswordForm() {
    this.signInService.changePassword(this.resetPasswordForm.controls.password.value, this.token).then(() => {
      this.passwordIsSent = true;
      setTimeout(() => {this.router.navigate(['/signIn'])})
    });
  }
}
