import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../src/app/shared/services/language.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  private passwordPattern = '^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%^&*_~+/.])\\S{8,20}$';
  isArabic: boolean;

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
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
        return matchingControl.setErrors(null);
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({MustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage(): void {
    this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  submitResetPasswordForm() {
    console.log(this.resetPasswordForm.value);
  }
}
