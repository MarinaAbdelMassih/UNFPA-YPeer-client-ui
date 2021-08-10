import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {EventDetailsViewImageComponent} from "../../projects/client-ui/src/app/modules/event-details/components/event-details-view-image/event-details-view-image.component";
import {EventDetailsModule} from "../../projects/client-ui/src/app/modules/event-details/event-details.module";

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
    EventDetailsModule
  ],
  entryComponents: [EventDetailsViewImageComponent],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
