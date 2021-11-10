import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { DecimalfractionPipe } from './decimalfraction.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    DecimalfractionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent,
    DecimalfractionPipe
  ]
})
export class PipesModule { }
