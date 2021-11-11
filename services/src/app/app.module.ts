import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingsModule } from './greetings/greetings.module';
import { CmplifecyleModule } from './cmplifecyle/cmplifecyle.module';
import { AsyncservicesModule } from './asyncservices/asyncservices.module';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreetingsModule,
    CmplifecyleModule,
    AsyncservicesModule,
    RxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
