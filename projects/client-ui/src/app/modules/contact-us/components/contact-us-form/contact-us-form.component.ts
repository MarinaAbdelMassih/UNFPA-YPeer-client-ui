import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    {nameAr: ' توصيات أو تعليقات تقنية خاصة بالموقع', nameEn: 'Website technical recommendations/comments'},
    {nameAr: 'توصيات أو تعليقات خاصة بالمحتوى', nameEn: 'Recommendations/Comments related to the content'},
    {nameAr: 'التطوع مع واي بير', nameEn: 'Join Y-PEER'},
    {nameAr: 'التواصل مع فريق تنسيق واي بير', nameEn: 'Contact Y-PEER core team'}
  ];
  titles = [
    {nameAr: 'السيد', nameEn: 'Mr.'},
    {nameAr: 'الانسة', nameEn: 'Ms.'},
    {nameAr: 'السيدة', nameEn: 'Mrs.'}
  ];
  contactForm: FormGroup;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  isArabic: boolean;
  subscription: Subscription;
  contactUsUserData: IContactUs;
  successMessageIsExist: boolean;
  title: string;
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  option: string;
  email: string;
  response: string;
  captchaToken: string;

  constructor(private fb: FormBuilder, private languageService: LanguageService, private contactUsService: ContactUsService) {
    this.contactForm = this.fb.group({
      title: ['', [Validators.required]],
      firstName: ['', [Validators.required, NameValidator.noWhiteSpace]],
      lastName: ['', [Validators.required, NameValidator.noWhiteSpace]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(512)]],
      option: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      response: ['', [Validators.required]],
      captchaToken: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.isArabic = this.languageService.isArabic.value;
    const isCurrentArabic = window.localStorage.getItem('lang') === 'ar';
    this.languageService.isArabic.subscribe((isArabic) => {
      if (isCurrentArabic !== isArabic) {
        window.location.reload();
      }
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
      setTimeout(() =>
        this.successMessageIsExist = false, 5000);
    });
    this.contactForm.reset();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
