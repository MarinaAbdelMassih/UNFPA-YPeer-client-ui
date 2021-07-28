import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopBannerComponent } from './components/page-top-banner/page-top-banner.component';
import { TranslateLocalDirective } from './directives/translate-local.directive';
import { ImageDescriptionCardComponent } from './components/image-description-card/image-description-card.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import {MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { DetailsTopBannerComponent } from './components/details-top-banner/details-top-banner.component';
import { LatestItemComponent } from './components/latest-item/latest-item.component';
import { MightLikeItemComponent } from './components/might-like-item/might-like-item.component';



@NgModule({
  declarations: [
    PageTopBannerComponent,
    TranslateLocalDirective,
    ImageDescriptionCardComponent,
    CategoryItemComponent,
    TagItemComponent,
    DetailsTopBannerComponent,
    LatestItemComponent,
    MightLikeItemComponent
  ],
  exports: [
    TranslateLocalDirective,
    ImageDescriptionCardComponent,
    PageTopBannerComponent,
    CategoryItemComponent,
    TagItemComponent,
    DetailsTopBannerComponent,
    LatestItemComponent,
    MightLikeItemComponent
  ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule
    ]
})
export class SharedModule { }
