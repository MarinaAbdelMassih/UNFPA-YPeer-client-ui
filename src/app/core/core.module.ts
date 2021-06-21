import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSocialComponent } from './components/footer/components/footer-social/footer-social.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { SubFooterMenuComponent } from './components/sub-footer/components/sub-footer-menu/sub-footer-menu.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, FooterSocialComponent, SubFooterComponent, SubFooterMenuComponent],
  exports: [
    FooterComponent,
    SubFooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class CoreModule { }
