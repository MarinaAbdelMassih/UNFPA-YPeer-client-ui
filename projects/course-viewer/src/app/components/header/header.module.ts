import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {SharedModule} from "../../../../../../src/app/shared/shared.module";
import {RouterModule} from "@angular/router";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";



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
    ExtendedModule
  ]
})
export class HeaderModule { }
