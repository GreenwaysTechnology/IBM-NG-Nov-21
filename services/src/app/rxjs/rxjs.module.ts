import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { OfobservableComponent } from './ofobservable.component';
import { FromobservableComponent } from './fromobservable.component';



@NgModule({
  declarations: [
    ObservableComponent,
    OfobservableComponent,
    FromobservableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObservableComponent,
    OfobservableComponent,
    FromobservableComponent
  ]
})
export class RxjsModule { }
