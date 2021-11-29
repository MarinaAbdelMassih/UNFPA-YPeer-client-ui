import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Subscription} from 'rxjs';
import {ContactUsService} from '../../../../../../../../src/app/shared/services/contact-us.service';
import {IContactUs} from '../../../../../../../../src/app/shared/models/contact-us-model';
import {NameValidator} from "../NameValidator";

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit, OnDestroy {
  options = [
    {nameAr: 'اوبشن1', nameEn: 'option1'},
    {nameAr: 'اوبشن2', nameEn: 'option2'}
  ];
  titles = [
    {nameAr: 'دكتور', nameEn: 'Dr'},
    {nameAr: 'مهندس', nameEn: 'mohnds'}
  ];
  contactForm: FormGroup;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  isArabic: boolean;
  subscription: Subscription;
  contactUsUserData: IContactUs;
  successMessageIsExist: boolean;

  constructor(private fb: FormBuilder, private languageService: LanguageService, private contactUsService: ContactUsService) {
    this.contactForm = this.fb.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required, NameValidator.noWhiteSpace]],
      lastName: ['', [Validators.required, NameValidator.noWhiteSpace]],
      subject: ['', [Validators.required, NameValidator.noWhiteSpace]],
      message: ['', [Validators.required, Validators.maxLength(512)]],
      option: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      response: ['', [Validators.required]],
      captchaToken: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage(): void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  submitContactForm() {
    this.contactUsUserData = {
      title: this.contactForm.controls.title.value,
      firstName: this.contactForm.controls.firstName.value,
      lastName: this.contactForm.controls.lastName.value,
      subject: this.contactForm.controls.subject.value,
      message: this.contactForm.controls.message.value,
      option: this.contactForm.controls.option.value,
      email: this.contactForm.controls.email.value,
      response: this.contactForm.controls.response.value,
      captchaToken: this.contactForm.controls.captchaToken.value
    };
    this.contactUsService.contactUs(this.contactUsUserData).then(() => {
      this.successMessageIsExist = true;
      setTimeout(() => this.successMessageIsExist = false, 5000);
    });
    this.contactForm.reset();
  }

  changeOption(e) {
  }

  changeResponse(e) {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
