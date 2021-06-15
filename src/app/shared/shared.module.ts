import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTopBannerComponent } from './components/page-top-banner/page-top-banner.component';



@NgModule({
  declarations: [PageTopBannerComponent],
  exports: [
    PageTopBannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
