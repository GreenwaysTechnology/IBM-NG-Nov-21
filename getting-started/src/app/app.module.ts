import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; //built in sub module
import { AppComponent } from "./app.component";
// import { FooterModule } from "./footer/footer.module";
// import { HeaderModule } from "./header/header.module";
import { LayoutModule } from "./layout.module";
// import { MainModule } from "./main/main.module";
// import { FooterComponent } from "./footer/footer.component";
// import { HeaderComponent } from "./header/header.component";
// import { MainComponent } from "./main/main.component";


@NgModule({
  //instructions for angular injector(object creator) for which class objects need to be created
  // declarations: [AppComponent, HeaderComponent, FooterComponent,MainComponent], // View Objects  
  declarations: [AppComponent],
  // imports: [BrowserModule, HeaderModule, FooterModule,MainModule],      // SubModules
  imports:[BrowserModule,LayoutModule],
  providers: [],     // Services
  bootstrap: [AppComponent]
})
export class AppModule { }