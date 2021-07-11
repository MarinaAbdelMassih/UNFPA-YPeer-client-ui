import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTopBannerComponent} from './components/page-top-banner/page-top-banner.component';
import {TranslateLocalDirective} from './directives/translate-local.directive';
import {ImageDescriptionCardComponent} from './components/image-description-card/image-description-card.component';
import {CategoryItemComponent} from './components/category-item/category-item.component';
import {MatExpansionModule, MatIconModule} from '@angular/material';
import {TagItemComponent} from './components/tag-item/tag-item.component';
import {TranslatePlaceholderLocalDirective} from './directives/translate-placeholder-local.directive';


@NgModule({
  declarations: [PageTopBannerComponent, TranslateLocalDirective, ImageDescriptionCardComponent, CategoryItemComponent, TagItemComponent, TranslatePlaceholderLocalDirective],
  exports: [
    TranslateLocalDirective,
    ImageDescriptionCardComponent,
    PageTopBannerComponent,
    CategoryItemComponent,
    TagItemComponent,
    TranslatePlaceholderLocalDirective
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class SharedModule {
}
