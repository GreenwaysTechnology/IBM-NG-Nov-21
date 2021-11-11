import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmplifecycleComponent } from './cmplifecycle.component';
import { ChildComponent } from './child.component';



@NgModule({
  declarations: [
    CmplifecycleComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmplifecycleComponent,
    ChildComponent
  ]
})
export class CmplifecyleModule { }
