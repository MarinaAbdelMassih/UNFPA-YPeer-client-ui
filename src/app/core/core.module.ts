import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSocialComponent } from './components/footer/components/footer-social/footer-social.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { SubFooterMenuComponent } from './components/sub-footer/components/sub-footer-menu/sub-footer-menu.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, FooterSocialComponent, SubFooterComponent, SubFooterMenuComponent],
  exports: [
    FooterComponent,
    SubFooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
