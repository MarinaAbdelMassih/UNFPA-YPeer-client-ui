import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../../../../../../../../src/app/shared/services/language.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit, OnDestroy {
  options = [{value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}];
  titles = [
    {name: 'Dog', sound: 'Dog!'},
    {name: 'Cat', sound: 'Cat!'},
    {name: 'Cow', sound: 'Cow!'},
    {name: 'Fox', sound: 'Fox!'},
  ];
  contactForm: FormGroup;
  emailPattern = '^([a-zA-Z0-9_\\.\\-\\+])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$';
  isArabic: boolean;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
  }

  ngOnInit() {
    this.checkLanguage();

    this.contactForm = this.fb.group({
      titles: ['', [Validators.required]],
      fName: ['', [Validators.required, Validators.maxLength(10)]],
      lName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ['', [Validators.required, Validators.maxLength(25)]],
      options: ['', [Validators.required]],
      massage: ['', [Validators.required, Validators.maxLength(50)]],
      response: ['', [Validators.required]],
      robotOr: ['', [Validators.required]],
    });
  }

  checkLanguage(): void {
    this.subscription = this.languageService.isArabic.subscribe((isArabic: boolean) => {
      this.isArabic = isArabic;
    });
  }

  submitContactForm() {
    console.log('value', this.contactForm);
  }

  changeOption(e) {
    console.log(e.target.value);
  }

  changeResponse(e) {
    console.log(e.target.value);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
