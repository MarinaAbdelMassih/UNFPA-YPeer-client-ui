import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopBannerComponent } from './components/page-top-banner/page-top-banner.component';
import { TranslateLocalDirective } from './directives/translate-local.directive';
import { TranslatePlaceholderLocalDirective } from './directives/translate-placeholder-local.directive';
import { ImageDescriptionCardComponent } from './components/image-description-card/image-description-card.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import {MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { DetailsTopBannerComponent } from './components/details-top-banner/details-top-banner.component';
import { InstructorCardComponent} from './components/instructor-card/instructor-card.component';
import { CourseCardComponent } from './components/course-card/course-card.component';


@NgModule({
  declarations: [
    PageTopBannerComponent,
    TranslateLocalDirective,
    TranslatePlaceholderLocalDirective,
    ImageDescriptionCardComponent,
    CategoryItemComponent,
    TagItemComponent,
    DetailsTopBannerComponent,
    InstructorCardComponent,
    CourseCardComponent
  ],
    exports: [
        TranslateLocalDirective,
        TranslatePlaceholderLocalDirective,
        ImageDescriptionCardComponent,
        PageTopBannerComponent,
        CategoryItemComponent,
        TagItemComponent,
        DetailsTopBannerComponent,
        InstructorCardComponent,
        CourseCardComponent
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule
    ]
})
export class SharedModule { }
