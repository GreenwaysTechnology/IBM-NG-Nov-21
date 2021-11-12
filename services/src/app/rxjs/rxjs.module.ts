import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { OfobservableComponent } from './ofobservable.component';
import { FromobservableComponent } from './fromobservable.component';
import { DataprocessingComponent } from './dataprocessing.component';
import { ErrorhandlingComponent } from './errorhandling.component';
import { Cstreamsub2Component } from './cstreamsub2.component';
import { Cstreamsub1Component } from './cstreamsub1.component';
import { Hotstreamsub1Component } from './hotstreamsub1.component';
import { Hotstreamsub2Component } from './hotstreamsub2.component';
import { SubjectoneComponent } from './subjectone.component';
import { SubjecttwoComponent } from './subjecttwo.component';



@NgModule({
  declarations: [
    ObservableComponent,
    OfobservableComponent,
    FromobservableComponent,
    DataprocessingComponent,
    ErrorhandlingComponent,
    Cstreamsub2Component,
    Cstreamsub1Component,
    Hotstreamsub1Component,
    Hotstreamsub2Component,
    SubjectoneComponent,
    SubjecttwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObservableComponent,
    OfobservableComponent,
    FromobservableComponent,
    DataprocessingComponent,
    ErrorhandlingComponent,
    Cstreamsub2Component,
    Cstreamsub1Component,
    Hotstreamsub1Component,
    Hotstreamsub2Component,
    SubjectoneComponent,
    SubjecttwoComponent
  ]
})
export class RxjsModule { }
