import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { AboutUsOurStoryComponent } from './components/about-us-our-story/about-us-our-story.component';
import { AboutUsHistoryComponent } from './components/about-us-history/about-us-history.component';
import { AboutUsAboutUnfpaComponent } from './components/about-us-about-unfpa/about-us-about-unfpa.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';
import {CoreModule} from '../../../../../../src/app/core/core.module';


@NgModule({
  declarations: [AboutUsComponent, AboutUsOurStoryComponent, AboutUsHistoryComponent, AboutUsAboutUnfpaComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class AboutUsModule { }
