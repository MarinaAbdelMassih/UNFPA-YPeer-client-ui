import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsBannerComponent } from './components/contact-us-banner/contact-us-banner.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import {CoreModule} from '../../../../../../src/app/core/core.module';
import {MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [ContactUsComponent, ContactUsBannerComponent, ContactUsFormComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class ContactUsModule { }
