import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItworxIframeRoutingModule } from './itworx-iframe-routing.module';
import { ItworxIframeComponent } from './itworx-iframe.component';


@NgModule({
  declarations: [ItworxIframeComponent],
  imports: [
    CommonModule,
    ItworxIframeRoutingModule
  ]
})
export class ItworxIframeModule { }
