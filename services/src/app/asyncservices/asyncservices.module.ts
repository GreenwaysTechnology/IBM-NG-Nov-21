import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackpatternComponent } from './callbackpattern.component';
import { PromisespatternComponent } from './promisespattern.component';



@NgModule({
  declarations: [
    CallbackpatternComponent,
    PromisespatternComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallbackpatternComponent,
    PromisespatternComponent
  ]
})
export class AsyncservicesModule { }
