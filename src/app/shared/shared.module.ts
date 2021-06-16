import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopBannerComponent } from './components/page-top-banner/page-top-banner.component';
import { TranslateLocalDirective } from './directives/translate-local.directive';



@NgModule({
  declarations: [PageTopBannerComponent, TranslateLocalDirective],
  exports: [
    TranslateLocalDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
