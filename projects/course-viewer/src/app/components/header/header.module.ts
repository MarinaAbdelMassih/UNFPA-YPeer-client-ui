import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {SharedModule} from "../../../../../../src/app/shared/shared.module";
import {RouterModule} from "@angular/router";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import {NgCircleProgressModule} from "ng-circle-progress";



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    RouterModule,
    FlexModule,
    ExtendedModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      space: -14,
      outerStrokeWidth: 16,
      innerStrokeWidth: 16,
      showInnerStroke:true ,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#989393",
      outerStrokeGradientStopColor: "#53a9ff",
      animationDuration: 300,
      titleFontSize:"10" ,
      unitsFontSize:"10",
      showSubtitle:false ,
      percent: 50,
      titleFontWeight: 'bold',
      unitsFontWeight: 'bold'
    }),
  ]
})
export class HeaderModule { }
