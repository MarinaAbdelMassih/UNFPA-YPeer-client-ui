import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopBannerComponent } from './components/page-top-banner/page-top-banner.component';
import { TranslateLocalDirective } from './directives/translate-local.directive';
import { ImageDescriptionCardComponent } from './components/image-description-card/image-description-card.component';



@NgModule({
  declarations: [PageTopBannerComponent, TranslateLocalDirective, ImageDescriptionCardComponent],
    exports: [
        TranslateLocalDirective,
        ImageDescriptionCardComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
