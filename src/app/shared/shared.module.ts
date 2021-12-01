import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTopBannerComponent} from './components/page-top-banner/page-top-banner.component';
import {TranslateLocalDirective} from './directives/translate-local.directive';
import {TranslatePlaceholderLocalDirective} from './directives/translate-placeholder-local.directive';
import {ImageDescriptionCardComponent} from './components/image-description-card/image-description-card.component';
import {CategoryItemComponent} from './components/category-item/category-item.component';
import {MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { DetailsTopBannerComponent } from './components/details-top-banner/details-top-banner.component';
import { LatestItemComponent } from './components/latest-item/latest-item.component';
import { MightLikeItemComponent } from './components/might-like-item/might-like-item.component';
import { InstructorCardComponent }from'./components/instructor-card/instructor-card.component';
import { CourseCardComponent }from'./components/course-card/course-card.component';
import {SafePipe} from "./pipes/safePipe";
import {RouterModule} from "@angular/router";
import { ConfirmationPopUpComponent } from './components/confirmation-pop-up/confirmation-pop-up.component';
import {WelcomeScreenApprovedComponent} from './components/welcome-screen-approved/welcome-screen-approved.component';
import {WelcomeScreenPendingComponent} from './components/welcome-screen-pending/welcome-screen-pending.component';
import {MatDialogModule} from '@angular/material/dialog';
import {InjectIframeDirective} from "./directives/inject-iframe.directive";
import {DeployImageSrcDirective} from "./directives/deploy-image-src.directive";


@NgModule({
  declarations: [
    PageTopBannerComponent,
    TranslateLocalDirective,
    TranslatePlaceholderLocalDirective,
    ImageDescriptionCardComponent,
    CategoryItemComponent,
    TagItemComponent,
    DetailsTopBannerComponent,
    LatestItemComponent,
    InstructorCardComponent,
    CourseCardComponent,
    MightLikeItemComponent,
    SafePipe,
    ConfirmationPopUpComponent,
    WelcomeScreenApprovedComponent,
    WelcomeScreenPendingComponent,
    InjectIframeDirective,
    DeployImageSrcDirective,
  ],
  exports: [
    TranslateLocalDirective,
    TranslatePlaceholderLocalDirective,
    ImageDescriptionCardComponent,
    PageTopBannerComponent,
    CategoryItemComponent,
    TagItemComponent,
    DetailsTopBannerComponent,
    LatestItemComponent,
    MightLikeItemComponent,
    CourseCardComponent,
    InstructorCardComponent,
    SafePipe,
    WelcomeScreenApprovedComponent,
    WelcomeScreenPendingComponent,
    InjectIframeDirective,
    MatDialogModule,
    DeployImageSrcDirective,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatDialogModule
  ]
})
export class SharedModule {
}
