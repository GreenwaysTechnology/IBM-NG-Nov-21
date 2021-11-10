import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuraldirectiveModule } from './structuraldirective/structuraldirective.module';
import { AttributedirectiveModule } from './attributedirective/attributedirective.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StructuraldirectiveModule,
    AttributedirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
