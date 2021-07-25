import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopBannerComponent } from './components/page-top-banner/page-top-banner.component';
import { TranslateLocalDirective } from './directives/translate-local.directive';
import { ImageDescriptionCardComponent } from './components/image-description-card/image-description-card.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import {MatExpansionModule, MatIconModule, MatListModule} from '@angular/material';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { LatestItemComponent } from './components/latest-item/latest-item.component';



@NgModule({
  declarations: [PageTopBannerComponent, TranslateLocalDirective, ImageDescriptionCardComponent, CategoryItemComponent, TagItemComponent, LatestItemComponent],
  exports: [
    TranslateLocalDirective,
    ImageDescriptionCardComponent,
    PageTopBannerComponent,
    CategoryItemComponent,
    TagItemComponent,
    LatestItemComponent
  ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule
    ]
})
export class SharedModule { }
