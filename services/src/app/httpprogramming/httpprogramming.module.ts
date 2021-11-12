import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule, HttpClientModule,FormsModule
  ],
  exports: [
    UserComponent
  ]
})
export class HttpprogrammingModule { }
