import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmShareButtonsComponent } from './alm-share-buttons.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AlmShareButtonComponent } from './alm-share-button/alm-share-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [AlmShareButtonsComponent, AlmShareButtonComponent],
  exports: [
    AlmShareButtonsComponent,
    AlmShareButtonComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
  ],
  entryComponents: [
    AlmShareButtonsComponent,
  ]
})
export class AlmShareButtonsModule { }
