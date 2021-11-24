import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsBannerComponent } from './components/contact-us-banner/contact-us-banner.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import {CoreModule} from '../../../../../../src/app/core/core.module';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule} from '@angular/material';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import {environment} from '../../../environments/environment';

@NgModule({
  declarations: [ContactUsComponent, ContactUsBannerComponent, ContactUsFormComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ]
})
export class ContactUsModule { }
