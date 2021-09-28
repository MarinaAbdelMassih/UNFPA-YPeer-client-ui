import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {EventDetailsViewImageComponent} from '../../projects/client-ui/src/app/modules/event-details/components/event-details-view-image/event-details-view-image.component';
import {EventDetailsModule} from '../../projects/client-ui/src/app/modules/event-details/event-details.module';
import {LightboxModule} from 'ngx-lightbox';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {ConfirmationPopUpComponent} from './shared/components/confirmation-pop-up/confirmation-pop-up.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule, MatDialogModule,
    EventDetailsModule,
    LightboxModule,
    NgCircleProgressModule.forRoot({
      space: -3,
      radius: 100,
      outerStrokeColor: '#808080',
      innerStrokeColor: '#e7e8ea',
      animationDuration: 300,
      backgroundPadding: -26,
      maxPercent: 100,
      outerStrokeWidth: 3,
      innerStrokeWidth: 3,
      titleFontSize: '5',
      subtitleFontSize: '9',
      unitsFontSize: '9',
      imageHeight: 82,
      imageWidth: 93,
    })
  ],
  entryComponents: [EventDetailsViewImageComponent , ConfirmationPopUpComponent],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
