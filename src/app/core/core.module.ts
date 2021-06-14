import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSocialComponent } from './components/footer/components/footer-social/footer-social.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, FooterSocialComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
