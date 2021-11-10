import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EventComponent,
    InputComponent
  ]
})
export class EventsModule { }
