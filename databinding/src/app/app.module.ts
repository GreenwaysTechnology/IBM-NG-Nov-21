import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { AttributesModule } from './attributes/attributes.module';
import { PropertyModule } from './property/property.module';
import { EventsModule } from './events/events.module';
import { CustomeventsModule } from './customevents/customevents.module';
import { CssbindingModule } from './cssbinding/cssbinding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    AttributesModule,
    PropertyModule,
    EventsModule,
    CustomeventsModule,
    CssbindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
