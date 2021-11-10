import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeventsComponent } from './customevents.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomeventsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    CustomeventsComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class CustomeventsModule { }
