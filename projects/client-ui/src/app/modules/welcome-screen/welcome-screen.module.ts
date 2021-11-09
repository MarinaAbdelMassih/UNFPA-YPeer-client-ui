import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeScreenRoutingModule } from './welcome-screen-routing.module';
import { WelcomeScreenComponent } from './welcome-screen.component';
import {SharedModule} from '../../../../../../src/app/shared/shared.module';


@NgModule({
  declarations: [WelcomeScreenComponent],
    imports: [
        CommonModule,
        WelcomeScreenRoutingModule,
        SharedModule
    ]
})
export class WelcomeScreenModule { }
