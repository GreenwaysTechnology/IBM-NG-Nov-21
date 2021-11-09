import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout/layout.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,LayoutComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    HeaderModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
