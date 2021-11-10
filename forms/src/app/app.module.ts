import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyformsModule } from './myforms/myforms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyformsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
