import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { AttributesModule } from './attributes/attributes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    AttributesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
