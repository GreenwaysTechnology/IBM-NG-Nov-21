import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuraldirectiveComponent } from './structuraldirective.component';
import { ForloopComponent } from './forloop.component';
import { IfelseComponent } from './ifelse.component';
import { SwitchcaseComponent } from './switchcase.component';



@NgModule({
  declarations: [
    StructuraldirectiveComponent,
    ForloopComponent,
    IfelseComponent,
    SwitchcaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructuraldirectiveComponent,
    ForloopComponent,
    IfelseComponent,
    SwitchcaseComponent
  ]
})
export class StructuraldirectiveModule { }
