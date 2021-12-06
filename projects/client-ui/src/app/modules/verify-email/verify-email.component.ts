import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../src/app/shared/services/language.service';
import {SignInService} from "../../../../../../src/app/shared/services/sign-in.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  verifyEmailForm: FormGroup;
  isArabic: boolean;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  isEmailSent: boolean;


  constructor(private fb: FormBuilder, private languageService: LanguageService,
              private signInService: SignInService, private router: Router) {
    this.verifyEmailForm = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      },
    );
  }

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage(): void {
    this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  submitVerifyEmailForm() {
    this.signInService.verifyEmail(this.verifyEmailForm.controls.email.value)
      .then(() => {
        this.isEmailSent = true;
        setTimeout(() => this.router.navigate(['/home']), 3000);
      });
  }
}
