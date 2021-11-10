import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from './property.component';
import { GreetingparentComponent } from './greetingparent.component';
import { GreetingchildComponent } from './greetingchild.component';
import { MessageComponent } from './message.component';



@NgModule({
  declarations: [
    PropertyComponent,
    GreetingparentComponent,
    GreetingchildComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PropertyComponent,
    GreetingparentComponent,
    GreetingchildComponent,
    MessageComponent
  ]
})
export class PropertyModule { }
