import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyformComponent } from './myform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyformComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    MyformComponent
  ]
})
export class MyformsModule { }
