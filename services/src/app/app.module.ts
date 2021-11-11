import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingsModule } from './greetings/greetings.module';
import { CmplifecyleModule } from './cmplifecyle/cmplifecyle.module';
import { AsyncservicesModule } from './asyncservices/asyncservices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreetingsModule,
    CmplifecyleModule,
    AsyncservicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
