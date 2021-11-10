import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributedirectiveComponent } from './attributedirective.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AttributedirectiveComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AttributedirectiveComponent,
    HighlightDirective
  ]
})
export class AttributedirectiveModule { }
