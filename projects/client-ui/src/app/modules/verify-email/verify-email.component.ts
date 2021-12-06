import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../src/app/shared/services/language.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  verifyEmailForm: FormGroup;
  isArabic: boolean;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';


  constructor(private fb: FormBuilder, private languageService: LanguageService) {
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
    console.log(this.verifyEmailForm.value);
  }
}
