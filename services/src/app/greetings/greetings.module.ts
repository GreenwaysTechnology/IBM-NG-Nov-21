import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import { GreetingService } from './greeing.service';

@NgModule({
  declarations: [
    GreetingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreetingComponent
  ],
 // providers: [GreetingService]
})
export class GreetingsModule { }
