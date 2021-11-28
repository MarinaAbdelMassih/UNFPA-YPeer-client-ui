import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { RelatedQuestionsComponent } from './components/related-questions/related-questions.component';
import { UsefulLinksComponent } from './components/useful-links/useful-links.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {MatExpansionModule} from '@angular/material';


@NgModule({
  declarations: [FaqsComponent, RelatedQuestionsComponent, UsefulLinksComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class FaqsModule { }
